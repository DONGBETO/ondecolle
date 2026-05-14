import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Site Web" <${process.env.EMAIL_USER}>`,
      replyTo: body.email,
      to: process.env.EMAIL_USER,
      subject: `Nouveau message : ${body.objet}`,

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px;">
          
          <h2 style="color:#1e3a8a;">Nouveau message reçu</h2>

          <p><b>Nom :</b> ${body.nom}</p>
          <p><b>Prénoms :</b> ${body.prenoms}</p>
          <p><b>Email :</b> ${body.email}</p>
          <p><b>Objet :</b> ${body.objet}</p>

          <div style="
            margin-top:15px;
            padding:15px;
            background:#f3f4f6;
            border-radius:8px;
          ">
            ${body.message}
          </div>

        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    console.log(error);

    return Response.json(
      { error: "Erreur serveur" },
      { status: 500 }
    );
  }
}