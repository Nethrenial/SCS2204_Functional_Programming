const currentTime = document.querySelector(".current-time");
const remainingTime = document.querySelector(".remaining-time");

function getCurrentTimeWithSuffix(hours, minutes) {
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const suffix = hours >= 12 ? "PM" : "AM";
  return `Now the time is ${hours}.${minutes} ${suffix}`;
}

function getRemainingTimeText(hour, minutes) {
  let remainingHours;
  if (minutes === 0) {
    remainingHours = 24 - hour;
  } else {
    remainingHours = 23 - hour;
  }

  let remainingMinutes;
  if (minutes !== 0) {
    remainingMinutes = 60 - minutes;
  }
  return `Remains ${remainingHours} hours${
    remainingMinutes ? " and " + remainingMinutes + " minutes" : " "
  } more...`;
}

setInterval(() => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  currentTime.innerText = getCurrentTimeWithSuffix(hours, minutes);
  remainingTime.innerText = getRemainingTimeText(hours, minutes);
}, 60000);
