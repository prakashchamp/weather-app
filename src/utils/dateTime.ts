function formatAMPM(date: Date): string {
  var hours = date.getHours();
  var minutes = date.getMinutes().toString();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = Number(minutes) < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

function getFMonth(month: number): string {
  switch (month) {
    case 0:
      return "January";
    case 1:
      return "February";
    case 2:
      return "March";
    case 3:
      return "April";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "August";
    case 8:
      return "September";
    case 9:
      return "October";
    case 10:
      return "November";
    case 11:
      return "December";
    default:
      return "";
  }
}

function getFDay(day: number): string {
  switch (day) {
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
    default:
      return "";
  }
}

function getFDate(date: number): string {
  switch (date) {
    case 1:
    case 21:
    case 31:
      return date + "st";
    case 2:
    case 22:
      return date + "nd";
    case 3:
    case 23:
      return date + "rd";
    default:
      return date + "th";
  }
}

export function getMonthBasedTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return (
    getFMonth(date.getMonth()) +
    " " +
    getFDate(date.getDate()) +
    " " +
    formatAMPM(date)
  );
}

export function getDayBasedTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);
  return getFDay(date.getDay()) + ", " + formatAMPM(date);
}

export function getFTime(timestamp: number): string {
  return formatAMPM(new Date(timestamp * 1000));
}

export function getForecastDT(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  return getFDay(date.getDay());
}

export function getDay(timeStamp: number) {
  return getFDay(new Date(timeStamp * 1000).getDay());
}

export function getMonthYear(timeStamp: number) {
  const date = new Date(timeStamp * 1000);
  return (
    getFMonth(date.getMonth()) +
    " " +
    getFDate(date.getDate()) +
    ", " +
    date.getUTCFullYear()
  );
}
