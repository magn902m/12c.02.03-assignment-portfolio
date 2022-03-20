"use strict";
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  aniTxt();
  introPAni();
  h2scrollAniH2();
  sectionAni();
}

function aniTxt() {
  let h1 = document.querySelector("h1");
  h1.innerHTML = spanWrapper(h1.textContent);
  gsap.from("span", {
    x: 400,
    opacity: 0,
    duration: 1,
    stagger: { amount: 1 },
  });
}

function spanWrapper(word) {
  let wordArr = word.split(" ").map((word) => {
    return `<span>${word}</span>`;
  });
  return wordArr.join(" ");
}

function introPAni() {
  const introP = document.querySelectorAll(".introductory_graphic p");
  const timeline = gsap.timeline();
  timeline.to(introP, { duration: 2, rotation: 360, ease: Power1.easeOut });
}

function h2scrollAniH2() {
  gsap.to("#project_list_section h2", {
    opacity: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".section02",
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

function sectionAni() {
  gsap.to(".introductory_text p", {
    opacity: 1,
    duration: 5,
  });

  gsap.to("#project_list_section", {
    scrollTrigger: {
      trigger: "#project_list_section",
      scrub: 0.5,
      pin: true,
      start: "top center",
      //   markers: true,
    },
    rotate: 360,
  });

  gsap.to("#conclusive_section .section_wrapper", {
    scrollTrigger: {
      trigger: "#conclusive_section",
      scrub: true,
      start: "top center",
      //   markers: true,
    },
    opacity: 2,
  });
}
