import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
    const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || "naz.moon1998@gmail.com";

    if (!gmailUser || !gmailAppPassword) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD environment variables.");
      return NextResponse.json(
        { error: "Email service is not configured on the server." },
        { status: 500 }
      );
    }

    // Configure Nodemailer transporter with Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    const emailSubject = subject?.trim() 
      ? `[Portfolio Contact] ${subject.trim()}`
      : `[Portfolio Contact] New message from ${name}`;

    const formattedDate = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      dateStyle: "full",
      timeStyle: "medium",
    });

    // Rich modern HTML email layout
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background-color: #f8fafc; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
          .header { background: linear-gradient(135deg, #f43f5e 0%, #ec4899 100%); padding: 32px 24px; text-align: center; color: #ffffff; }
          .header h1 { margin: 0; font-size: 22px; font-weight: 700; letter-spacing: -0.025em; }
          .header p { margin: 6px 0 0; opacity: 0.9; font-size: 14px; }
          .content { padding: 32px 24px; }
          .meta-box { background: #f1f5f9; border-radius: 12px; padding: 16px 20px; margin-bottom: 24px; border-left: 4px solid #f43f5e; }
          .meta-item { display: flex; margin-bottom: 8px; font-size: 14px; }
          .meta-item:last-child { margin-bottom: 0; }
          .meta-label { font-weight: 600; color: #64748b; width: 100px; flex-shrink: 0; }
          .meta-value { color: #0f172a; font-weight: 500; word-break: break-word; }
          .meta-value a { color: #f43f5e; text-decoration: none; font-weight: 600; }
          .message-title { font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; color: #64748b; margin-bottom: 12px; }
          .message-box { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; font-size: 15px; color: #1e293b; white-space: pre-wrap; line-height: 1.7; }
          .footer { background: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8; }
          .button { display: inline-block; background: #f43f5e; color: #ffffff !important; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; margin-top: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>📬 New Direct Message</h1>
            <p>From your portfolio website contact form</p>
          </div>
          <div class="content">
            <div class="meta-box">
              <div class="meta-item">
                <span class="meta-label">From:</span>
                <span class="meta-value"><strong>${name}</strong></span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Email:</span>
                <span class="meta-value"><a href="mailto:${email}">${email}</a></span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Subject:</span>
                <span class="meta-value">${subject || "General Inquiry"}</span>
              </div>
              <div class="meta-item">
                <span class="meta-label">Received:</span>
                <span class="meta-value">${formattedDate}</span>
              </div>
            </div>

            <div class="message-title">Message Content</div>
            <div class="message-box">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</div>

            <div style="text-align: center; margin-top: 24px;">
              <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Portfolio Inquiry')}" class="button">
                Reply Directly to ${name}
              </a>
            </div>
          </div>
          <div class="footer">
            Sent automatically by Najmun Naher's Portfolio Server via Gmail SMTP
          </div>
        </div>
      </body>
      </html>
    `;

    // Send the email
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${gmailUser}>`,
      to: receiverEmail,
      replyTo: email,
      subject: emailSubject,
      text: `New Portfolio Message from ${name} (${email}):\n\nSubject: ${subject}\n\nMessage:\n${message}\n\nDate: ${formattedDate}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: any) {
    console.error("Nodemailer dispatch error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
