window.addEventListener("load", function () {
  const links = [...document.querySelectorAll(".nav_item")];
  links.map((item) => item.addEventListener("mouseenter", handHoverLink));
  const line = document.querySelector(".line_effect");
  document.body.appendChild(line);
  function handHoverLink(event) {
    const { left, top, width, height } = event.target.getBoundingClientRect();
    console.log({ left, top, width, height });
    const offsetBottom = 5;
    line.style.width = `${width}px`;
    line.style.left = `${left}px`;
    line.style.top = `${top + height + offsetBottom}px`;
  }

  const menu = document.querySelector(".menu_middle");
  menu.addEventListener("mouseleave", function () {
    line.style.width = 0;
  });
});

// window.addEventListener("click", function () {
//   const icon = document.querySelector(".search_icon");
//   const search = document.querySelector(".search_box");

//   icon.addEventListener("click", function () {
//     search.classList.add("active");
//   });
// });
