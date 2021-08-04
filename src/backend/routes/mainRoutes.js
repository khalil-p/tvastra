const express = require("express");
const mainController = require("../controller/mainController.js");
const router = express.Router();
const app = express();

router.route("/").get(mainController.homePage);
router.route("/aboutus").get(mainController.aboutusPage);
router.route("/abouthospital").get(mainController.abouthospitalPage);
router.route("/appointment").get(mainController.appointmentPage);
router.route("/contactus").get(mainController.contactusPage);
router.route("/dentistry").get(mainController.dentistryPage);
router.route("/doctor").get(mainController.doctorPage);
router.route("/doctorsprofile").get(mainController.doctorsprofilePage);
router.route("/faq").get(mainController.faqPage);
router.route("/hospital").get(mainController.hospitalPage);
router.route("/login").get(mainController.loginPage);
router.route("/signup").get(mainController.signupPage);
router.route("/submityourquery").get(mainController.submityourqueryPage);
router.route("/tvastraplus").get(mainController.tvastraplusPage);

module.exports = router;
