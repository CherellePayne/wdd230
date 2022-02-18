const lastvisit = localStorgae.getItem('lastvisit');

const FACTOR = 1000 * 60 * 60 * 24;

let daysbetween =Date.now() - lastvisit;
console.log(daysbetween);

let numberofDays = daysbetween / FACTOR;

// below is the other way of getting the info//
//if the asnwer is null you could welcome vistor to the site//
//https://codepen.io/blazzard-jason/pen/WNZvOEK//
//https://codepen.io/blazzard-jason/pen/WNZvOEK//

localStorgae.setItem('lastvisit', Date.now())