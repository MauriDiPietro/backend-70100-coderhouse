import * as services from "../services/user.services.js";

export const registerResponse = (req, res, next) => {
  try {
    res.json({
      message: "register ok",
      session: req.session, //--> passport.user --> id del usuario
    });
  } catch (error) {
    next(error);
  }
};

export const loginResponse = async (req, res, next) => {
  try {
    //req.session.passport.user = _id
    const id = req.session.passport.user;
    // const { user } = req.session.passport;
    const userDB = await services.getUserById(id);
    const { first_name, last_name, role } = userDB;
    res.json({
      message: "login ok",
      session: req.session,
      user: {
        first_name,
        last_name,
        role,
      },
    });
  } catch (error) {
    next(error);
  }
};
