/**
 * Function to format date object into string format.
 * @param {object} date
 * @returns {string} - formatted date object.
 */
export default function formateDate(date) {
  const days = [
    "sunday",
    "Monday",
    "Tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  return `${parseInt(
    date.getFullYear().toString().substring(2)
  )}/${date.getMonth()} - ${date.getDate()} : ${
    days[date.getDay()]
  } at ${date.getHours()}`;
}
