let currentIndex = 0;
const slides = document.querySelectorAll(".img-style");
const leftBtn = document.getElementById("leftSlide");
const rightBtn = document.getElementById("rightSlide");

function next(){
    slides[currentIndex].classList.remove('active');
    if(currentIndex===5){
        currentIndex = 0;
    }else{
        currentIndex++;
    }
    slides[currentIndex].classList.add('active');
}

function prev(){
    slides[currentIndex].classList.remove('active');
    if(currentIndex===0){
        currentIndex = 5;
    }else{
        currentIndex--;
    }
    slides[currentIndex].classList.add('active');
}


rightBtn.addEventListener('click', next);
leftBtn.addEventListener('click', prev);