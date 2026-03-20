# EmailJS Setup Guide

Follow these steps to enable email functionality in your contact form:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow the connection steps
5. Copy your **Service ID**

## Step 3: Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:

**Subject:** New message from {{from_name}}

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. Save and copy your **Template ID**

## Step 4: Get Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

## Step 5: Update Contact.jsx
Open `src/sections/Contact.jsx` and replace the placeholders:

```javascript
await emailjs.send(
    "YOUR_SERVICE_ID",      // Replace with your Service ID
    "YOUR_TEMPLATE_ID",     // Replace with your Template ID
    {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Vipul",
    },
    "YOUR_PUBLIC_KEY"       // Replace with your Public Key
);
```

## Step 6: Test
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your email inbox for the message

## Troubleshooting
- Make sure all IDs and keys are correct
- Check EmailJS dashboard for usage limits
- Verify your email service is properly connected
- Check browser console for any errors

## Alternative: Using Formspree (Simpler Option)
If you prefer a simpler setup:
1. Go to [https://formspree.io/](https://formspree.io/)
2. Sign up and create a new form
3. Get your form endpoint
4. Update the form action to use Formspree endpoint

Let me know if you need help with the Formspree implementation instead!
