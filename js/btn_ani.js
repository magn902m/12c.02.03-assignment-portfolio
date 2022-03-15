"use strict";

let customBtns;

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  regBtn();
}

function regBtn() {
  customBtns = document.querySelectorAll(".custom_btn");

  customBtns.forEach((btn) => {
    btn.addEventListener("click", aniBtn);
  });
}

function aniBtn(evt) {
  //   console.log("aniBtn");
  document.querySelector(".custom_btn").removeEventListener("click", aniBtn);
  regBtn();
  const bubble = evt.target.querySelector(".btn_bubble");
  console.log(`event: ${evt.offsetX} ${evt.offsetY}`);

  bubble.style.visibility = "visible";
  bubble.style.left = `${evt.offsetX}px`;
  bubble.style.top = `${evt.offsetY}px`;

  const bubbleKf = [
    { transform: `scale(1)`, opacity: 1 },
    { transform: `scale(100)`, opacity: 0 },
  ];
  const bubbleProps = {
    duration: 1000,
    iteration: 1,
    fill: "forwards",
  };
  const bubbleAni = bubble.animate(bubbleKf, bubbleProps);

  bubbleAni.addEventListener("finish", aniFinsh);
  function aniFinsh() {
    bubble.style.visibility = "hidden";
    window.open(evt.target.dataset.link);
  }
}
