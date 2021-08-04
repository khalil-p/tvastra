const express = require("express");
const router = express.Router();
const app = express();
const cors = require("cors");
const compression = require("compression");
const bodyParser = require("body-parser");
const logger = require("morgan");
const path = require("path");
const mainRoutes = require("./backend/routes/mainRoutes");

app.use(cors());
app.use(compression());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", __dirname + "/client/views/");
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");

app.use(express.static(path.resolve(__dirname + "/images")));
app.use(express.static(path.resolve(__dirname + "/videos")));
app.use(express.static(path.resolve(__dirname + "/client/public")));
// app.use(express.static(path.resolve(__dirname + "/client/public/script")));
// app.use(express.static(path.resolve(__dirname + "/client/public/assets")));
app.use(logger("dev"));

// function home(req, res) {
//   res.render("index");
// }

// router.route("/").get(home);
// app.use("/", home);

app.use("/", mainRoutes); // P

// app.get("/", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-index.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/aboutus", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-aboutus.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/abouthospital", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-abouthospital.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/appointment", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-appointment.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/contactus", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-contactus.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/dentistry", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-dentistry.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/doctor", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-doctor.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/doctorsprofile", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-doctorsprofile.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/faq", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-faq.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/hospital", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-hospital.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/login", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-login.html.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/signup", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/M-signup.html");
//   res.sendFile(pathToIndex);
// });
// app.get("/submityourquery", (req, res) => {
//   let pathToIndex = path.join(
//     __dirname,
//     "/client/views/M-submityourquery.html"
//   );
//   res.sendFile(pathToIndex);
// });
// app.get("/tvastraplus", (req, res) => {
//   let pathToIndex = path.join(__dirname, "/client/views/tvastraplus.html");
//   res.sendFile(pathToIndex);
// });

app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), () => {
  console.log("Application listening in port", app.get("port"));
});

module.exports = app;
