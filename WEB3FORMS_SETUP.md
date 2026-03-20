# Web3Forms Setup - Quick & Easy!

## Get Your Access Key (Takes 2 minutes)

1. Go to: https://web3forms.com/
2. Click "Get Started Free"
3. Enter your email: **vipulpatial82@gmail.com**
4. Check your email inbox for the access key
5. Copy the access key from the email

## Update Your Code

Open `src/sections/Contact.jsx` and find this line (around line 18):

```javascript
formDataToSend.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
```

Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual access key from the email.

Example:
```javascript
formDataToSend.append("access_key", "abc123-your-actual-key-here");
```

## That's It!

- Free plan: 250 submissions/month
- No credit card required
- Emails sent directly to vipulpatial82@gmail.com
- Works immediately after adding the key

## Test Your Form

1. Save the file after adding your access key
2. Run: `npm run dev`
3. Fill out the contact form
4. Check your email inbox!

The form will show:
- "Sending..." while processing
- ✓ Success message when sent
- ✗ Error message if something fails
- Form clears automatically on success
