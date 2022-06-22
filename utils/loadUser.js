import fetchActivities from "./fetchActivities";
/**
 * Function to fetch user and all its information from gitlab.
 * @param {object} token - user token.
 * @returns {object} - user object.
 */
export default async function loadUser(token) {
  const url =
    "https://gitlab.lnu.se/api/v4/user?access_token=" + token.access_token;
  const response = await fetch(url);

  const data = await response.json();

  // Fetch 101 activities.
  data.activities = await fetchActivities(data.id, token.access_token);

  return data;
}
