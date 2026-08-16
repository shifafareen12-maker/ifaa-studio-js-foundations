const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("name");
const nameEcho = document.getElementById("nameEcho");
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
const toggleAbout = document.getElementById("toggleAbout");
const aboutMore = document.getElementById("aboutMore");
const likeButton = document.getElementById("likeButton");

let likeCount = 0;

// This shows a greeting based on the current time.
function setGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good morning";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon";
    } else {
        greeting.textContent = "Good evening";
    }
}

// This shows the user's name while they type.
function updateNameEcho() {
    const name = nameInput.value;

    if (name === "") {
        nameEcho.textContent = "Hi there!";
    } else {
        nameEcho.textContent = "Hi, " + name + "!";
    }
}

// This checks the name when the form is submitted.
function validateName(event) {
    if (nameInput.value.trim() === "") {
        event.preventDefault();
        formMessage.textContent = "Please enter your name";
    } else {
        event.preventDefault();
        formMessage.textContent = "Thanks for reaching out!";
    }
}

// This shows and hides the extra About Me paragraph.
function toggleAboutSection() {
    aboutMore.classList.toggle("hidden");

    if (aboutMore.classList.contains("hidden")) {
        toggleAbout.textContent = "Show more";
    } else {
        toggleAbout.textContent = "Show less";
    }
}

// This increases the like count by one.
function increaseLikes() {
    likeCount = likeCount + 1;
    likeButton.textContent = "Like this page (" + likeCount + ")";
}

setGreeting();

nameInput.addEventListener("input", updateNameEcho);
contactForm.addEventListener("submit", validateName);
toggleAbout.addEventListener("click", toggleAboutSection);
likeButton.addEventListener("click", increaseLikes);