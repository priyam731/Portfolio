// script.js
// Enhanced ScrollReveal animations with slide-up and fade-in effects
const slideUp = {
  distance: "40px",
  origin: "bottom",
  opacity: 0,
  duration: 1000,
  easing: "ease-out",
  reset: false,
};

// Headings with more pronounced effect
ScrollReveal().reveal("section h2", {
  ...slideUp,
  delay: 100,
  distance: "50px", // Start from slightly lower
});

// Cards with staggered reveal
ScrollReveal().reveal(".card", {
  ...slideUp,
  delay: 200,
  interval: 150, // Staggered timing between elements
});

// Contact section
ScrollReveal().reveal("#contact h2", {
  ...slideUp,
  delay: 100,
});
// ScrollReveal().reveal(".contact-form", {
//   ...slideUp,
//   delay: 200,
// });

// Tech stack section
ScrollReveal().reveal("#techstack h2", {
  ...slideUp,
  delay: 100,
});
ScrollReveal().reveal(".tech-item", {
  ...slideUp,
  delay: 200,
  interval: 100,
});

// Gallery section
ScrollReveal().reveal("#gallery h2", {
  ...slideUp,
  delay: 100,
});
ScrollReveal().reveal(".gallery-grid img", {
  ...slideUp,
  delay: 150,
  interval: 80,
  distance: "30px",
});

// Add animations for paragraph elements (excluding hero section)
ScrollReveal().reveal("section:not(.hero) p", {
  ...slideUp,
  delay: 150,
  distance: "30px",
  interval: 50, // Slight delay between paragraphs
});

// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// When the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get or create cursor elements
  let cursorDot = document.querySelector(".cursor-dot");
  let cursorRing = document.querySelector(".cursor-ring");

  // Check if cursor elements exist in the DOM, create them if they don't
  if (!cursorDot) {
    cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-dot");
    document.body.appendChild(cursorDot);
  }

  if (!cursorRing) {
    cursorRing = document.createElement("div");
    cursorRing.classList.add("cursor-ring");
    document.body.appendChild(cursorRing);
  }

  // Make sure cursor is initially hidden until mouse moves
  cursorDot.style.opacity = "0";
  cursorRing.style.opacity = "0";

  window.addEventListener("mousemove", (e) => {
    // Show cursor when mouse moves
    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";

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

  // Add mouse leave event to hide cursor when mouse leaves the window
  document.addEventListener("mouseleave", () => {
    cursorDot.style.opacity = "0";
    cursorRing.style.opacity = "0";
  });

  // Add mouse enter event to show cursor when mouse enters the window
  document.addEventListener("mouseenter", () => {
    cursorDot.style.opacity = "1";
    cursorRing.style.opacity = "1";
  });

  document.querySelectorAll("a, button, .hoverable").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      gsap.to(cursorRing, { scale: 1.5, borderColor: "#ff00ff" });
    });
    el.addEventListener("mouseleave", () => {
      gsap.to(cursorRing, { scale: 1, borderColor: "#00f0ff" });
    });
  });

  // Enhanced animations for hero section
  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    const heroImg = heroSection.querySelector("img");
    const heroHeading = heroSection.querySelector("h1");
    const heroText = heroSection.querySelector("p");

    // Create a timeline for hero animations
    const heroTl = gsap.timeline({ delay: 0.2 });

    // Add elements to the timeline with staggered animations
    heroTl
      .from(heroImg, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      })
      .from(
        heroHeading,
        { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      )
      .from(
        heroText,
        { y: 30, opacity: 0, duration: 0.8, ease: "power2.out" },
        "-=0.4",
      );
  }
});

// Enhanced animations for project cards
gsap.utils.toArray(".card").forEach((card) => {
  // Create separate animations for each project card component
  const projectTitle = card.querySelector("h3");
  const projectDesc = card.querySelector("p");
  const projectImg = card.querySelector("img");

  // Note: ScrollTrigger animations removed - requires ScrollTrigger plugin
  // Using ScrollReveal for animations instead
});

// Get or create cursor elements
let cursorDot = document.querySelector(".cursor-dot");
let cursorRing = document.querySelector(".cursor-ring");

// Check if cursor elements exist in the DOM, create them if they don't
if (!cursorDot) {
  cursorDot = document.createElement("div");
  cursorDot.classList.add("cursor-dot");
  document.body.appendChild(cursorDot);
}

if (!cursorRing) {
  cursorRing = document.createElement("div");
  cursorRing.classList.add("cursor-ring");
  document.body.appendChild(cursorRing);
}

// Make sure cursor is initially hidden until mouse moves
cursorDot.style.opacity = "0";
cursorRing.style.opacity = "0";

window.addEventListener("mousemove", (e) => {
  // Show cursor when mouse moves
  cursorDot.style.opacity = "1";
  cursorRing.style.opacity = "1";

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
// Note: ScrollTrigger section animations removed - requires ScrollTrigger plugin
// Using ScrollReveal for scroll-based animations instead

// Theme toggle functionality - Consolidated code
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");
  if (!themeToggle) return; // Guard against missing element

  const savedTheme = localStorage.getItem("theme") || "light";

  // Set initial theme on page load
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "🌙" : "☀️";

  // Toggle theme when button is clicked
  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    themeToggle.textContent = newTheme === "light" ? "🌙" : "☀️";

    // Log to confirm the theme has been changed
    console.log("Theme changed to:", newTheme);
  });

  // Animation setup with Intersection Observer
  // Add animate-slide-up class to all elements we want to animate (excluding hero section)
  const animatedElements = document.querySelectorAll(
    "section:not(.hero) h1, section:not(.hero) h2, section:not(.hero) h3, section:not(.hero) p, .card, .tech-item, .gallery-grid img",
  );
  animatedElements.forEach((element) => {
    element.classList.add("animate-slide-up");
  });

  // Create intersection observer for animations
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Once the animation is complete, unobserve the element
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
      rootMargin: "0px 0px -50px 0px", // Negative margin means it triggers slightly before the element comes into view
    },
  );

  // Observe all elements with the animate-slide-up class
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});
