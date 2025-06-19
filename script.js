// script file

// home section starts
var menuBtn = document.querySelector('.main-navbar .menu-btn');
var menulist = document.querySelector('.main-navbar .nav-list');
var menulistItems = document.querySelectorAll('.nav-list li a');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menulist.classList.toggle('active');
})

for(var i= 0; i < menulistItems.length; i++){
    menulistItems[i].addEventListener('click', menulistClicked);
}
function menulistClicked(){
    menuBtn.classList.remove('active');
    menulist.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction);
window.addEventListener('load', pageScrollFunction);

function pageScrollFunction(){
    if(window.scrollY > 120){
        homeSection.classList.add('active');
    }
    else{
        homeSection.classList.remove('active');
    }
}
//notes popup
function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active')
    var popup = document.getElementById('popup');
    popup.classList.toggle('active')
}

// reference to buttons
var btnLeft = document.getElementById('prev_btn');
var btnRight = document.getElementById('next_btn');

// reference to slider
var slider = document.querySelector('.course-slider .slider');

btnRight.addEventListener('click', nextSlide);
function nextSlide(){
    slider.appendChild(slider.firstElementChild);
}

btnLeft.addEventListener('click', prevSlide);
function prevSlide(){
    slider.prepend(slider.lastElementChild);
}

// auto sliding
function autoslide(){
    deleteInterval = setInterval(timer, 2000);
    function timer(){
        nextSlide();
    }
}
autoslide();

// stop auto sliding whe mouse is over
slider.addEventListener('mouseover', deleteAutoSliding);
btnRight.addEventListener('mouseover', deleteAutoSliding);
btnLeft.addEventListener('mouseover', deleteAutoSliding);

function deleteAutoSliding(){
    clearInterval(deleteInterval);
}

// resume auto sliding when mouse is out
slider.addEventListener('mouseout', autoslide);
btnRight.addEventListener('mouseout', autoslide);
btnLeft.addEventListener('mouseout', autoslide);
