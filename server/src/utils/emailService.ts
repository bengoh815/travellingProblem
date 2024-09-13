import nodemailer from "nodemailer";
import { EMAIL_PASS, EMAIL_USER } from "../config";

// Configuration for the email transport (use environment variables in production)
const transporter = nodemailer.createTransport({
  service: "gmail", // You can also use other services like Outlook, etc.
  auth: {
    user: EMAIL_USER, // Your email address
    pass: EMAIL_PASS, // Your email password or app password if using Gmail
  },
});

// Function to send verification email
export const sendVerificationEmail = async (
  email: string,
  verificationLink: string
) => {
  try {
    const mailOptions = {
      from: EMAIL_USER, // Your email address
      to: email, // User's email address
      subject: "Verify your email address",
      html: `
        <h3>Hello,</h3>
        <p>Thank you for registering! Please verify your email by clicking the link below:</p>
        <a href="${verificationLink}">Verify your email</a>
        <p>This link will expire in 24 hours.</p>
      `,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Verification email sent:", info.response);
  } catch (error) {
    console.error("Error sending verification email:", error);
    throw new Error("Could not send verification email");
  }
};
