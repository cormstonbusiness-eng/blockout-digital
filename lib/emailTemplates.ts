export function adminNotificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  services: string[];
  budget?: string;
  message: string;
}) {
  const servicesList = data.services.length > 0 ? data.services.join(", ") : "Not specified";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #16110D; color: #ffffff; padding: 32px 24px; border-bottom: 3px solid #F85008; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 800; }
    .content { padding: 32px 24px; }
    .content h2 { color: #16110D; font-size: 18px; font-weight: 700; margin-top: 24px; margin-bottom: 12px; }
    .content p { color: #4A4038; margin: 0 0 12px 0; line-height: 1.6; }
    .field { margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #e0e0e0; }
    .field-label { color: #F85008; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; }
    .field-value { color: #16110D; font-size: 14px; margin-top: 4px; }
    .message-box { background-color: #f9f9f9; border-left: 3px solid #F85008; padding: 16px; margin: 20px 0; }
    .message-box p { color: #16110D; margin: 0; line-height: 1.6; }
    .footer { background-color: #f9f9f9; padding: 20px 24px; border-top: 1px solid #e0e0e0; text-align: center; }
    .footer p { color: #4A4038; margin: 0; font-size: 12px; line-height: 1.5; }
    .footer a { color: #F85008; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Blockout Digital</h1>
      <p style="margin: 8px 0 0 0; color: #fff; opacity: 0.9;">New Contact Form Submission</p>
    </div>

    <div class="content">
      <p>A new enquiry has been received from the contact form.</p>

      <div class="field">
        <div class="field-label">Name</div>
        <div class="field-value">${data.name}</div>
      </div>

      <div class="field">
        <div class="field-label">Email</div>
        <div class="field-value"><a href="mailto:${data.email}" style="color: #F85008;">${data.email}</a></div>
      </div>

      ${data.company ? `
      <div class="field">
        <div class="field-label">Company</div>
        <div class="field-value">${data.company}</div>
      </div>
      ` : ''}

      ${data.phone ? `
      <div class="field">
        <div class="field-label">Phone</div>
        <div class="field-value"><a href="tel:${data.phone}" style="color: #F85008;">${data.phone}</a></div>
      </div>
      ` : ''}

      <div class="field">
        <div class="field-label">Services Interested In</div>
        <div class="field-value">${servicesList}</div>
      </div>

      ${data.budget ? `
      <div class="field">
        <div class="field-label">Budget</div>
        <div class="field-value">${data.budget}</div>
      </div>
      ` : ''}

      <h2>Message</h2>
      <div class="message-box">
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      </div>

      <p style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e0e0e0; color: #4A4038; font-size: 12px;">
        This is an automated notification from your contact form.
      </p>
    </div>

    <div class="footer">
      <p>&copy; 2026 Blockout Digital. All rights reserved.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function userConfirmationEmail(data: { name: string; message: string }) {
  const firstName = data.name.split(" ")[0];
  const messagePreview = data.message.substring(0, 150) + (data.message.length > 150 ? "..." : "");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background-color: #f5f5f5; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
    .header { background-color: #ffffff; padding: 32px 24px; text-align: center; border-bottom: 3px solid #F85008; }
    .header h1 { margin: 0; font-size: 32px; font-weight: 800; color: #16110D; }
    .header p { margin: 8px 0 0 0; color: #4A4038; font-size: 16px; }
    .content { padding: 40px 24px; text-align: center; }
    .content h2 { color: #16110D; font-size: 22px; font-weight: 700; margin: 0 0 16px 0; }
    .content p { color: #4A4038; margin: 0 0 16px 0; line-height: 1.6; font-size: 15px; }
    .highlight { color: #F85008; font-weight: 700; }
    .summary { background-color: #f9f9f9; border-left: 3px solid #F85008; padding: 20px; margin: 32px 0; text-align: left; }
    .summary p { margin: 8px 0; color: #16110D; font-size: 14px; }
    .summary-label { color: #F85008; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; display: block; margin-bottom: 4px; }
    .timeline { margin: 32px 0; }
    .timeline-item { display: flex; margin-bottom: 16px; }
    .timeline-dot { width: 12px; height: 12px; background-color: #F85008; border-radius: 50%; margin-right: 12px; margin-top: 4px; flex-shrink: 0; }
    .timeline-content { color: #16110D; font-size: 14px; line-height: 1.5; }
    .social { margin: 32px 0; }
    .social-link { display: inline-block; margin: 0 12px; }
    .social-link a { color: #F85008; text-decoration: none; font-weight: 600; font-size: 14px; }
    .footer { background-color: #16110D; color: #ffffff; padding: 32px 24px; text-align: center; }
    .footer p { margin: 0 0 8px 0; font-size: 12px; line-height: 1.5; }
    .footer a { color: #F85008; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Blockout</h1>
      <p>Design that stops people</p>
    </div>

    <div class="content">
      <h2>Thanks for reaching out, ${firstName}!</h2>
      <p>We've received your enquiry and we're excited to hear about your project.</p>

      <div class="summary">
        <p><span class="summary-label">Your Message</span>${messagePreview}</p>
      </div>

      <h2 style="font-size: 18px; margin-top: 32px;">What happens next?</h2>

      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content"><strong>We review your project</strong> — Our team reads through your enquiry carefully.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content"><strong>We get back to you</strong> — Within 24 hours, we'll respond with thoughts and next steps.</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-dot"></div>
          <div class="timeline-content"><strong>Let's build</strong> — If we're a good fit, we'll talk about your vision and how we can help.</div>
        </div>
      </div>

      <p style="margin-top: 24px; color: #F85008; font-weight: 700;">No generic responses. No waiting around. Just direct, honest conversation.</p>

      <div class="social">
        <p style="color: #4A4038; font-size: 12px; margin: 0 0 12px 0;">Follow us for the latest work and insights</p>
        <div>
          <span class="social-link"><a href="https://instagram.com/blockout.digital">Instagram</a></span>
          <span class="social-link"><a href="https://linkedin.com/company/blockout-digital">LinkedIn</a></span>
          <span class="social-link"><a href="https://behance.net/blockout">Behance</a></span>
        </div>
      </div>
    </div>

    <div class="footer">
      <p><strong>Blockout Digital</strong></p>
      <p>Nuneaton, Warwickshire</p>
      <p><a href="mailto:hello@blockoutdigital.com">hello@blockoutdigital.com</a></p>
      <p style="margin-top: 16px; opacity: 0.8;">Every great project starts with a blockout.</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
