const mainTitle = "UNG Generator";
document.title = mainTitle;

const ungTemp = "https://www.ung.no/oss/";

const min = 200000;
const max = 515800;

const randomizer = Math.floor(Math.random() * (max - min + 1)) + min;

let anchor = document.createElement("a");

let textLink = document.createTextNode("Bli Opplyst");

anchor.target = "_blank";

anchor.onclick = function () {
  window.open(ungTemp + randomizer);
  window.location.reload();
};

anchor.appendChild(textLink);
document.body.appendChild(anchor);

const displayLink = document.getElementById("info");
displayLink.appendChild(anchor);
