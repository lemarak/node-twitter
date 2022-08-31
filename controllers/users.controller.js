const { createUser } = require("../queries/users.queries");

exports.signupForm = (req, res, next) => {
  res.render("users/user-form", { errors: null });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const user = await createUser(email, password, username);
    res.redirect("/");
  } catch (error) {
    res.render("users/user-form", { errors: [error.message] });
  }
};
