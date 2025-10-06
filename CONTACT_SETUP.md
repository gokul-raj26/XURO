# Contact Form Integration Setup

Your contact form is now integrated with WhatsApp and Email notifications using Supabase Edge Functions.

## How It Works

When someone submits the contact form:
1. **WhatsApp notification** is sent first (if configured)
2. **Email notification** is sent as fallback (if WhatsApp fails or is not configured)

## Setup Instructions

### 1. WhatsApp Cloud API Setup

1. Go to [Meta for Developers](https://developers.facebook.com/apps/)
2. Create a new app or select an existing one
3. Add **WhatsApp** product to your app
4. Navigate to **API Setup** section
5. Get the following values:
   - **Access Token** (`WHATSAPP_TOKEN`)
   - **Phone Number ID** (`WHATSAPP_PHONE_ID`)
   - **Your WhatsApp Number** with country code (`WHATSAPP_TO`)

### 2. Email Setup (SendGrid)

1. Sign up at [SendGrid](https://signup.sendgrid.com/)
2. Verify your sender email address
3. Create an API Key:
   - Go to Settings > API Keys
   - Click "Create API Key"
   - Give it "Full Access" permissions
   - Copy the API key (`SENDGRID_API_KEY`)

### 3. Configure Supabase Edge Function Secrets

Run these commands in your terminal (replace with your actual values):

```bash
# WhatsApp Configuration
npx supabase secrets set WHATSAPP_TOKEN=your_actual_whatsapp_token
npx supabase secrets set WHATSAPP_PHONE_ID=your_actual_phone_id
npx supabase secrets set WHATSAPP_TO=919876543210

# Email Configuration
npx supabase secrets set SENDGRID_API_KEY=your_actual_sendgrid_api_key
npx supabase secrets set EMAIL_USER=xurocreativelabs@gmail.com
npx supabase secrets set EMAIL_TO=xurocreativelabs@gmail.com
```

### 4. Test the Integration

1. Visit your contact page
2. Fill out the form with test data
3. Submit the form
4. Check your WhatsApp or Email for the notification

## Message Format

### WhatsApp Message:
```
New Inquiry from Xuro Creative Labs Website:

Name: [Name]
Email: [Email]
Message: [Message]
```

### Email:
- **Subject:** New Inquiry - Xuro Creative Labs Website
- **Body:** Same format as WhatsApp message

## Fallback Logic

- If WhatsApp is configured and works → ✅ WhatsApp only
- If WhatsApp fails or not configured → 📧 Email fallback
- If both fail → ❌ Error message shown to user

## Alternative Email Providers

If you don't want to use SendGrid, you can modify the edge function to use:
- **Mailgun**: https://www.mailgun.com/
- **Amazon SES**: https://aws.amazon.com/ses/
- **Resend**: https://resend.com/

Update the email sending logic in `supabase/functions/send-contact-notification/index.ts`

## Troubleshooting

### WhatsApp not working:
- Verify your access token is valid
- Ensure phone number is in international format (e.g., 919876543210)
- Check Meta Business Suite for app restrictions

### Email not working:
- Verify sender email is verified in SendGrid
- Check API key has correct permissions
- Look at SendGrid Activity Feed for delivery status

### Both not working:
- Check browser console for errors
- Verify Supabase edge function is deployed
- Check edge function logs in Supabase dashboard

## Security Notes

- Never commit your `.env` file with real credentials
- Edge function secrets are encrypted in Supabase
- The function is public (no JWT verification) to allow form submissions from anyone
- Consider adding rate limiting for production use
