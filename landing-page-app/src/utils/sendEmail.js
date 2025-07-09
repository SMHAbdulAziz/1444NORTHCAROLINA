import nodemailer from 'nodemailer';

const sendEmail = async (formData) => {
    const { fullName, email, phone } = formData;

    // Create a transporter object using SMTP
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service
        auth: {
            user: 'your-email@gmail.com', // Your email address
            pass: 'your-email-password', // Your email password or app password
        },
    });

    // Set up email data
    const mailOptions = {
        from: email,
        to: '1444northcarolina@houselotandland.org',
        subject: '1444 N CAROLINA Lead Submission',
        text: `Full Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}`,
    };

    // Send email
    try {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

export default sendEmail;