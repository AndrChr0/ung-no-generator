const mainTitle = "UNG Generator";
document.title = mainTitle;

const ungTemp = "https://www.ung.no/oss/";

const randomizer = Math.floor(Math.random() * 900000) + 100000;

let anchor = document.createElement("a");

let textLink = document.createTextNode("Bli Opplyst");

anchor.href = ungTemp + randomizer;

anchor.appendChild(textLink); 
document.body.appendChild(anchor); 

const displayLink = document.getElementById("info");
displayLink.appendChild(anchor); 
