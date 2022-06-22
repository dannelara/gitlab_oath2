/**
 * Function to login a user with their gitlab account.
 * @param {req} req - request object.
 * @param {res} res - response object.
 */
export default function login(req, res) {
  // Set state.
  const state = process.env.app_state;
  const redirectURL = process.env.base_url + "api/v1/callback";

  // redirect url with required params.
  const url = `https://gitlab.lnu.se/oauth/authorize?client_id=${process.env.app_id}&redirect_uri=${redirectURL}&response_type=code&state=${state}&scope=read_user`;
  //redirect user.
  res.redirect(url);
}
