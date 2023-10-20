let lastIndx = 0;
let imgs = document.querySelectorAll(".container-img img");

imgs.forEach((item, index) => {
  document
    .querySelectorAll(".bullet-single")
    [index].addEventListener("click", () => {
      let lastImg = document.querySelectorAll(".container-img img")[lastIndx];
      let photoActual = document.querySelectorAll(".container-img img")[index];

      document
        .querySelectorAll(".bullet-single")
        [lastIndx].classList.remove("active-bullet");
      document
        .querySelectorAll(".bullet-single")
        [index].classList.add("active-bullet");
      lastImg.style.opacity = 0;
      photoActual.style.opacity = 1;

      lastIndx = index;
    });
});
