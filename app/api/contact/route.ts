import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // Validare de bază
    if (!firstName || !email || !message) {
      return NextResponse.json(
        { error: 'Numele, email-ul și mesajul sunt obligatorii.' },
        { status: 400 }
      );
    }

    // Verificăm dacă variabilele de mediu sunt setate
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Variabilele de mediu EMAIL_USER sau EMAIL_PASS lipsesc.');
      return NextResponse.json(
        { error: 'Eroare de configurare a serverului de email.' },
        { status: 500 }
      );
    }

    // Configurare transportator Nodemailer pentru Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Opțiunile email-ului
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Trimitem către aceeași adresă (sau poți pune o altă adresă de destinație)
      replyTo: email,
      subject: `Mesaj nou de contact: ${firstName} ${lastName || ''} - core-pc.ro`,
      text: `
        Nume: ${firstName} ${lastName || ''}
        Email: ${email}
        Telefon: ${phone || 'Nespecificat'}
        
        Mesaj:
        ${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-w-2xl mx-auto p-4 border rounded-lg shadow-sm">
          <h2 style="color: #10b981;">Mesaj nou de pe site-ul core-pc.ro</h2>
          <p><strong>Nume:</strong> ${firstName} ${lastName || ''}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefon:</strong> ${phone || 'Nespecificat'}</p>
          <hr style="border: none; border-top: 1px solid #eaeaea; margin: 20px 0;" />
          <p><strong>Mesaj:</strong></p>
          <p style="white-space: pre-wrap; background-color: #f9f9f9; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    };

    // Trimitem email-ul
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mesajul a fost trimis cu succes!' });
  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}
