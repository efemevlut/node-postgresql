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
