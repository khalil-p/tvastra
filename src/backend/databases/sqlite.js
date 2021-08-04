// const Sequelize = require("sequelize");

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "path_to_database.sqlite",
// });

// const User = sequelize.define("user", {
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true,
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// });

// sequelize.sync
//   .then(() => {
//     console.log(
//       "user table has been successfully created if one doesnot exist"
//     );
//   })
//   .catch((err) => {
//     console.log("The error occured");
//   });

// //   User.create({
// //     'abc',
// //     'abc@gmail.com',
// //     'pass1'
// // }).then((user)=>{
// //     console.log(user);
// // }

// // User.findOne({
// //   where : {
// //     email: 'abc@gmail.com'
// //   }
// // }).then((user) => {
// //     console.log(user);
// // }

// // User.findAll({
// //   attributes: [['email','email_id']]
// // }).then((user)=>{console.log(user);
// // }

// module.exports = {
//   User: User,
// };
