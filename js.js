"use strict";
const Width = window.innerWidth;
const Height = window.innerHeight;
const randomWidthHeight = Math.floor(Math.random() * 15);
const randomTrans = () => Math.floor(Math.random() * Height);
function createSnow() {
  const myElem = document.createElement("div");
  const posY = randomTrans();
  myElem.classList.add("snow");
  myElem.style.width = `${randomWidthHeight}px`;
  myElem.style.height = `${randomWidthHeight}px`;
  myElem.style.transform = `translateY(${randomTrans}px)`;
  myElem.style.left = Math.floor(Math.random() * Width) + "px";
  myElem.style.top = Math.floor(Math.random() * Height) + "px";
  if (myElem.style.top >= window.innerHeight) myElem.remove();
  document.body.append(myElem);
}
setInterval(createSnow, 1000);

const myText = document.querySelector(".wrap");
const animateText = () => {
  let getArr = myText.textContent.split("");
  setTimeout(() => {
    getArr[0].style.color = "#fff";
  }, 1000);
};
