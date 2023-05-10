const express = require("express");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors()); // Habilitar CORS
const corsOptions = {
  origin: "https://portfolio-rho-seven-83.vercel.app",
  methods: "GET, POST, PUT, DELETE",
  allowedHeaders: "Content-Type",
};
app.use(cors(corsOptions));
app.use("/", router);
app.use(express.static(path.join(__dirname + "/public")));
app.listen(5200, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "angelyescafuller@gmail.com",
    pass: "firwhouuicmcwofk"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});



router.post("/contact", (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-rho-seven-83.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "angelyescafuller@gmail.com",
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
      console.log(error)
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});
