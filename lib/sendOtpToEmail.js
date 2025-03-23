
const nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: "rafihasan0075@gmail.com",
      pass: "ggprdtogdvnypafq",
    },
  });

async function sendOtpToEmail(emailData) {
    const { to, message, subject } = emailData;
  
    try {
      const response = await transporter.sendMail({
        from: 'rafihasan0075@gmail.com',
        to: to, 
        subject: subject, 
        html:  `
        <div style="font-size: 24px; font-weight: bold;">
          ${message}
        </div>
      `,  
      });
      return response;
    } catch (error) {
      console.error('Failed to send email:', error);
      throw error;
    }
  }


module.exports = {sendOtpToEmail}