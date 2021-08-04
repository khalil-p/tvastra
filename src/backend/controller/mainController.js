const path = require("path");

// let homePage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-index.html");
//   res.sendFile(pathToHtml);
// };

function homePage(req, res) {
  res.render("M-index");
}

// let aboutusPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-aboutus.html");
//   res.sendFile(pathToHtml);
// };

function aboutusPage(req, res) {
  res.render("M-aboutus");
}

// let abouthospitalPage = (req, res) => {
//   let pathToHtml = path.join(
//     __dirname,
//     "../../client/views/M-abouthospital.html"
//   );
//   res.sendFile(pathToHtml);
// };

function abouthospitalPage(req, res) {
  res.render("M-abouthospital");
}

// let appointmentPage = (req, res) => {
//   let pathToHtml = path.join(
//     __dirname,
//     "../../client/views/M-appointment.html"
//   );
//   res.sendFile(pathToHtml);
// };

function appointmentPage(req, res) {
  res.render("M-appointment");
}

// let contactusPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-contactus.html");
//   res.sendFile(pathToHtml);
// };

function contactusPage(req, res) {
  res.render("M-contactus");
}

// let dentistryPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-dentistry.html");
//   res.sendFile(pathToHtml);
// };

function dentistryPage(req, res) {
  res.render("M-dentistry");
}

// let doctorPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-doctor.html");
//   res.sendFile(pathToHtml);
// };

function doctorPage(req, res) {
  res.render("M-doctor");
}

// let doctorsprofilePage = (req, res) => {
//   let pathToHtml = path.join(
//     __dirname,
//     "../../client/views/M-doctorprofile.html"
//   );
//   res.sendFile(pathToHtml);
// };

function doctorsprofilePage(req, res) {
  res.render("M-doctorsprofile");
}

// let faqPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-faq.html");
//   res.sendFile(pathToHtml);
// };

function faqPage(req, res) {
  res.render("M-faq");
}

// let hospitalPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-hospital.html");
//   res.sendFile(pathToHtml);
// };

function hospitalPage(req, res) {
  res.render("M-hospital");
}

// let loginPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-login.html");
//   res.sendFile(pathToHtml);
// };

function loginPage(req, res) {
  res.render("M-login");
}

// let signupPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/M-signup.html");
//   res.sendFile(pathToHtml);
// };

function signupPage(req, res) {
  res.render("M-signup");
}

// let submityourqueryPage = (req, res) => {
//   let pathToHtml = path.join(
//     __dirname,
//     "../../client/views/M-submityourquery.html"
//   );
//   res.sendFile(pathToHtml);
// };

function submityourqueryPage(req, res) {
  res.render("M-submityourquery");
}

// let tvastraplusPage = (req, res) => {
//   let pathToHtml = path.join(__dirname, "../../client/views/tvastraplus.html");
//   res.sendFile(pathToHtml);
// };

function tvastraplusPage(req, res) {
  res.render("tvastraplus");
}

module.exports = {
  homePage: homePage,
  aboutusPage: aboutusPage,
  abouthospitalPage: abouthospitalPage,
  appointmentPage: appointmentPage,
  contactusPage: contactusPage,
  dentistryPage: dentistryPage,
  doctorPage: doctorPage,
  doctorsprofilePage: doctorsprofilePage,
  faqPage: faqPage,
  hospitalPage: hospitalPage,
  loginPage: loginPage,
  signupPage: signupPage,
  submityourqueryPage: submityourqueryPage,
  tvastraplusPage: tvastraplusPage,
};
