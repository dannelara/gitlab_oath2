import { withIronSessionApiRoute } from "iron-session/next";

/**
 * Function to sign out a user.
 */
export default withIronSessionApiRoute(
  function signOut(req, res) {
    // Destroy the current session.
    req.session.destroy();
    // Redirect the user to the start page.
    res.redirect("/");
  },
  {
    cookieName: "token",
    password: process.env.cokie_pswd,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  }
);
