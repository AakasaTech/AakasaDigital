import { NextResponse } from 'next/server';
import https from 'node:https';

function sendEmail(apiKey: string, payload: object): Promise<void> {
  return new Promise((resolve, reject) => {
    const body = Buffer.from(JSON.stringify(payload));
    const req = https.request(
      {
        hostname: 'api.resend.com',
        path: '/emails',
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Content-Length': body.length,
        },
        agent: new https.Agent({ keepAlive: false }),
      },
      (res) => {
        const chunks: Buffer[] = [];
        res.on('data', (c) => chunks.push(c));
        res.on('end', () => {
          if (res.statusCode && res.statusCode >= 400) {
            reject(new Error(`Resend error ${res.statusCode}: ${Buffer.concat(chunks).toString()}`));
          } else {
            resolve();
          }
        });
      },
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, message } = body as {
      name: string;
      email: string;
      company?: string;
      message: string;
    };

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[Contact] RESEND_API_KEY is not set');
      return NextResponse.json({ error: 'Email service is not configured.' }, { status: 500 });
    }

    await sendEmail(apiKey, {
      from: 'Aakasa Digital <hello@aakasa.dev>',
      to: ['hello@aakasa.dev'],
      reply_to: email,
      subject: `Contact: ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;color:#1a1a2e">
          <div style="background:linear-gradient(135deg,#1e3a8a 0%,#2563eb 100%);padding:32px 40px;border-radius:12px 12px 0 0">
            <h1 style="margin:0;font-size:20px;font-weight:700;color:#fff">New Contact Form Submission</h1>
            <p style="margin:6px 0 0;font-size:14px;color:#bfdbfe">aakasa.dev</p>
          </div>
          <div style="background:#f8fafc;padding:32px 40px;border:1px solid #e2e8f0;border-top:none;border-radius:0 0 12px 12px">
            <table style="width:100%;border-collapse:collapse">
              <tr>
                <td style="padding:10px 0;font-size:13px;font-weight:600;color:#64748b;width:100px;vertical-align:top">Name</td>
                <td style="padding:10px 0;font-size:14px;color:#1e293b">${name}</td>
              </tr>
              <tr style="border-top:1px solid #e2e8f0">
                <td style="padding:10px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top">Email</td>
                <td style="padding:10px 0;font-size:14px;color:#1e293b"><a href="mailto:${email}" style="color:#2563eb">${email}</a></td>
              </tr>
              ${company ? `
              <tr style="border-top:1px solid #e2e8f0">
                <td style="padding:10px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top">Company</td>
                <td style="padding:10px 0;font-size:14px;color:#1e293b">${company}</td>
              </tr>` : ''}
              <tr style="border-top:1px solid #e2e8f0">
                <td style="padding:10px 0;font-size:13px;font-weight:600;color:#64748b;vertical-align:top">Message</td>
                <td style="padding:10px 0;font-size:14px;color:#1e293b;white-space:pre-wrap">${message}</td>
              </tr>
            </table>
            <div style="margin-top:28px;padding-top:20px;border-top:1px solid #e2e8f0;font-size:12px;color:#94a3b8">
              Sent from the contact form at <a href="https://aakasa.dev/contact" style="color:#2563eb">aakasa.dev/contact</a>
            </div>
          </div>
        </div>
      `,
    });

    console.log('[Contact] Email sent from', email);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Failed to send email:', err);
    return NextResponse.json({ error: 'Internal server error.' }, { status: 500 });
  }
}
