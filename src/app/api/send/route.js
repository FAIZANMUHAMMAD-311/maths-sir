import nodemailer from 'nodemailer';

// Create a transporter for nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibrarthemathematician@gmail.com', // Your Gmail address
    pass: 'uesk yezi adsa jyva', // Your Gmail app password
  },
});

// POST handler for sending emails
export async function POST(request) {
  try {
    // Parse the request body
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return new Response(JSON.stringify({ message: 'All fields are required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Email content
    const mailOptions = {
      from: 'ibrarthemathematician@gmail.com',
      to: 'ibrarthemathematician@gmail.com', // Recipient email
      subject: 'New Hire Me Form Submission',
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return success response
    return new Response(JSON.stringify({ message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ message: 'Failed to send email' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
