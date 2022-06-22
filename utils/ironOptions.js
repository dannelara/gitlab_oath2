/**
 * Options object for iron-session module.
 */
const ironOptions = {
  cookieName: "token",
  password: process.env.cokie_pswd,
  cookieOptions: {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    maxAge: 6781,
    sameSite: "lax",
  },
};

export default ironOptions;
