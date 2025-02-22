const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const getDateInThisMonth = (month: number) => {
  const date = new Date();
  const yearRange = Math.floor(month / 12);
  const monthRange = Math.floor(month % 12);
  const thisYear = date.getFullYear() + yearRange;
  const indexDate = date.getDate();
  const indexThisDay = new Date(thisYear, monthRange + 1, indexDate).getDay();
  const datePerMonth = new Date(thisYear, monthRange + 1, 0).getDate();
  const thisMonth = months[monthRange];
  const thisDay = days[indexThisDay];

  const dateNumber = [];
  for (let i = 0; i < datePerMonth; i++) {
    dateNumber.push(i + 1);
  }

  const dayArr = [];
  for (let i = 0; i < datePerMonth; i++) {
    const indexDay = new Date(thisYear, monthRange + 1, i + 1).getDay();
    dayArr.push({ date: i + 1, day: days[indexDay] });
  }

  return { month: thisMonth, day: thisDay, year: thisYear, date: dayArr };
};
