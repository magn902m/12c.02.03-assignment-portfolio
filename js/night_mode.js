`use strict`;

window.addEventListener("DOMContentLoaded", setup);

function setup() {
  console.log("setup");

  // Toggle example 1
  exam1SetTheme();

  // Toggle example 2
  exam2SetThemeV1();
  // exam2SetThemeV2();
}

function exam1SetTheme() {
  const ToggleBtn = document.querySelector("#switch");

  // MediaQueryList object
  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  // Toggles the "dark-mode" class based on if the media query matches
  function toggleDarkMode(state) {
    // Older browser don't support the second parameter in the
    // classList.toggle method so you'd need to handle this manually
    // if you need to support older browsers.
    document.documentElement.classList.toggle("dark-mode", state);
  }

  // Initial setting
  toggleDarkMode(useDark.matches);

  // Listen for changes in the OS settings
  useDark.addListener((evt) => toggleDarkMode(evt.matches));

  // Toggles the "dark-mode" class on click
  ToggleBtn.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");
  });
}

function exam2SetThemeV1() {
  let theme = localStorage.getItem("data-theme");

  // Change theme to dark by adding the `dark` classname to html element.
  const changeThemeToDark = () => {
    document.documentElement.setAttribute("data-theme", "dark"); //set theme to dark
    localStorage.setItem("data-theme", "dark"); //save theme to local storage
    console.log("I give you dark");
  };

  // Reset the html class to default
  const changeThemeToLight = () => {
    document.documentElement.setAttribute("data-theme", "light"); //set theme to dark
    localStorage.setItem("data-theme", "light");
    console.log("I give you light");
  };

  if (theme === "dark") {
    changeThemeToDark();
  }

  // Get the element based on ID
  const checkbox = document.querySelector("#switch");
  checkbox.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
    if (theme === "dark") {
      changeThemeToLight();
    } else {
      changeThemeToDark();
    }
  });
}

function exam2SetThemeV2() {
  console.log("setTheme2");

  let theme = localStorage.getItem("data-theme");

  // Reset the html class to default
  const changeTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme); //set theme to dark
    localStorage.setItem("data-theme", theme);
    console.log(`I give you ${theme}`);
  };

  if (theme === "dark") {
    theme = "dark";
    changeTheme(theme);
  } else {
    theme = "light";
    changeTheme(theme);
  }

  // Get the element based on ID
  const checkbox = document.querySelector("#switch");
  checkbox.addEventListener("change", () => {
    let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
    if (theme === "dark") {
      theme = "dark";
      console.log(theme);
    } else {
      theme = "light";
      console.log(theme);
    }
    changeTheme(theme);
  });
}
