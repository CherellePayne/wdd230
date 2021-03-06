const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject["prophets"];
    prophets.forEach(displayProphets);
});

  
  function displayProphets(prophet) {
    // Create elements to add to the document
    let card = document.createElement("section");
    let h2 = document.createElement("h2")
    let portrait = document.createElement("img")
   
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = prophet + " " + prophet.lastname;
    info.innerHTML = `Date of Birth: ${prophet.birthdate} <br> Place of Birth: ${prophet.birthplace} `
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} - ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy')


    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(info);
    card.appendChild(portrait);
  
    // Add/append the existing HTML div with the cards class with the section(card)
    cards.appendChild(card);
  }

//Here is a better way to do the ordinals that can handle any number of values: 
