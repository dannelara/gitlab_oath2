import { withIronSessionApiRoute } from "iron-session/next";

import ironOptions from "../../../utils/ironOptions";

import fetch from "node-fetch";

export default withIronSessionApiRoute(gitLabCallback, ironOptions);

/**
 *  Function for gitLab callback.
 * @param {req} req - request object.
 * @param {req} res - response object.
 */
async function gitLabCallback(req, res) {
  // Check that the state matches.
  if (req.query.state === process.env.app_state) {
    // Get the code from the query respone.
    const code = req.query.code;
    // Create new url to fetch user token.
    const params = `https://gitlab.lnu.se/oauth/token?client_id=${process.env.app_id}&client_secret=${process.env.secret}&code=${code}&grant_type=authorization_code&redirect_uri=${process.env.redirect_url}`;

    // Fetch user token.
    const response = await fetch(params, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const token = await response.json();

    // Save user token to a session cookie.
    req.session.token = token;

    await req.session.save();

    res.redirect("/");
  } else {
    res.redirect("/");
  }
}
