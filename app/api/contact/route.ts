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

    // Generare număr comandă
    const orderNumber = `CMD-${Math.floor(10000 + Math.random() * 90000)}`;
    const fullName = `${firstName} ${lastName || ''}`.trim();

    // Trimite datele către Google Sheets (în fundal)
    try {
      await fetch('https://script.google.com/macros/s/AKfycbzhQb0YmCzVwJcbxwaljZl0q3WzYeD3dWW9UeTHAVNQlRa9t4eYVzL0njfN12ONrzEI/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderNumber,
          firstName: fullName,
          email,
          phone: phone || 'Nespecificat',
          message
        }),
      });
    } catch (sheetError) {
      console.error('Eroare la salvarea in Google Sheets:', sheetError);
      // Continuăm chiar dacă Google Sheets eșuează, pentru a trimite măcar email-ul
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
      subject: `Mesaj nou de contact [${orderNumber}]: ${fullName} - core-pc.ro`,
      text: `
        Nr. Comandă: ${orderNumber}
        Nume: ${fullName}
        Email: ${email}
        Telefon: ${phone || 'Nespecificat'}
        
        Mesaj:
        ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Mesaj Nou - Core-PC</title>
        </head>
        <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f3f4f6; margin: 0; padding: 40px 20px;">
          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);">
            <!-- Header -->
            <tr>
              <td style="background-color: #10b981; padding: 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Mesaj Nou</h1>
                <p style="color: #d1fae5; margin: 8px 0 0 0; font-size: 14px;">Ai primit o solicitare de pe core-pc.ro</p>
              </td>
            </tr>
            
            <!-- Body -->
            <tr>
              <td style="padding: 40px 30px;">
                
                <!-- Client Details -->
                <h2 style="color: #111827; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6;">Detalii Client</h2>
                
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="margin-bottom: 32px;">
                  <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 100px; border-bottom: 1px solid #f9fafb;"><strong>Nr. Comandă:</strong></td>
                    <td style="padding: 10px 0; color: #10b981; font-size: 15px; font-weight: 700; border-bottom: 1px solid #f9fafb;">${orderNumber}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 100px; border-bottom: 1px solid #f9fafb;"><strong>Nume:</strong></td>
                    <td style="padding: 10px 0; color: #111827; font-size: 15px; font-weight: 500; border-bottom: 1px solid #f9fafb;">${fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px; border-bottom: 1px solid #f9fafb;"><strong>Email:</strong></td>
                    <td style="padding: 10px 0; font-size: 15px; border-bottom: 1px solid #f9fafb;">
                      <a href="mailto:${email}" style="color: #10b981; text-decoration: none; font-weight: 500;">${email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 10px 0; color: #6b7280; font-size: 14px;"><strong>Telefon:</strong></td>
                    <td style="padding: 10px 0; font-size: 15px;">
                      <a href="tel:${phone || ''}" style="color: #111827; text-decoration: none; font-weight: 500;">${phone || '<span style="color: #9ca3af; font-style: italic;">Nespecificat</span>'}</a>
                    </td>
                  </tr>
                </table>

                <!-- Message Content -->
                <h2 style="color: #111827; font-size: 18px; margin: 0 0 16px 0; padding-bottom: 12px; border-bottom: 2px solid #f3f4f6;">Conținut Mesaj</h2>
                
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; color: #374151; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${message}</div>
                
              </td>
            </tr>
            
            <!-- Footer -->
            <tr>
              <td style="background-color: #f9fafb; padding: 24px 30px; text-align: center; border-top: 1px solid #e5e7eb;">
                <p style="color: #9ca3af; font-size: 13px; margin: 0;">
                  Acest email a fost generat automat din formularul de contact de pe <a href="https://core-pc.ro" style="color: #10b981; text-decoration: none;">core-pc.ro</a>.
                </p>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    // Trimitem email-ul
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Mesajul a fost trimis cu succes!', orderNumber });
  } catch (error) {
    console.error('Eroare la trimiterea email-ului:', error);
    return NextResponse.json(
      { error: 'A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.' },
      { status: 500 }
    );
  }
}
