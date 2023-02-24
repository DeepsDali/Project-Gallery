console.log("check");
const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  let content = button.nextElementSibling;
  button.addEventListener("click", () => {
    content.classList.toggle("active");
    if (button.textContent == "Read more") {
      button.textContent = "Read less";
    } else {
      button.textContent = "Read more";
    }
  });
});
