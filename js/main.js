// ***** add background on header when scrolled up to 100px height of the viewport
const menuArea = document.querySelector('.header-area');
	
window.onscroll = function() {

	if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
		menuArea.classList.add('sticky_navigation');
	}else{
		menuArea.classList.remove('sticky_navigation');
	}
}

// ***** add click listener to all nav links
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(el =>{
	// console.log('clicked '); testing the click listener if working

	// call navbarToggler function
	el.addEventListener('click', navbarToggler);
})

// close menu once link is clicked
const navbarCollapse = document.querySelector('.navbar-collapse');
function navbarToggler() {
	if(navbarCollapse.classList.contains('show')){
		navbarCollapse.classList.remove('show');
	}
}

// animated headline lib
$(document).ready(function () {
    //*********** Animated headline js
	$('.selector').animatedHeadline({
		animationType: 'clip'
	});
});
