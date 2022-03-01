// TODO: Add responsiveness from the menu bar
let searchBox = document.querySelector(".search-form")
let searchButton = document.querySelector(".search-button")
let closeButton = document.querySelector("#close")
searchButton.addEventListener("click", function(){
    searchBox.style.top = 0
})
closeButton.addEventListener("click", function(){
    searchBox.style.top = "-110%"
})
// TODO: Implement  swiper on homepage
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });