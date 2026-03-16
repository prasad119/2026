const nodemailer = require('nodemailer');
const fs = require('fs');

async function sendReport() {
  // Read HTML report
  const reportHtml = fs.readFileSync('./playwright-report/index.html', 'utf-8');

  // Configure mail transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // or SMTP server
    auth: {
      user: 'sailakshmiu6@gmail.com',
      pass: '9885576296'
    }
  });

  // Send email
  await transporter.sendMail({
    from: 'sailakshmiu6@gmail.com',
    to: 'sailakshmiu6@gmail.com',
    subject: 'Playwright Test Report',
    html: reportHtml // attach report content
  });

  console.log('Report sent successfully!');
}

sendReport();
