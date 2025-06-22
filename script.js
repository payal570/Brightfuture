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
var modalBtns = document.querySelectorAll('.modal-open')

modalBtns.forEach(function(btn){
    btn.onclick = function() {
        var modal = btn.getAttribute("data-modal");

        document.getElementById(modal).style.display = "block";
    };
});

var closeBtns = document.querySelectorAll('.modal-close');

closeBtns.forEach(function(btn){
    btn.onclick = function(){
        var modal = (btn.closest(".modal").style.display = "none");
    };
});

window.onclick = function(e){
    if(e.target.className === "modal"){
        e.target.style.display = "none";
    }
};

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
