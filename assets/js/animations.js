document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initStatsCounter();
});

// Scroll Animations using Intersection Observer
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    ".fade-in, .slide-up, .slide-left, .slide-right, .zoom-in, .image-zoom-hover"
  );

  const observerOptions = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target); // Animates only once
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => observer.observe(el));
}

// Stats Counter Animation
function initStatsCounter() {
  const statsSection = document.getElementById("stats-section");
  if (!statsSection) return;

  const counters = document.querySelectorAll(".stat-number");
  
  const observerOptions = {
    root: null,
    threshold: 0.3
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const targetText = counter.getAttribute("data-target");
          const hasB = targetText.toLowerCase().includes("b");
          const hasM = targetText.toLowerCase().includes("m");
          
          // Extract numeric value
          const numericString = targetText.replace(/[bm\+]/gi, "");
          const isDecimal = numericString.includes(".");
          const targetValue = parseFloat(numericString);
          
          let startValue = 0;
          const duration = 2000; // 2 seconds
          const startTime = performance.now();

          function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out quad formula
            const easeProgress = progress * (2 - progress);
            const currentValue = startValue + easeProgress * (targetValue - startValue);

            if (isDecimal) {
              counter.innerHTML = currentValue.toFixed(1);
            } else {
              counter.innerHTML = Math.floor(currentValue).toString();
            }

            // Append suffixes
            if (hasB) counter.innerHTML += "b";
            if (hasM) counter.innerHTML += "m";
            if (targetText.includes("+")) {
              counter.innerHTML += '<sup class="stat-plus" style="font-size: 0.5em; vertical-align: super; margin-left: 2px;">+</sup>';
            }

            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            } else {
              counter.innerHTML = targetText.replace("+", '<sup class="stat-plus" style="font-size: 0.5em; vertical-align: super; margin-left: 2px;">+</sup>'); // Ensure exact final HTML
            }
          }

          requestAnimationFrame(updateCounter);
        });
        
        observer.unobserve(statsSection);
      }
    });
  }, observerOptions);

  observer.observe(statsSection);
}
