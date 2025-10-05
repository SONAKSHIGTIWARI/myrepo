document.querySelector("#hero-video").setAttribute("autoplay", "true")

let heroCTABtn = document.querySelector("#heroCTABtn");

heroCTABtn.addEventListener("click", () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
});

document.addEventListener("DOMContentLoaded", () => {
  const toggler = document.querySelector('.navbar-toggler');
  const offcanvas = document.getElementById('offcanvasNavbar');

  // Animate toggler button
  toggler.addEventListener('click', () => {
    offcanvas.classList.add('show-animated');
  });

  // Remove animation class on close
  offcanvas.addEventListener('hidden.bs.offcanvas', () => {
    offcanvas.classList.remove('show-animated');
  });
});
// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

// Initialize AOS (Animate on Scroll)
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    once: true,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000, once: true });

  const images = [
    {
      src: "./media/image-6.jpg",
      title: "Creative Director",
      position: "Managing Projects",
    },
    {
      src: "./media/image-7.jpg",
      title: "UX Lead",
      position: "User Experience Design",
    },
    {
      src: "./media/image-8.jpg",
      title: "Developer",
      position: "Full Stack Engineer",
    },
    {
      src: "./media/image-9.jpg",
      title: "Software Engineer",
      position: "Frontend Developer",
    },
    {
      src: "./media/image-10.jpg",
      title: "Data Analyst",
      position: "Machine Learning & Visualization",
    },
  ];

  let currentIndex = 0;
  const img = document.getElementById("about-carousel-img");
  const title = document.getElementById("carousel-title");
  const position = document.getElementById("carousel-position");

  const updateCarousel = () => {
    img.style.opacity = 0;
    setTimeout(() => {
      img.src = images[currentIndex].src;
      title.textContent = images[currentIndex].title;
      position.textContent = images[currentIndex].position;
      img.style.opacity = 1;
    }, 300);
  };

  const nextSlide = () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  };

  const prevSlide = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  };

  document.getElementById("carousel-prev").addEventListener("click", prevSlide);
  document.getElementById("carousel-next").addEventListener("click", nextSlide);

  // Auto Slide every 5 seconds
  setInterval(nextSlide, 5000);

  // Initial load
  updateCarousel();
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const overlay = document.getElementById("portfolio-popover");
  const popoverImg = document.getElementById("popover-img");
  const popoverTitle = document.getElementById("popover-title");
  const popoverDesc = document.getElementById("popover-description");
  const closeBtn = document.getElementById("popover-close");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-description");
      const imgSrc = item.getAttribute("data-img");

      popoverImg.src = imgSrc;
      popoverTitle.textContent = title;
      popoverDesc.textContent = desc;
      overlay.classList.remove("d-none");
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("d-none");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const overlay = document.getElementById("portfolio-popover");
  const popoverImg = document.getElementById("popover-img");
  const popoverTitle = document.getElementById("popover-title");
  const popoverDesc = document.getElementById("popover-description");
  const closeBtn = document.getElementById("popover-close");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-description");
      const imgSrc = item.getAttribute("data-img");

      popoverImg.src = imgSrc;
      popoverTitle.textContent = title;
      popoverDesc.textContent = desc;
      overlay.classList.remove("d-none");
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("d-none");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({ duration: 1000 });

  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting! Your message has been sent.");
    form.reset();
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".portfolio-item");
  const overlay = document.getElementById("portfolio-popover");
  const popoverImg = document.getElementById("popover-img");
  const popoverTitle = document.getElementById("popover-title");
  const popoverDesc = document.getElementById("popover-description");
  const closeBtn = document.getElementById("popover-close");

  items.forEach(item => {
    item.addEventListener("click", () => {
      const title = item.getAttribute("data-title");
      const desc = item.getAttribute("data-description");
      const imgSrc = item.getAttribute("data-img");

      popoverImg.src = imgSrc;
      popoverTitle.textContent = title;
      popoverDesc.textContent = desc;
      overlay.classList.remove("d-none");
    });
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("d-none");
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.add("d-none");
  });
});
