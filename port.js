// script.js
// ScrollReveal animations
ScrollReveal().reveal("section h2", {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
ScrollReveal().reveal(".card", {
  delay: 200,
  interval: 100,
  origin: "bottom",
  distance: "40px",
});

ScrollReveal().reveal("#contact h2", {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
ScrollReveal().reveal(".contact-form", {
  delay: 200,
  origin: "bottom",
  distance: "40px",
});

ScrollReveal().reveal("#techstack h2", {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
ScrollReveal().reveal(".tech-item", {
  delay: 200,
  interval: 100,
  origin: "bottom",
  distance: "30px",
});

ScrollReveal().reveal("#gallery h2", {
  delay: 100,
  origin: "bottom",
  distance: "30px",
});
ScrollReveal().reveal(".gallery-grid img", {
  delay: 150,
  interval: 80,
  origin: "bottom",
  distance: "20px",
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

const cursorDot = document.querySelector(".cursor-dot");
const cursorRing = document.querySelector(".cursor-ring");

window.addEventListener("mousemove", (e) => {
  gsap.to(cursorDot, {
    x: e.clientX - 3,
    y: e.clientY - 3,
    duration: 0.15,
    ease: "power3.out",
  });

  gsap.to(cursorRing, {
    x: e.clientX - 18,
    y: e.clientY - 18,
    duration: 0.25,
    ease: "power3.out",
  });
});

document.querySelectorAll("a, button, .hoverable").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    gsap.to(cursorRing, { scale: 1.5, borderColor: "#ff00ff" });
  });
  el.addEventListener("mouseleave", () => {
    gsap.to(cursorRing, { scale: 1, borderColor: "#00f0ff" });
  });
});
gsap.utils.toArray("section").forEach((sec, i) => {
  gsap.from(sec, {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: i * 0.2,
    ease: "power2.out",
    scrollTrigger: {
      trigger: sec,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
});

// Theme toggle functionality
const themeToggle = document.getElementById("theme-toggle");
const theme = localStorage.getItem("theme") || "light";

// Set initial theme
document.documentElement.setAttribute("data-theme", theme);
themeToggle.textContent = theme === "light" ? "🌙" : "☀️";

// Toggle theme
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";
});
