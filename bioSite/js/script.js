//---TYPE EFFECT---//
let i = 0;
let txt = "Social Media Manager, UX Designer, Passionate, Confident";
let speed = 60;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// DARK MODE
// Add an event listener to the button or element that triggers mode switching
const modeSwitchButton = document.getElementById("mode-switch-button");
let isDarkMode = false;

modeSwitchButton.addEventListener("click", () => {
  const body = document.body;

  // Toggle the isDarkMode flag
  isDarkMode = !isDarkMode;

  // Update the CSS class on the <body> element
  if (isDarkMode) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});


//---SMOOTH SCROLLING FROM VIEWPORT TO TARGET--//
$(document).ready(function () {
  $("a[href^='#']").click(function (event) {
    event.preventDefault();
    $("html,body").animate(
      {
        scrollTop: $(this.hash).offset().top - 50,
      },
      900
    );
  });
});

//---LAZY LOADING---//
$(function () {
  $(".monster").fadeIn("slow");
});
$(document).ready(function () {
  $(window).scroll(function () {
    /* Check the location of each desired element */
    $(".hideme").each(function (i) {
      let bottom_of_object = $(this).position().top + $(this).outerHeight();
      let bottom_of_window = $(window).scrollTop() + $(window).height();
      /* If the object is completely visible in the window, fade it it */
      if (bottom_of_window > bottom_of_object) {
        $(this).animate({ opacity: "1" }, 1500);
      }
    });
  });
});

//---DOM LOCATIONS---//
const homeArea = document.getElementById("home");
const aboutArea = document.getElementById("about");
const entreArea = document.getElementById("entre-nav-highlight");
const diglabsArea = document.getElementById("diglabs");
const resumeArea = document.getElementById("resume");

//---NAV ELEMENTS---//
const navHome = document.getElementById("home-nav");
const navAbout = document.getElementById("about-nav");
const navEntre = document.getElementById("entre-nav");
const navDig = document.getElementById("dig-nav");
const navResume = document.getElementById("resume-nav");

//---CHECK IF ELEMENT IS IN VIEW---//
function isElementVisible(el) {
  let rect = el.getBoundingClientRect(),
    vWidth = window.innerWidth || document.documentElement.clientWidth,
    vHeight = window.innerHeight || document.documentElement.clientHeight,
    efp = function (x, y) {
      return document.elementFromPoint(x, y);
    };

  // Return false if it's not in the viewport
  if (
    rect.right < 0 ||
    rect.bottom < 0 ||
    rect.left > vWidth ||
    rect.top > vHeight
  )
    return false;

  // Return true if any of its four corners are visible
  return (
    el.contains(efp(rect.left, rect.top)) ||
    el.contains(efp(rect.right, rect.top)) ||
    el.contains(efp(rect.right, rect.bottom)) ||
    el.contains(efp(rect.left, rect.bottom))
  );
}

//---ADD ACTIVE CLASS TO 'HOME' IN NAV ON LOAD---//
window.onload = function () {
  navHome.className = "active";
  typeWriter(); //run typeWriter effect on load
};

//---INDICATE DOM LOCATION IN NAVBAR---//
function lightUpNav() {
  switch (true) {
    case isElementVisible(homeArea):
      navHome.classname = "active";
      navAbout.classList.remove("active");
      navEntre.classList.remove("active");
      navDig.classList.remove("active");
      navResume.classList.remove("active");
      break;
    case isElementVisible(aboutArea):
      navAbout.className = "active";
      navHome.classList.remove("active");
      navEntre.classList.remove("active");
      navDig.classList.remove("active");
      navResume.classList.remove("active");
      break;
    case isElementVisible(entreArea):
      navEntre.className = "active";
      navHome.classList.remove("active");
      navAbout.classList.remove("active");
      navDig.classList.remove("active");
      navResume.classList.remove("active");
      break;
    case isElementVisible(diglabsArea):
      navDig.className = "active";
      navHome.classList.remove("active");
      navEntre.classList.remove("active");
      navAbout.classList.remove("active");
      navResume.classList.remove("active");
      break;
    case isElementVisible(resumeArea):
      navResume.className = "active";
      navHome.classList.remove("active");
      navEntre.classList.remove("active");
      navAbout.classList.remove("active");
      navDig.classList.remove("active");
      setTimeout(function () {
        digType();
      }, 3000);
      break;
    default:
      navHome.classname = "active";
  }
}

document.onscroll = function () {
  lightUpNav();
};
