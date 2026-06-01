import { Resend } from "resend";
import { adminNotificationEmail, userConfirmationEmail } from "@/lib/emailTemplates";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactRequest {
  formData: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message: string;
    budget?: string;
  };
  selectedServices: string[];
}

export async function POST(request: Request) {
  try {
    const body: ContactRequest = await request.json();
    const { formData, selectedServices } = body;

    // Validate required fields
    if (!formData.name?.trim()) {
      return Response.json(
        { success: false, error: "Name is required" },
        { status: 400 }
      );
    }

    if (!formData.email?.trim() || !isValidEmail(formData.email)) {
      return Response.json(
        { success: false, error: "Valid email is required" },
        { status: 400 }
      );
    }

    if (!formData.message?.trim()) {
      return Response.json(
        { success: false, error: "Message is required" },
        { status: 400 }
      );
    }

    // Send admin notification email
    await resend.emails.send({
      from: "Contact Form <noreply@blockout.digital>",
      to: "hello@blockoutdigital.com",
      subject: `New Contact Form Submission from ${formData.name}`,
      html: adminNotificationEmail({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        services: selectedServices,
        budget: formData.budget,
        message: formData.message,
      }),
    });

    // Send user confirmation email
    await resend.emails.send({
      from: "Blockout Digital <hello@blockout.digital>",
      to: formData.email,
      subject: "Thanks for reaching out to Blockout Digital",
      html: userConfirmationEmail({
        name: formData.name,
        message: formData.message,
      }),
    });

    return Response.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
