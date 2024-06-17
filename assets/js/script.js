'use strict';

/**
 * Add event on element
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

/**
 * Navbar toggle
 */
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll
("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * Header sticky & back top btn active
 */
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const headerActive = function () {
  if (window.scrollY > 150) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", headerActive);

let lastScrolledPos = 0;

const headerSticky = function () {
  if (lastScrolledPos >= window.scrollY) {
    header.classList.remove("header-hide");
  } else {
    header.classList.add("header-hide");
  }

  lastScrolledPos = window.scrollY;
}

addEventOnElem(window, "scroll", headerSticky);

/**
 * Scroll reveal effect
 */
const sections = document.querySelectorAll("[data-section]");

const scrollReveal = function () {
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
      sections[i].classList.add("active");
    }
  }
}

scrollReveal();

addEventOnElem(window, "scroll", scrollReveal);

/**
 * Login and Sign-Up Modals
 */
const openModal = function (modalId) {
  document.getElementById(modalId).style.display = "block";
}

const closeModal = function (modalId) {
  document.getElementById(modalId).style.display = "none";
}

// Toggle between login and sign-up forms
const toggleForms = function (formIdToShow) {
  const loginForm = document.getElementById('loginForm');
  const signUpForm = document.getElementById('signUpForm');

  if (formIdToShow === 'signUpForm') {
    loginForm.style.display = 'none';
    signUpForm.style.display = 'block';
  } else {
    loginForm.style.display = 'block';
    signUpForm.style.display = 'none';
  }
}

// Close modals if user clicks outside of them
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

// Basic validation
const validateLogin = function() {
  const email = document.getElementById('loginEmail').value;
  const password = document.getElementById('loginPassword').value;
  
  if (email === "" || password === "") {
    alert("Both fields are required!");
    return false;
  }
  
  // Additional validation logic can be added here
  return true;
}

const validateSignUp = function() {
  const email = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;
  
  if (email === "" || password === "") {
    alert("Both fields are required!");
    return false;
  }
  
  // Additional validation logic can be added here
  return true;
}

// Add event listeners for login and sign-up buttons
const loginButton = document.querySelector(".header-action-btn[aria-label='User']");
const signUpButton = document.querySelector(".header-action-btn[aria-label='Sign Up']");

loginButton.addEventListener("click", () => openModal('authModal'));
signUpButton.addEventListener("click", () => openModal('authModal'));

// Add close event for modals
const closeButtons = document.querySelectorAll(".close");
closeButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    closeModal(event.target.closest('.modal').id);
  });
});
