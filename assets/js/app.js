document.addEventListener("DOMContentLoaded", () => {
  initAboutSlider();
  initAmenitiesSlider();
  initJourneySlider();
});

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

  const section = document.getElementById('amenities-section');
  let bgSwapTimeout = null;

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
      image: "assets/images/lobby.jpg",
      desc: "Equipped with state-of-the-art intelligent elevator systems that minimize wait times and ensure smooth vertical transit. Features dedicated passenger lifts and separate service elevators for efficient operations."
    },
    {
      number: "04",
      title: "Conference & Boardrooms",
      image: "assets/images/amenities_hero.jpg",
      desc: "Fully equipped corporate meeting spaces with advanced audio-visual capabilities, high-speed connectivity, and ergonomic seating, designed for collaborative decision-making and seamless presentations."
    }
  ];

  let currentSlide = 0;

  // Crossfade the section background to a new image URL
  function swapAmenitiesBg(imageUrl) {
    if (!section) return;
    clearTimeout(bgSwapTimeout);
    section.style.setProperty('--next-bg', `url('${imageUrl}')`);
    section.classList.add('bg-transitioning');
    bgSwapTimeout = setTimeout(() => {
      section.style.backgroundImage = `url('${imageUrl}')`;
      section.classList.remove('bg-transitioning');
    }, 700);
  }

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

      // Swap section background for this slide
      swapAmenitiesBg(slidesData[index].image);

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
      clearInterval(autoPlayInterval);
    });
  });

  // Add click listeners to arrows
  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      let prev = (currentSlide - 1 + slidesData.length) % slidesData.length;
      showSlide(prev);
      clearInterval(autoPlayInterval);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      let next = (currentSlide + 1) % slidesData.length;
      showSlide(next);
      clearInterval(autoPlayInterval);
    });
  }

  // Optional: Auto play every 6 seconds
  let autoPlayInterval = setInterval(() => {
    let next = (currentSlide + 1) % slidesData.length;
    showSlide(next);
  }, 6000);
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
