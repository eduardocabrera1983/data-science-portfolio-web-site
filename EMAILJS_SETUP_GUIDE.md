# EmailJS Setup Guide

Follow these steps to configure EmailJS for your contact form:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Once logged in, go to the **Email Services** section
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. **Copy the Service ID** - you'll need this later

## Step 3: Create an Email Template

1. Go to the **Email Templates** section
2. Click "Create New Template"
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}
Inquiry Type: {{inquiry_type}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Template Variables to use:**
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{company}}` - Company name
   - `{{inquiry_type}}` - Type of inquiry
   - `{{message}}` - Message content
   - `{{to_name}}` - Your name (Eduardo Cabrera)

5. In the "To email" field, enter: **edumcabrera@gmail.com**
6. Click "Save"
7. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** section (click your profile icon)
2. Find the **API Keys** section
3. **Copy your Public Key** (it starts with something like "user_...")

## Step 5: Update Your Contact.tsx File

Open `src/pages/Contact.tsx` and replace these values around line 16-18:

```typescript
const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";      // Replace with your Service ID from Step 2
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";    // Replace with your Template ID from Step 3
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";      // Replace with your Public Key from Step 4
```

## Step 6: Test Your Form

1. Run your website: `npm start`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your email (edumcabrera@gmail.com) for the message

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email templates
- ✅ 1 email service
- ✅ Basic support

## Optional: Environment Variables (Recommended for Production)

For better security, you can store your keys in environment variables:

1. Create a `.env` file in your project root:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.tsx to use environment variables:

```typescript
const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";
```

3. Add `.env` to your `.gitignore` file to keep keys private

## Troubleshooting

If emails aren't sending:
- Check browser console for errors
- Verify all IDs are correct
- Make sure your email service is connected in EmailJS dashboard
- Check EmailJS dashboard for delivery logs
- Ensure your account is verified

## Need Help?

- EmailJS Documentation: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- EmailJS Support: Available through their dashboard

---

Once configured, your contact form will automatically send emails to **edumcabrera@gmail.com** whenever someone submits the form!
