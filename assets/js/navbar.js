document.addEventListener("DOMContentLoaded", () => {
  // Load Header and Footer dynamically
  loadComponent("header-placeholder", "components/header.html", () => {
    initNavbar();
  });
  loadComponent("footer-placeholder", "components/footer.html");
});

function loadComponent(elementId, filepath, callback) {
  const element = document.getElementById(elementId);
  if (!element) return;
  
  fetch(filepath)
    .then(response => {
      if (!response.ok) throw new Error(`Failed to load ${filepath}`);
      return response.text();
    })
    .then(data => {
      element.innerHTML = data;
      // Mark active link in navbar based on current page
      setActiveNavLink();
      if (callback) callback();
    })
    .catch(err => console.error(err));
}

function setActiveNavLink() {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  
  // Desktop Nav Links
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === currentPath || (currentPath.includes("projects") && href.includes("projects")))) {
      link.classList.add("active");
      const parentDropdown = link.closest(".nav-item-dropdown");
      if (parentDropdown) parentDropdown.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Mobile Drawer Links
  const drawerLinks = document.querySelectorAll(".mobile-drawer-nav .drawer-link");
  drawerLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && (href === currentPath || (currentPath.includes("projects") && href.includes("projects")))) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function initNavbar() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  // Add scroll class for sticky effects
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Mobile drawer interactions
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const mobileDrawer = document.getElementById("mobileDrawer");
  const drawerCloseBtn = document.getElementById("drawerCloseBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  
  if (hamburgerBtn && mobileDrawer) {
    const openDrawer = () => {
      mobileDrawer.classList.add("open");
      if (drawerBackdrop) drawerBackdrop.classList.add("open");
      document.body.style.overflow = "hidden"; // Prevent background scrolling
    };

    const closeDrawer = () => {
      mobileDrawer.classList.remove("open");
      if (drawerBackdrop) drawerBackdrop.classList.remove("open");
      document.body.style.overflow = ""; // Restore scrolling
    };

    hamburgerBtn.addEventListener("click", openDrawer);
    if (drawerCloseBtn) drawerCloseBtn.addEventListener("click", closeDrawer);
    if (drawerBackdrop) drawerBackdrop.addEventListener("click", closeDrawer);

    // Close menu when clicking drawer links
    const drawerLinks = mobileDrawer.querySelectorAll(".drawer-link, .submenu-link");
    drawerLinks.forEach(link => {
      link.addEventListener("click", closeDrawer);
    });

    // Submenu accordion toggle
    const submenuToggleBtn = document.getElementById("projectsSubmenuToggle");
    const projectsSubmenu = document.getElementById("projectsSubmenu");
    if (submenuToggleBtn && projectsSubmenu) {
      submenuToggleBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        submenuToggleBtn.classList.toggle("open");
        projectsSubmenu.classList.toggle("open");
      });
    }
  }
}
