require("dotenv").config();
const nodemailer = require("nodemailer");
//const { google } = require("googleapis");
//const Mail = require("nodemailer/lib/mailer");
module.exports = function (app) {

  app.post("/api/contact", function (req, response) {
    console.log("Request Object: " + JSON.stringify(req.body));
    // console.log(req.body);

    //    response.json({
    //        success: 'success'
    //    });


    async function main() {
     // let testAccount = await nodemailer.createTestAccount();
      // let oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
      // oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

      // let accessToken = await oAuth2Client.getAccessToken();

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        //works with or without name key
        //name: "www.mail.zoho.com",
        host: "smtp.zoho.com",
        port: 465,
        secure: true, // true for 465, false for other ports

        auth: {
          user: process.env.USER,
          pass: process.env.THIRD_PARTY_APP_PASS,
          // type: 'OAuth2',
          // user: process.env.MAIL_USER,
          // clientId: process.env.CLIENT_ID,
          // clientSecret: process.env.CLIENT_SECRET,
          // refreshToken: process.env.REFRESH_TOKEN,
          // accessToken: accessToken
        },
        //works with or without
        tls: {
          // do not fail on invalid certs(false), changed to true for security and still worked
          rejectUnauthorized: true
        }
      });
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `'Portafoglio App' <${process.env.USER}>`, // sender address
         to: `'Contacts' <${process.env.USER}>`, // list of receivers,MUST BE VALID email
        subject: `${req.body.subject}`, // Subject line
        text: `${req.body.message}`, // plain text body
        // html: "just a test",
        html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
                <p>Contact Info: <b>${req.body.contactWay}</b></p></br>
                <p>Subject: ${req.body.subject}</p></br>
                <p>Message: ${req.body.message}</p>`, // html body
        // dsn: {
        //     return: 'headers',
        //     notify: ['success','failure','delay'],
        //     recipient: `${process.env.MAIL_USER}`
        // }
      }, function (err, res) {
        if (err) {
          //Object being sent back on UNSUCCESSFUL completion of email being sent
          response.json({
            status: "Error Code is shown on server console"
          })
          console.log(`Error Code: ${err.code}`);
        } else {
          console.log(`Message sent: ${res.messageId}`);
          //Object being sent back on SUCCESSFUL completion of email being sent
          response.json({
            status: 'SENT'
          });
          // const resReturned = res.message;
          // response.json({
          //     res_m: 'SENT'
          // });
          // console.log(response.json(res.message));
        };
        transporter.close();

      });
      // console.log("Message sent: %s", info.messageId);



    };
    main().catch(console.error);
  });

};