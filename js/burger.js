document.addEventListener("DOMContentLoaded", function() {
  const burgerIcon = document.getElementById("burger-icon");
  const burgerMenu = document.getElementById("burger-menu");
  const closeBtn = document.getElementById('close-btn');

  burgerIcon.addEventListener("click", function() {
    burgerMenu.classList.add("burger-menu-active");
    burgerIcon.classList.add("active");
  });

  closeBtn.addEventListener("click", function() {
    burgerMenu.classList.remove("burger-menu-active");
    burgerMenu.classList.add("burger-menu-closing");
    burgerIcon.classList.remove("active");

    setTimeout(function() {
      burgerMenu.classList.remove("burger-menu-closing");
    }, 500);
  });
});
