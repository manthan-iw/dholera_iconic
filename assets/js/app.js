document.addEventListener("DOMContentLoaded", () => {
  initAboutSlider();
  initAmenitiesSlider();
  initJourneySlider();
  initSmoothScroll();
  initScrollAnimations();
});

// Scroll Reveal Animations & Number Counter Handler
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(".slide-up, .fade-in, .scale-up");
  if (!animatedElements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        const counters = entry.target.querySelectorAll(".counter-value");
        counters.forEach(counter => animateCounter(counter));
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  animatedElements.forEach(el => observer.observe(el));
}

// Counter Animation Function
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = "true";

  const target = parseInt(el.getAttribute("data-target")) || 0;
  const suffix = el.getAttribute("data-suffix") || "";
  let count = 0;
  const duration = 1800;
  const startTime = performance.now();

  function updateCount(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    count = Math.floor(easeOutProgress * target);

    el.innerText = count + suffix;

    if (progress < 1) {
      requestAnimationFrame(updateCount);
    } else {
      el.innerText = target + suffix;
    }
  }

  requestAnimationFrame(updateCount);
}

// About Us Section Interactive Slider
function initAboutSlider() {
  const dots = document.querySelectorAll(".about-slider-card .slider-dot");
  const slideNum = document.querySelector(".slide-number");
  const slideTitle = document.querySelector(".slide-title");
  const slideDesc = document.querySelector(".slide-desc");

  if (!dots.length || !slideNum || !slideTitle || !slideDesc) return;

  const slidesData = [
    {
      number: "01",
      title: "Commercial Landmarks",
      desc: "Designing state-of-the-art office environments, business incubators, and premium corporate towers."
    },
    {
      number: "02",
      title: "Industrial & Logistics",
      desc: "Creating high-efficiency manufacturing centers, smart warehouses, and clean industrial ecosystems."
    },
    {
      number: "03",
      title: "Residential Structures",
      desc: "We work with both investors and developers to create landmarks that make an impact."
    },
    {
      number: "04",
      title: "Smart Infrastructure",
      desc: "Developing integrated utility corridors, green energy projects, and advanced digital networks."
    }
  ];

  let currentSlide = 2; // Default starting slide index 2 (corresponds to "03")

  function showSlide(index) {
    if (index < 0 || index >= slidesData.length) return;

    // Deactivate previous dot
    dots.forEach(dot => dot.classList.remove("active"));

    // Add fade-out animation to content
    const elementsToAnimate = [slideNum, slideTitle, slideDesc];
    elementsToAnimate.forEach(el => {
      el.style.opacity = "0";
      el.style.transform = "translateY(10px)";
    });

    setTimeout(() => {
      // Update content
      slideNum.textContent = slidesData[index].number;
      slideTitle.textContent = slidesData[index].title;
      slideDesc.textContent = slidesData[index].desc;

      // Activate dot
      dots[index].classList.add("active");
      currentSlide = index;

      // Add fade-in animation
      elementsToAnimate.forEach(el => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }, 250);
  }

  // Add click listeners to dots
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      if (slideIndex === currentSlide) return;
      showSlide(slideIndex);
    });
  });

  // Optional: Auto play every 6 seconds
  let autoPlayInterval = setInterval(() => {
    let next = (currentSlide + 1) % slidesData.length;
    showSlide(next);
  }, 6000);

  // Stop auto play on user interaction
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      clearInterval(autoPlayInterval);
    });
  });
}

