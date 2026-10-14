import nodemailer from "nodemailer";

// nodemailer a besoin du runtime Node.js (pas de l'Edge runtime).
export const runtime = "nodejs";

type ContactPayload = {
  prenoms: string;
  nom: string;
  email: string;
  objet: string;
  message: string;
  isInBenin: string;
  departement: string;
  pays: string;
};

const MAX_LENGTHS: Record<keyof ContactPayload, number> = {
  prenoms: 100,
  nom: 100,
  email: 200,
  objet: 200,
  message: 5000,
  isInBenin: 3,
  departement: 50,
  pays: 100,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Échappe le HTML pour éviter toute injection dans l'email reçu.
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function parsePayload(body: unknown): { data?: ContactPayload; error?: string } {
  if (!body || typeof body !== "object") return { error: "Requête invalide" };

  const raw = body as Record<string, unknown>;
  const data = {} as ContactPayload;

  for (const key of Object.keys(MAX_LENGTHS) as (keyof ContactPayload)[]) {
    const value = raw[key];
    const str = typeof value === "string" ? value.trim() : "";
    if (str.length > MAX_LENGTHS[key]) return { error: `Champ « ${key} » trop long` };
    data[key] = str;
  }

  if (!data.prenoms || !data.nom || !data.objet || !data.message) {
    return { error: "Champs obligatoires manquants" };
  }
  if (!EMAIL_REGEX.test(data.email)) return { error: "Email invalide" };

  return { data };
}

export async function POST(req: Request) {
  const { EMAIL_USER, EMAIL_PASS, EMAIL_RECEIVER } = process.env;

  if (!EMAIL_USER || !EMAIL_PASS) {
    console.error("[contact] EMAIL_USER / EMAIL_PASS non configurés");
    return Response.json(
      { error: "Service de messagerie non configuré" },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Requête invalide" }, { status: 400 });
  }

  const { data, error } = parsePayload(body);
  if (!data) {
    return Response.json({ error }, { status: 400 });
  }

  const e = (v: string) => escapeHtml(v);

  const localisation =
    data.isInBenin === "oui"
      ? `Bénin${data.departement ? ` — ${e(data.departement)}` : ""}`
      : data.isInBenin === "non"
        ? e(data.pays || "Hors Bénin")
        : "Non précisée";

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    await transporter.sendMail({
      from: `"Site Web" <${EMAIL_USER}>`,
      replyTo: data.email,
      to: EMAIL_RECEIVER || EMAIL_USER,
      // Pas de retour à la ligne dans le sujet (en-tête SMTP).
      subject: `Nouveau message : ${data.objet.replace(/[\r\n]+/g, " ")}`,
      text: [
        `Nom : ${data.nom}`,
        `Prénoms : ${data.prenoms}`,
        `Email : ${data.email}`,
        `Localisation : ${data.isInBenin === "oui" ? `Bénin ${data.departement}` : data.pays || "Non précisée"}`,
        `Objet : ${data.objet}`,
        "",
        data.message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          <h2 style="color:#1e3a8a;">Nouveau message reçu</h2>

          <p><b>Nom :</b> ${e(data.nom)}</p>
          <p><b>Prénoms :</b> ${e(data.prenoms)}</p>
          <p><b>Email :</b> ${e(data.email)}</p>
          <p><b>Localisation :</b> ${localisation}</p>
          <p><b>Objet :</b> ${e(data.objet)}</p>

          <div style="margin-top:15px; padding:15px; background:#f3f4f6; border-radius:8px; white-space:pre-wrap;">${e(data.message)}</div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("[contact] Échec de l'envoi :", err);
    return Response.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
