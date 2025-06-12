document.addEventListener("DOMContentLoaded", () => {
  const goToPage = {
    Week1: "Week1.html",
    Week2: "Week2.html",
    Week3: "Week3.html",
    Week4: "Week4.html",
    Week5: "Week5.html",
    Week6: "Week6.html",
    Week7: "Week7.html",
    Week8: "Week8.html",
    Week9: "Week9.html",
    Week10: "Week10.html",
    Week11: "Week11.html",
    Week12: "Week12.html",
    Week13: "Week13.html",
    Week14: "Week14.html",
  };

  Object.keys(goToPage).forEach((buttonId) => {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", () => {
        window.location.href = goToPage[buttonId];
      });
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.getElementById("menuIcon");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menuIcon || !sideMenu || !overlay) {
    console.error("Menu elements not found");
    return;
  }

  const openMenu = () => {
    sideMenu.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeMenu = () => {
    sideMenu.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  menuIcon.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);

  let lastScrollTop = 0;

  window.addEventListener("scroll", () => {
    if (!sideMenu.classList.contains("hidden")) {
      closeMenu();
    }

    let currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
      menuIcon.style.display = "none";
    } else {
      menuIcon.style.display = "block";
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  });
});
