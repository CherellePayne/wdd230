var lastModified = document.lastModified;

let daynames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
    ];
  
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let year = d.getFullYear();
  let fulldate = dayName + "," + monthName + " "+ d.getDate() + "," + year;
  
  document.getElementById("currentdate").textContext = fulldate;
  
  const event = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  // returns: Tuesday, December 16, 2017 11:09:42