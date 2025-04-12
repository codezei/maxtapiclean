export default function process() {
  let items = document.querySelectorAll(".process__item");
  let visualItems = document.querySelectorAll(".process-visual__item");
  for (let i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function (e) {
      visualItems[i].classList.add("active");
    });
    items[i].addEventListener("mouseout", function (e) {
      visualItems[i].classList.remove("active");
    });
  }
}
