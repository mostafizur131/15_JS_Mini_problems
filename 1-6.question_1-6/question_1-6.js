/* 
1.Date Object:
a. Create a function that takes a date in the format "YYYY-MM-DD" as a parameter and returns the day of the week for that date. The function should use the Date object.
b. Implement the function to display the day of the week for the current date.
*/
function dayOfWeek(y, m, d) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const date = new Date(`${y}-${m}-${d}`);
  const today = days[date.getDay()];
  return today;
}
//console.log(dayOfWeek(2023, 6, 18));

/*
2.Math Object:
a. Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.

b. Implement the function to display the square root of the sum of squares for an array of numbers.
 */
const arr = [1, 2, 3, 4, 5];
function squareRoot(arr) {
  let sum = 0;
  arr.forEach((n) => {
    sum += Math.pow(n, 2);
  });
  return Math.sqrt(sum);
}
//console.log(squareRoot(arr));

/*

3.Numbers:
a. Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.
b. Implement the function to check if a given positive integer is a prime number.
*/

function primeNumber(num) {
  let isPrime = true;
  if (num === 1) {
    return "1 is not a prime or not a composite number";
  } else if (num < 1) {
    return "Please give a positive integer number";
  } else if (num > 1) {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i === 0) {
        return (isPrime = false);
      }
    }
  }

  return isPrime;
}
//console.log(primeNumber(10));

/**
4.Window Object:

a. Create a function that opens a new window with a specified URL and dimensions (width and height).

b. Implement the function to open a new window with the URL "https://www.example.com" and dimensions 800x600.
 */

const openNewTab = document.querySelector(".open");

function openWindow(url, width, height) {
  openNewTab.addEventListener("click", () => {
    window.open(url, "_blank", `width=${width},height=${height}`);
  });
}
const url = "https://www.example.com";
const w = 800;
const h = 600;
//openWindow(url, w, h);

/**
 5.Navigator Object:

a. Write a JavaScript function that detects the user's browser name and version using the navigator object.

b. Implement the function to display the user's browser name and version.

*/

function browserInformation() {
  const bName = navigator.appCodeName;
  const bVersion = navigator.appVersion;
  const bInfo = document.write(
    `Browser Name : ${bName} and Version: ${bVersion}`
  );
  return bInfo;
}
//browserInformation();

/**
6.Geolocation:
a. Implement a JavaScript function that retrieves the user's current location (latitude and longitude) using the geolocation API.
 */

function geolocation() {
  let geo;
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    geo = document.write(`Latitude : ${latitude} and Longitude : ${longitude}`);
  });
  return geo;
}
//geolocation();
