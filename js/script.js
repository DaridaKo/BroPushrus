$(document).ready(function(){
$('.slider__box').slick({
	arrows: true,
	slidesToShow: 4,
	responsive: [
    	{
      	breakpoint: 1272,
      		settings: {
        		slidesToShow: 3,
      		}
    	},
    	{
     	 breakpoint: 767,
      		settings: {
        		slidesToShow: 2,
      		}
    	},
    	{
     	 breakpoint: 708,
      		settings: {
        		slidesToShow: 1,
      		}
    	}
  	]
});
$('.header__burger').click(function(){
	$('.header__burger, .header__icons, .header__row, .screenblock, .recomendations, .commercial, .slider, .contact, .footer').toggleClass('active');
	$('body').toggleClass('lock');
});
let userList = document.querySelector('.menu-header__list-first');
let userList2 = document.querySelector('.menu-header__list-sec');
let userIcon = document.querySelector('.menu-header__title-first');
let userIcon2 = document.querySelector('.menu-header__title-sec');

userIcon.addEventListener("click", function(e){
	e.preventDefault();
	userList.classList.toggle('active');
});

userIcon2.addEventListener("click", function(e){
	e.preventDefault();
	userList2.classList.toggle('active');
});

document.addEventListener("click", function(e){
	if (!e.target.closest('.menu-header__title-1')) {
		userList.classList.remove('active');
	}
	if (!e.target.closest('.menu-header__title-2')) {
		userList2.classList.remove('active');
	}
});
});