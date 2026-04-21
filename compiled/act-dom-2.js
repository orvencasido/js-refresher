function setActive(clickedButton) {
  const buttons = document.querySelectorAll(".btn");

  // remove active from all buttons
  buttons.forEach(btn => {
    btn.classList.remove("active");
  });

  // add active only to clicked one
  clickedButton.classList.add("active");
}