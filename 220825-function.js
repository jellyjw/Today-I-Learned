// 1. day of the week exercise

const week = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

const returnDay = (num) => {
  if (num < 1 || num > 7) {
    return null;
  } else {
    return week[num];
  }
};

returnDay(1); // Monday
returnDay(7); // Sunday
returnDay(4); // Thursday
returnDay(0); // null
