/call date function store output in dateToday
let dateToday = new Date()

//initalize and populate variable to hold the current month
let monthToday =dateToday.getMonth() + 1

//initalize and poplate variable to hold current day 
let dateToday = dateToday.getDay()

//initialize and populate variable to hold the current year

let yearToday = dateToday.getFullYear()

//initialize and populate variable to hold the current time
let hour = dateToday.getHours()
let minutes = dateToday.getMinutes()
let seconds = dateToday.getSeconds()

//Dom update footer with today's date
document.querySelector("#todaysdate").innerHTML = `Last Updated ${monthToday}/${dateToday}/${year_today} ${hour}:${minutes}:${seconds}`;
