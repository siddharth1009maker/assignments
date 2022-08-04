var nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    host : "smtp.elasticemail.com",
    port : 2525,
    secure : false,
    auth:{
        user : "siddharthsaachi@gmail.com",
        pass : "1ECFFB485790748927115734F1508630774F",
    },
});

var mailOptions = {
  from: 'siddharthsaachi@gmail.com',
  to: 'siddharth0912000@gmail.com',
  subject: 'Sending Email using Node.js',
   html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});