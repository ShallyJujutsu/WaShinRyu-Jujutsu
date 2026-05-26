import "dotenv/config";
import nodemailer from "nodemailer";
import { Resend } from "resend";

export default function (app) {
  app.post("/api/contact", function (req, response) {
    console.log("Request Object: " + JSON.stringify(req.body));

    async function main() {
      // Initialize Resend with your API key
      let resend = new Resend(process.env.RESEND_API_KEY);

      const { data, error } = await resend.emails.send({
        from: `onboarding@resend.dev`,
        to: `${process.env.USER}`,
        subject: `${req.body.subject}`,
        html: `<p>Contact Name: <b>${req.body.name}</b></p></br>
                <p>Contact Info: <b>${req.body.contactWay}</b></p></br>
                <p>Subject: ${req.body.subject}</p></br>
                <p>Message: ${req.body.message}</p>`, // html body
      });

      if (error) {
        // Handle error (e.g., 403 Forbidden, 429 Rate Limit)
        return console.error(error);
      } else {
        response.json({
          status: "SENT",
        });

        // Success! Access your data
        console.log(data.id);
      }
    }
    main().catch(console.error);
  });
}
