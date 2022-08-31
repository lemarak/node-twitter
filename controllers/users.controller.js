const { createUser } = require("../queries/users.queries");

exports.signupForm = (req, res, next) => {
  res.render("users/user-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
  });
};

exports.signup = async (req, res, next) => {
  try {
    const { email, password, username } = req.body;
    const user = await createUser(email, password, username);
    req.login(user, (err) => {
      if (err) {
        next(err);
      }
      res.redirect("/");
    });
  } catch (error) {
    res.render("users/user-form", {
      errors: [error.message],
      isAuthenticated: req.isAuthenticated(),
      currentUser: req.user,
    });
  }
};
