$(function(){
$('.slider__inner').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000
});
});



const searchBtn = document.querySelector(".search-form__search-btn");
const cancelBtn = document.querySelector(".search-form__cancel-btn");
const searchBox = document.querySelector(".search-form");
const searchInput = document.querySelector("input");
const headerMenu = document.querySelector(".menu");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  cancelBtn.classList.add("active");
  headerMenu.classList.add("hidden");

}
cancelBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  cancelBtn.classList.remove("active");
  headerMenu.classList.remove("hidden");
  searchInput.value = "";
}