// Premium Amenities Section Interactive Slider
function initAmenitiesSlider() {
  const dots = document.querySelectorAll(".amenities-slider-card .slider-dot");
  const slideNum = document.querySelector(".amenity-slide-number");
  const slideTitle = document.querySelector(".amenity-slide-title");
  const slideDesc = document.querySelector(".amenity-slide-desc");
  const prevBtn = document.querySelector(".amenity-arrow-prev");
  const nextBtn = document.querySelector(".amenity-arrow-next");

  const layer1 = document.getElementById('amenitiesBgLayer1');
  const layer2 = document.getElementById('amenitiesBgLayer2');

  if (!dots.length || !slideNum || !slideTitle || !slideDesc) return;

  const slidesData = [
    {
      number: "01",
      title: "Café Corner",
      image: "assets/images/amenities_hero.jpg",
      desc: "The perfect balance of comfort and functionality. Whether it's a casual meeting, a networking session, a quick coffee break and exchange ideas throughout the day."
    },
    {
      number: "02",
      title: "Grand Lobby & Reception",
      image: "assets/images/lobby.jpg",
      desc: "A double-height entrance lobby designed to make a striking first impression. Featuring premium finishes, comfortable visitor seating, and a dedicated reception desk with 24/7 security management to welcome partners and clients."
    },
    {
      number: "03",
      title: "High-Speed Elevators",
      image: "assets/images/quality_finishes.jpg",
      desc: "Equipped with state-of-the-art intelligent elevator systems that minimize wait times and ensure smooth vertical transit. Features dedicated passenger lifts and separate service elevators for efficient operations."
    },
    {
      number: "04",
      title: "Conference & Boardrooms",
      image: "assets/images/why_canvas.jpg",
      desc: "Fully equipped corporate meeting spaces with advanced audio-visual capabilities, high-speed connectivity, and ergonomic seating, designed for collaborative decision-making and seamless presentations."
    }
  ];

  // Preload all background images into browser memory to eliminate network load stutter/lag
  slidesData.forEach(slide => {
    const img = new Image();
    img.src = slide.image;
  });

  let currentSlide = 0;
  let activeLayerIndex = 1;

  // Seamless dual-layer crossfade background swap
  function swapAmenitiesBg(imageUrl) {
    if (!layer1 || !layer2) return;

    const currLayer = activeLayerIndex === 1 ? layer1 : layer2;
    const nextLayer = activeLayerIndex === 1 ? layer2 : layer1;

    nextLayer.style.backgroundImage = `url('${imageUrl}')`;
    nextLayer.classList.add('active');
    currLayer.classList.remove('active');

    activeLayerIndex = activeLayerIndex === 1 ? 2 : 1;
  }

  function showSlide(index) {
    if (index < 0 || index >= slidesData.length) return;

    // Update dots
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");

    // Fade out text elements inside overlay card
    const elementsToAnimate = [slideNum, slideTitle, slideDesc];
    elementsToAnimate.forEach(el => {
      if (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(8px)";
        el.style.transition = "opacity 0.25s ease, transform 0.25s ease";
      }
    });

    // Instantly initiate background crossfade
    swapAmenitiesBg(slidesData[index].image);

    setTimeout(() => {
      // Update text content
      if (slideNum) slideNum.textContent = slidesData[index].number;
      if (slideTitle) slideTitle.textContent = slidesData[index].title;
      if (slideDesc) slideDesc.textContent = slidesData[index].desc;

      currentSlide = index;

      // Fade text elements back in
      elementsToAnimate.forEach(el => {
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    }, 250);
  }

  // Dots navigation
  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const slideIndex = parseInt(dot.getAttribute("data-slide"));
      if (slideIndex === currentSlide) return;
      showSlide(slideIndex);
      resetAutoPlay();
    });
  });

  // Previous button
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let prevIndex = (currentSlide - 1 + slidesData.length) % slidesData.length;
      showSlide(prevIndex);
      resetAutoPlay();
    });
  }

  // Next button
  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let nextIndex = (currentSlide + 1) % slidesData.length;
      showSlide(nextIndex);
      resetAutoPlay();
    });
  }

  // Auto play every 6 seconds
  let autoPlayInterval = setInterval(() => {
    let next = (currentSlide + 1) % slidesData.length;
    showSlide(next);
  }, 6000);

  function resetAutoPlay() {
    clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(() => {
      let next = (currentSlide + 1) % slidesData.length;
      showSlide(next);
    }, 6000);
  }
}

// The ICONIC Journey Section Swiper.js Initialization
function initJourneySlider() {
  if (typeof Swiper === "undefined") return;

  const journeySwiperEl = document.querySelector(".journeySwiper");
  if (!journeySwiperEl) return;

  const journey = new Swiper(".journeySwiper", {
    slidesPerView: 1.1,
    spaceBetween: 20,
    speed: 800,
    loop: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: "#journey-next-btn",
      prevEl: "#journey-prev-btn"
    },
    breakpoints: {
      576: {
        slidesPerView: 1.25,
        spaceBetween: 24,
      },
      768: {
        slidesPerView: 1.35,
        spaceBetween: 28,
      },
      992: {
        slidesPerView: 1.45,
        spaceBetween: 32,
      },
      1200: {
        slidesPerView: 1.5,
        spaceBetween: 35,
      }
    }
  });
}

// Global Smooth Scroll Handler with Fixed Header Height Offset
function initSmoothScroll() {
  document.addEventListener("click", function (e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;

    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
}
