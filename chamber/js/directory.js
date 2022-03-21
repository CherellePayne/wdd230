// store resource URL in a const
const requestURL ="https://cherellepayne.github.io/wdd230/chamber/data/card.json";
const cards = document.querySelector(".cards");
const lists = document.querySelector(".listTabs")

// basic fetch( method) implementation
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const dirList = jsonData["prophets"];

        const gridView = document.querySelector(".gridBtn");
        const listView = document.querySelector(".listBtn");
        // display default view
        dirList.forEach(displayDir);
        // display listView
        listView.addEventListener("click", function () {
            toggleList()
            dirList.forEach(displayList);
            
        });
        // display gridView
        gridView.addEventListener("click", function () {
            toggleCard()
            dirList.forEach(displayDir);
        });
    });

function displayDir(prophet) {
    // create elements to add to the document
    let card = document.createElement("section");
    card.className = "cardSection";
    let name = document.createElement("h2")
    let logo = document.createElement("img")
    let info = document.createElement("p")
    // let phone = document.createElement("p")
// add the directorys name to the name textcontent
    name.textContent = prophet.businessname;
    info.innerHTML = `<b>Business Type:</b> ${prophet.businesstype}  <br> <b>Contact:</b> ${prophet.name} <br> <b>membership:</b> ${prophet.level}`
    // phone.innerHTML = `Business:${prophet.businestype}`;
    logo.setAttribute('src', prophet.imageurl);
    logo.setAttribute('alt', `${prophet.companyname} logo`);
    logo.setAttribute('loading', 'lazy')

// append to the section(card)
    card.appendChild(name);
    card.appendChild(info)
    card.appendChild(logo);

// add to existing HTML div
    cards.appendChild(card);
}

function displayList(prophet) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${prophet.businessname} </td> <td>${prophet.businesstype}</td> <td>${prophet.level}</td> <td>Contact: ${prophet.name} ${prophet.lastname}</td>`

    // add to existing HTML div
    lists.appendChild(tr)
}

function toggleList() {
    document.getElementById("listToggle").style.display = "block";
    document.getElementById("cardToggle").style.display = "none";
    document.querySelector(".listTabs").innerHTML = "";
    
}

function toggleCard() {
    document.getElementById("cardToggle").style.display = "grid";
    document.getElementById("listToggle").style.display = "none";
}