const UserModel = require("../models/User")
exports.get_users = async (req, res, next) => {
  try {
    //get users from db
    const userList = await UserModel.findAll();
    console.log("user list", userList)
    res.render("users", {userList});
    
  } catch (error) {
    res.send("An error occured")
  }
};

exports.show_add_user_form = (req, res) => {
  res.render("addUser");
};

//on post request

exports.add_user = async (req, res) => {
  // add to db
  try {
    const newUser = await UserModel.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName
    })
    res.redirect("/users")
    
  } catch (error) {
    
  }
}