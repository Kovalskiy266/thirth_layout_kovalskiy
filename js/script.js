$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        autoplay: true,
        infinite: true, 
        autoplaySpeed: 4000,
        pauseOnHover: false,
        fade: true,
        draggable: false,
        pauseOnFocus: false,
        pauseOnDotsHover: false,
        fade: true, 
        waitForAnimate: false
    });
});

//Функція для показу форми
function show(state)
{
document.getElementById('window').style.display = state;	
document.getElementById('gray').style.display = state; 		
}	