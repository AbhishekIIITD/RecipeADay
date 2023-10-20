// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  port: 587 ,
  host: "smtp-mail.outlook.com",
  auth: {
      user: 'hoiiitd@outlook.com',
      pass: 'humansofiiitd#',
  },
  secure: false, // upgrades later with STARTTLS -- change this based on the PORT
});


export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  if (req.method === 'POST') {
    const {to, subject, text } = req.body;
    const mailData = {
        from: 'youremail@gmail.com',
        to: to,
        subject: subject,
        text: text,
        html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
        attachments: [
            {   // file on disk as an attachment
                filename: 'nodemailer.png',
                path: 'nodemailer.png'
            },
            {   // file on disk as an attachment
                filename: 'text_file.txt',
                path: 'text_file.txt'
            }
        ]
    };

    transporter.sendMail(mailData, (error, info) => {
        if (error) {
            return console.log(error);
        }
        res.status(200).send({ message: "Mail send", message_id: info.messageId });
    });
  }
}
