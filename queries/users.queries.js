const User = require("../database/models/user.model");

exports.createUser = async (email, password, username) => {
  try {
    const hashedPassword = await User.hashPassword(password);
    const newUser = new User({
      username,
      local: {
        password: hashedPassword,
        email,
      },
    });
    return newUser.save();
  } catch (error) {
    throw error;
  }
};

exports.findUserPerId = (id) => {
  return User.findById(id);
};

exports.findUserPerEmail = (email) => {
  return User.findOne({ "local.email": email });
};
