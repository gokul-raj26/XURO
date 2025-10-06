import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactRequest = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const WHATSAPP_TOKEN = Deno.env.get("WHATSAPP_TOKEN");
    const WHATSAPP_PHONE_ID = Deno.env.get("WHATSAPP_PHONE_ID");
    const WHATSAPP_TO = Deno.env.get("WHATSAPP_TO");
    const EMAIL_USER = Deno.env.get("EMAIL_USER");
    const EMAIL_PASS = Deno.env.get("EMAIL_PASS");
    const EMAIL_TO = Deno.env.get("EMAIL_TO");

    const whatsappMessage = `New Inquiry from Xuro Creative Labs Website:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;

    let whatsappSuccess = false;
    let emailSuccess = false;
    let errors: string[] = [];

    // Try WhatsApp first
    if (WHATSAPP_TOKEN && WHATSAPP_PHONE_ID && WHATSAPP_TO) {
      try {
        const whatsappResponse = await fetch(
          `https://graph.facebook.com/v18.0/${WHATSAPP_PHONE_ID}/messages`,
          {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${WHATSAPP_TOKEN}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              messaging_product: "whatsapp",
              to: WHATSAPP_TO,
              type: "text",
              text: {
                body: whatsappMessage,
              },
            }),
          }
        );

        if (whatsappResponse.ok) {
          whatsappSuccess = true;
        } else {
          const errorData = await whatsappResponse.json();
          errors.push(`WhatsApp failed: ${JSON.stringify(errorData)}`);
        }
      } catch (error) {
        errors.push(`WhatsApp error: ${error.message}`);
      }
    }

    // Fallback to Email if WhatsApp failed or not configured
    if (!whatsappSuccess && EMAIL_USER && EMAIL_PASS && EMAIL_TO) {
      try {
        const emailSubject = "New Inquiry - Xuro Creative Labs Website";
        const emailBody = `
New Inquiry from Xuro Creative Labs Website:

Name: ${name}
Email: ${email}
Message: ${message}

---
This inquiry was submitted through the Xuro Creative Labs contact form.
        `.trim();

        // Use a third-party email service API (like SendGrid, Mailgun, or SMTP2GO)
        // For this example, I'll show the structure for a generic SMTP service
        // You'll need to use an email API service that works with fetch
        
        // Option 1: Using SendGrid (recommended)
        const SENDGRID_API_KEY = Deno.env.get("SENDGRID_API_KEY");
        if (SENDGRID_API_KEY) {
          const emailResponse = await fetch(
            "https://api.sendgrid.com/v3/mail/send",
            {
              method: "POST",
              headers: {
                "Authorization": `Bearer ${SENDGRID_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                personalizations: [{
                  to: [{ email: EMAIL_TO }],
                  subject: emailSubject,
                }],
                from: { email: EMAIL_USER },
                content: [{
                  type: "text/plain",
                  value: emailBody,
                }],
              }),
            }
          );

          if (emailResponse.ok || emailResponse.status === 202) {
            emailSuccess = true;
          } else {
            const errorData = await emailResponse.text();
            errors.push(`Email failed: ${errorData}`);
          }
        } else {
          errors.push("Email service not configured (SENDGRID_API_KEY missing)");
        }
      } catch (error) {
        errors.push(`Email error: ${error.message}`);
      }
    }

    // Return response
    if (whatsappSuccess || emailSuccess) {
      return new Response(
        JSON.stringify({
          success: true,
          whatsapp: whatsappSuccess,
          email: emailSuccess,
          message: whatsappSuccess
            ? "Message sent via WhatsApp"
            : "Message sent via Email",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Failed to send notification",
          details: errors,
        }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});