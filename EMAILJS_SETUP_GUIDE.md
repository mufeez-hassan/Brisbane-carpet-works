# EmailJS Setup Guide for Brisbane Carpet Works

## Overview
All forms on your website (Quote Form, Booking Form, Contact Form) are configured to send emails to: **Brisbanecarpetworks@gmail.com**

## Step-by-Step Setup Instructions

### 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Add Email Service
1. Go to **Email Services** in the dashboard
2. Click **Add New Service**
3. Select **Gmail** (since you're using @gmail.com)
4. Click **Connect Account**
5. Sign in with **Brisbanecarpetworks@gmail.com**
6. Give your service a name (e.g., "Brisbane Carpet Works Gmail")
7. Copy the **Service ID** (looks like: `service_xxxxxxx`)

### 3. Create Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template content:

```
Subject: {{subject}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}

Service: {{service}}
Suburb: {{suburb}}
Preferred Date: {{preferred_date}}

Message:
{{message}}

Additional Details:
Carpet Issue: {{carpet_issue}}
Additional Details: {{additional_details}}
Preferred Time: {{preferred_time}}

---
This email was sent from Brisbane Carpet Works website contact form.
```

4. Set **To Email** field to: `Brisbanecarpetworks@gmail.com`
5. Save the template and copy the **Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string)
3. Copy it

### 5. Update .env File
1. Open the `.env` file in your project root
2. Replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

3. Save the file
4. **IMPORTANT**: Restart your development server after updating .env

### 6. Test the Forms
1. Go to your website
2. Fill out the quote form on the homepage
3. Submit the form
4. Check **Brisbanecarpetworks@gmail.com** inbox
5. You should receive an email with all the form details

## What Forms Send Emails?

### 1. **Quote Form** (Home Page Hero)
Sends: Name, Phone, Email, Service, Suburb, Preferred Date, Message

### 2. **Booking Form** (/booking page)
Sends: Full Name, Phone, Email, Suburb, Service, Preferred Date, Preferred Time, Carpet Issue, Additional Details

### 3. **Contact Form** (/contact page)
Sends: Name, Phone, Email, Service, Suburb, Message

## Free Plan Limitations
- **200 emails per month** (EmailJS free tier)
- If you need more, upgrade to paid plan
- Monitor usage in EmailJS dashboard

## Important Notes

### Security
- Never commit the `.env` file to git (it's already in .gitignore)
- The `.env.example` file shows the format but has placeholder values
- Keep your EmailJS keys private

### Gmail Configuration
If emails aren't being received:
1. Check your Gmail spam folder
2. Enable "Less secure app access" in Gmail settings (if needed)
3. Or use Gmail App Password for better security

### Testing
After setup, test all three forms:
- Home page quote form
- /booking page form
- /contact page form

All should send emails to: **Brisbanecarpetworks@gmail.com**

## Troubleshooting

### Problem: Form submits but no email received
**Solution**: 
- Check EmailJS dashboard for errors
- Verify Service ID, Template ID, and Public Key are correct
- Check Gmail spam folder
- Restart dev server after changing .env

### Problem: "EmailJS is not defined" error
**Solution**:
- Make sure `@emailjs/browser` is installed: `npm install @emailjs/browser`
- Restart your dev server

### Problem: Environment variables not loading
**Solution**:
- Make sure .env file is in project root (same folder as package.json)
- Variable names must start with `VITE_`
- Restart dev server after any .env changes

## Support
If you need help with EmailJS setup:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: support@emailjs.com

---

**Your website is ready! Just complete the EmailJS setup and customers can start sending you quote requests directly to Brisbanecarpetworks@gmail.com** 🎉
