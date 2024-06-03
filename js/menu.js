let arrow = document.querySelectorAll('.arrow');
for(i=0; i<arrow.length; i++){
	let link = arrow[i].previousElementSibling;
	let subMenu = arrow[i].nextElementSibling;
	let thisArrow = arrow[i];

	arrow[i].addEventListener('click', function(){
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	});
	link.addEventListener('click', function(e){
		e.preventDefault();
		subMenu.classList.toggle('open');
		thisArrow.classList.toggle('active');
	});
}

