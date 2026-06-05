import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { user_name, from_name, message } = req.body;

  // Basic validation
  if (!user_name || !from_name || !message) {
    return res.status(400).json({ message: 'Missing required fields: user_name, from_name, and message are required.' });
  }

  // Ensure environment variables are configured
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_PASS;
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || gmailUser;

  if (!gmailUser || !gmailPass) {
    console.error('SMTP configuration error: GMAIL_USER or GMAIL_PASS is not defined.');
    return res.status(500).json({ message: 'Server email service configuration error.' });
  }

  // Set up Nodemailer transport using Gmail SMTP service
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPass,
    },
  });

  // Construct the email content
  const mailOptions = {
    from: `"${user_name}" <${gmailUser}>`, // Gmail always sets 'from' to authenticated user, display name shows sender
    to: receiverEmail,
    replyTo: from_name, // Clicking reply in inbox goes to the user who filled the form
    subject: `Portfolio Contact Form: Message from ${user_name}`,
    text: `Name: ${user_name}\nEmail: ${from_name}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
        <h2 style="color: #0EA5E9; border-bottom: 2px solid #eee; padding-bottom: 10px;">New Message from Portfolio</h2>
        <p><strong>Name:</strong> ${user_name}</p>
        <p><strong>Email:</strong> <a href="mailto:${from_name}">${from_name}</a></p>
        <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0EA5E9; margin-top: 20px; border-radius: 4px;">
          <p style="margin: 0; font-weight: bold; color: #555;">Message:</p>
          <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer sendMail error:', error);
    return res.status(500).json({ message: 'Failed to send email.', error: error.message });
  }
}
