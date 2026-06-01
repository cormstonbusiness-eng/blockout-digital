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
    body { margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: linear-gradient(135deg, #F85008 0%, #16110D 100%); }
    .container { max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(24, 17, 13, 0.15); }
    .header { background-color: #F85008; color: #FFFFFF; padding: 40px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 12px 0 0 0; font-size: 16px; opacity: 0.95; font-weight: 500; }
    .content { padding: 40px 30px; }
    .intro { color: #16110D; font-size: 16px; font-weight: 600; margin-bottom: 28px; }
    .card { background-color: #F9F6F2; border-radius: 16px; padding: 20px; margin-bottom: 16px; border-left: 4px solid #F85008; }
    .card-label { color: #F85008; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 6px; display: block; }
    .card-value { color: #16110D; font-size: 15px; font-weight: 600; word-break: break-word; }
    .card-value a { color: #F85008; text-decoration: none; }
    .message-card { background-color: #FFF4ED; border-radius: 16px; padding: 24px; margin: 24px 0; border: 2px solid #F85008; }
    .message-card p { color: #16110D; margin: 0; line-height: 1.7; font-size: 14px; }
    .message-label { color: #F85008; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 12px; display: block; }
    .footer { background-color: #16110D; color: #FFFFFF; padding: 30px; text-align: center; }
    .footer p { margin: 0 0 8px 0; font-size: 13px; line-height: 1.6; }
    .footer a { color: #F85008; text-decoration: none; font-weight: 600; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 New Enquiry!</h1>
      <p>Someone wants to build something bold</p>
    </div>

    <div class="content">
      <p class="intro">Here's what they sent:</p>

      <div class="card">
        <span class="card-label">Name</span>
        <div class="card-value">${data.name}</div>
      </div>

      <div class="card">
        <span class="card-label">Email</span>
        <div class="card-value"><a href="mailto:${data.email}">${data.email}</a></div>
      </div>

      ${data.company ? `
      <div class="card">
        <span class="card-label">Company</span>
        <div class="card-value">${data.company}</div>
      </div>
      ` : ''}

      ${data.phone ? `
      <div class="card">
        <span class="card-label">Phone</span>
        <div class="card-value"><a href="tel:${data.phone}">${data.phone}</a></div>
      </div>
      ` : ''}

      <div class="card">
        <span class="card-label">Services</span>
        <div class="card-value">${servicesList}</div>
      </div>

      ${data.budget ? `
      <div class="card">
        <span class="card-label">Budget</span>
        <div class="card-value">${data.budget}</div>
      </div>
      ` : ''}

      <div class="message-card">
        <span class="message-label">Their Message</span>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      </div>
    </div>

    <div class="footer">
      <p><strong>Blockout Digital</strong></p>
      <p>Time to respond and build something brilliant 🚀</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}

export function userConfirmationEmail(data: { name: string; message: string }) {
  const firstName = data.name.split(" ")[0];
  const messagePreview = data.message.substring(0, 120) + (data.message.length > 120 ? "..." : "");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body { margin: 0; padding: 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif; background: #F9F6F2; }
    .container { max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 60px rgba(248, 80, 8, 0.12); }
    .header { background: linear-gradient(135deg, #F85008 0%, #FF6B35 100%); color: #FFFFFF; padding: 50px 30px; text-align: center; }
    .header h1 { margin: 0; font-size: 36px; font-weight: 800; letter-spacing: -0.02em; }
    .header p { margin: 12px 0 0 0; font-size: 14px; opacity: 0.95; }
    .content { padding: 40px 30px; text-align: center; }
    .welcome { color: #16110D; font-size: 18px; font-weight: 700; margin-bottom: 12px; }
    .subtitle { color: #4A4038; font-size: 15px; line-height: 1.6; margin-bottom: 32px; }
    .highlight { color: #F85008; font-weight: 700; }
    .card { background-color: #FFF4ED; border-radius: 16px; padding: 24px; margin: 28px 0; border: 2px solid #F85008; text-align: left; }
    .card-label { color: #F85008; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px; display: block; }
    .card-value { color: #16110D; font-size: 14px; line-height: 1.6; }
    .timeline { margin: 32px 0; text-align: left; }
    .step { display: flex; margin-bottom: 20px; }
    .step-icon { width: 44px; height: 44px; background-color: #F85008; border-radius: 12px; display: flex; align-items: center; justify-content: center; color: white; font-weight: 800; font-size: 18px; flex-shrink: 0; margin-right: 16px; }
    .step-content { flex: 1; }
    .step-title { color: #16110D; font-weight: 700; margin-bottom: 4px; font-size: 15px; }
    .step-desc { color: #4A4038; font-size: 13px; line-height: 1.6; }
    .cta-section { background-color: #F9F6F2; border-radius: 16px; padding: 28px; margin: 28px 0; }
    .cta-text { color: #16110D; font-weight: 600; font-size: 15px; margin-bottom: 16px; }
    .social { margin: 28px 0; }
    .social-text { color: #4A4038; font-size: 12px; margin-bottom: 12px; }
    .social-links { display: flex; gap: 12px; justify-content: center; flex-wrap: wrap; }
    .social-link a { color: #F85008; text-decoration: none; font-weight: 600; font-size: 13px; padding: 8px 16px; background-color: #FFF4ED; border-radius: 8px; display: inline-block; }
    .footer { background-color: #16110D; color: #FFFFFF; padding: 32px 30px; text-align: center; }
    .footer p { margin: 0 0 8px 0; font-size: 13px; line-height: 1.6; }
    .footer a { color: #F85008; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Got it! 🎯</h1>
      <p>Your project is in good hands</p>
    </div>

    <div class="content">
      <h2 class="welcome">Thanks for reaching out, ${firstName}!</h2>
      <p class="subtitle">We've received your message and we're excited to hear about your project. Time to do something <span class="highlight">bold.</span></p>

      <div class="card">
        <span class="card-label">Your Project Brief</span>
        <div class="card-value">${messagePreview}</div>
      </div>

      <div class="cta-section">
        <p class="cta-text">Here's what happens next:</p>
        <div class="timeline">
          <div class="step">
            <div class="step-icon">1</div>
            <div class="step-content">
              <div class="step-title">We review your project</div>
              <div class="step-desc">Our team reads your brief carefully and gets the vibe of what you're building.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-icon">2</div>
            <div class="step-content">
              <div class="step-title">We get back to you</div>
              <div class="step-desc">Within 24 hours, you'll hear from us with thoughts, ideas, and next steps.</div>
            </div>
          </div>
          <div class="step">
            <div class="step-icon">3</div>
            <div class="step-content">
              <div class="step-title">Let's build</div>
              <div class="step-desc">If we're a good fit, we'll talk about your vision and make something unmissable.</div>
            </div>
          </div>
        </div>
      </div>

      <p style="color: #F85008; font-weight: 700; font-size: 14px; margin: 24px 0;">No generic responses. No waiting around. Just direct, honest conversation.</p>

      <div class="social">
        <p class="social-text">Follow us for the latest work and insights</p>
        <div class="social-links">
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
      <p style="margin-top: 16px; opacity: 0.8;">Every great project starts with a blockout 🚀</p>
    </div>
  </div>
</body>
</html>
  `.trim();
}
