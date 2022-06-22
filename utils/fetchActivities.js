/**
 * Function to fetch user a given page with activities with the help of the page number.
 * @param {string} id - user id.
 * @param {Integer} page - page number.
 * @param {object} options - user token.
 * @returns {object} - user activities.
 */
const fetchActivityPage = async (id, page, token) => {
  const url = `https://gitlab.lnu.se/api/v4/users/${id}/events?per_page=51&page=${page}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
};

/**
 * Function to fetch user activities in order to calculate the latest gitLab activity.
 * @param {string} id - user id.
 * @param {string} token - user token.
 * @returns {array} - user activities
 */
export default async function fetchActivities(id, token) {
  const activities = [];

  const page1 = await fetchActivityPage(id, 1, token);
  const page2 = await fetchActivityPage(id, 2, token);

  const tempArr = [...page1, ...page2];

  activities.push(tempArr.slice(0, 101));

  return activities;
}
