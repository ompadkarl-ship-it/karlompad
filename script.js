const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav a:not(.nav-cta)");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle(
        "active", link.getAttribute("href") === `#${entry.target.id}`
      ));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => observer.observe(section));

document.querySelector("#contactForm")?.addEventListener("submit", e => {
    e.preventDefault();

    const form = e.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    const subject = encodeURIComponent(
        "Portfolio Inquiry from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );

    const gmailURL =
        "https://mail.google.com/mail/?view=cm&fs=1" +
        "&to=ompadkarl@gmail.com" +
        "&su=" + subject +
        "&body=" + body;

    document.querySelector("#formNote").textContent =
        "Opening Gmail...";

    window.open(gmailURL, "_blank");
});

/* =====================================
   BUILDING PROJECT POPUP
===================================== */

const buildingDetails =
    document.getElementById("buildingDetails");

const buildingModal =
    document.getElementById("buildingModal");

const buildingModalClose =
    document.getElementById("buildingModalClose");

const modalBackground =
    buildingModal.querySelector(".modal-background");


/* Open popup */

buildingDetails.addEventListener("click", function(event) {

    event.preventDefault();

    buildingModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* Close with X */

buildingModalClose.addEventListener("click", closeBuildingModal);


/* Close by clicking background */

modalBackground.addEventListener("click", closeBuildingModal);


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeBuildingModal();
    }

});


function closeBuildingModal() {

    buildingModal.classList.remove("active");

    document.body.style.overflow = "";

}

/* =====================================
   ESTIMATE PROJECT POPUP
===================================== */

const estimateDetails =
    document.getElementById("estimateDetails");

const estimateModal =
    document.getElementById("estimateModal");

const estimateModalClose =
    document.getElementById("estimateModalClose");

const estimateBackground =
    estimateModal.querySelector(".modal-background");


/* Open popup */

estimateDetails.addEventListener("click", function(event) {

    event.preventDefault();

    estimateModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* Close with X */

estimateModalClose.addEventListener("click", closeEstimateModal);


/* Close by clicking background */

estimateBackground.addEventListener("click", closeEstimateModal);


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeEstimateModal();
    }

});


function closeEstimateModal() {

    estimateModal.classList.remove("active");

    document.body.style.overflow = "";

}

/* =====================================
   SCHEDULE PROJECT POPUP
===================================== */

const scheduleDetails =
    document.getElementById("scheduleDetails");

const scheduleModal =
    document.getElementById("scheduleModal");

const scheduleModalClose =
    document.getElementById("scheduleModalClose");

const scheduleBackground =
    scheduleModal.querySelector(".modal-background");


/* Open popup */

scheduleDetails.addEventListener("click", function(event) {

    event.preventDefault();

    scheduleModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* Close with X */

scheduleModalClose.addEventListener("click", closeScheduleModal);


/* Close by clicking background */

scheduleBackground.addEventListener("click", closeScheduleModal);


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeScheduleModal();
    }

});


function closeScheduleModal() {

    scheduleModal.classList.remove("active");

    document.body.style.overflow = "";

}

/* =====================================
   PROGRESS PROJECT POPUP
===================================== */

const progressDetails =
    document.getElementById("progressDetails");

const progressModal =
    document.getElementById("progressModal");

const progressModalClose =
    document.getElementById("progressModalClose");

const progressBackground =
    progressModal.querySelector(".modal-background");


/* Open popup */

progressDetails.addEventListener("click", function(event) {

    event.preventDefault();

    progressModal.classList.add("active");

    document.body.style.overflow = "hidden";

});


/* Close with X */

progressModalClose.addEventListener("click", closeProgressModal);


/* Close by clicking background */

progressBackground.addEventListener("click", closeProgressModal);


/* Close with ESC */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeProgressModal();
    }

});


function closeProgressModal() {

    progressModal.classList.remove("active");

    document.body.style.overflow = "";

}