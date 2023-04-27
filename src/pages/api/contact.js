require("dotenv").config();
const PASSWORD = process.env.password;
const ACCOUNT = process.env.account;

// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    service: "Yahoo",
    auth: {
      user: ACCOUNT,
      pass: PASSWORD,
    },
    secure: false,
  });

  let messageHtml = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    .header{
      background-color: #5F5D5D;
      color: #F5F5F5;
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;      
      display: flex;
      justify-content: center;
    }

    .body{
      color: #5F5D5D;
      padding: 1rem;
      font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
  </style>
</head>
<body>
  <div class="header">
    <h4>Sole! Recibiste una solicitud de contacto de ${req.body.name}</h4>
  </div>
  <div class="body">
    <p>Su mail es: ${req.body.email}</p>
    <p>Este es su mensaje: ${req.body.message}</p>
  </div>
</body>
</html>
  `;

  const mailData = {
    from: ACCOUNT,
    to: "agus.zanetti4@gmail.com",
    subject: `Mensaje de ${req.body.name}`,
    text: req.body.message + req.body.email,
    html: messageHtml,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  res.status(200);

  console.log(req.body);
}
