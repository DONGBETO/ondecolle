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
      from: body.email,
      to: process.env.EMAIL_USER,
      subject: body.objet,
      html: `
        <h3>Nouveau message</h3>
        <p><b>Nom:</b> ${body.nom}</p>
        <p><b>Prénoms:</b> ${body.prenoms}</p>
        <p><b>Email:</b> ${body.email}</p>
        <p><b>Message:</b> ${body.message}</p>
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