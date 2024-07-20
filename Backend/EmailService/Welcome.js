const ejs = require("ejs");
const dotenv = require("dotenv");
const sendMail = require("../helpers/sendEmail");
const path = require("path");
dotenv.config();

const sendWelcomeEmail = async (fullname, staffID, password, email) => {
  ejs.renderFile(
    "templates/welcome.ejs",
    {fullname, staffID, password},
    async (err, data) => {
      let messageoption = {
        from: process.env.EMAIL,
        to: email,
        subject: "Welcome to Care Connect",
        html: data,
        // attachments: [
        //   {
        //     path: attachmentPath,
        //   },
        // ],
      };

      try {
        sendMail(messageoption);
      } catch (error) {
        console.log(err);
      }
    }
  );
};

module.exports={sendWelcomeEmail};
