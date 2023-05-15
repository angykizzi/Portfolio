// const express = require("express");
// const path = require("path");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors()); // Habilitar CORS
// app.use(express.json());
// app.use("/", router);
// app.use(express.static(path.join(__dirname + "/public")));
// app.listen(5200, () => console.log("Server Running"));


// const contactEmail = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: "angelyescafuller@gmail.com",
//     pass: "firwhouuicmcwofk"
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });



// router.post("/contact", (req, res) => {
//   res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-rho-seven-83.vercel.app');
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   const name = req.body.firstName + req.body.lastName;
//   const email = req.body.email;
//   const message = req.body.message;
//   const phone = req.body.phone;
//   const mail = {
//     from: name,
//     to: "angelyescafuller@gmail.com",
//     subject: "Contact Form Submission - Portfolio",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Phone: ${phone}</p>
//            <p>Message: ${message}</p>`,
//   };
//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json(error);
//       console.log(error)
//     } else {
//       res.json({ code: 200, status: "Message Sent" });
//     }
//   });
// });

const express = require("express");
const path = require("path");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', 'https://portfolio-l3q8w13v4-angykizzi.vercel.app/');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  
  return await fn(req, res);
};

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

const handleContactRequest = (req, res) => {
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
};

const handleRequest = (req, res) => {
  const d = new Date();
  res.end(d.toString());
};

const wrappedContactHandler = allowCors(handleContactRequest);
const wrappedHandler = allowCors(handleRequest);

app.use(cors());
app.use(express.json());
app.use("/", router);
app.use(express.static(path.join(__dirname + "/public")));

router.post("/contact", wrappedContactHandler);
router.all("/", wrappedHandler);

app.listen(5200, () => console.log("Server Running"));

module.exports = app;