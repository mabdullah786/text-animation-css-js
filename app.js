const header = document.querySelector(".fancy");

let splitText = header.textContent.split("");
console.log(header.textContent);
header.textContent = "";

for (const chr of splitText) {
  console.log(chr);

  header.innerHTML += "<span>" + chr + "</span>";
}

const spanSelector = document.querySelectorAll("span");

let chrLocation = 0;
let timer = setInterval(addAnimation, 50);

function addAnimation() {
  spanSelector[chrLocation].classList.add("fade");
  chrLocation++;

  if (chrLocation == splitText.length) {
    clearInterval(timer);
    timer = null;
  }
}
