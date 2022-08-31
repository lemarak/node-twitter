const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { app } = require("../app");
const { findUserPerEmail, findUserPerId } = require("../queries/users.queries");

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await findUserPerId(id);
    done(null, user);
  } catch (error) {
    done(error);
  }
});

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email, password, done) => {
      try {
        const user = await findUserPerEmail(email);
        if (user) {
          const match = await user.comparePassword(password);
          if (match) {
            done(null, user);
          } else {
            done(null, false, { message: "wrong password" });
          }
        } else {
          done(null, false, { message: "User not found" });
        }
      } catch (error) {
        done(error);
      }
    }
  )
);