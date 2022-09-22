$(function(){
$('.slider__inner').slick({
  dots: true,
  arrows: false,
  fade: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [  
    {
      breakpoint: 1024,
      settings: {
      swipe: true,  
      }

    },
    
  ]

});
});

$(".menu a").on("click", function (e) {
			e.preventDefault();
  	var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
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


//Табы//
document.querySelectorAll('.tabs__item').forEach(function(tabsBtn) {
  tabsBtn.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.tab;

document.querySelectorAll('.tabs__item').forEach(function(btn){
  btn.classList.remove('tabs__item--active')});
    e.currentTarget.classList.add('tabs__item--active');
    
 })
})
const tabHeaders = document.querySelectorAll('[data-tab]');
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {
             
        
      // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
        item.classList.add('hidden');
        

      });
      // 2. Выбрать нужный content box и показать его
        
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');
    });     
})



const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
});

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
}