//config first slide
const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
    slider[currentSlide].classList.add('on')
}

function nextSlider() {
    hideSlider()
    if(currentSlide == slider.length -1){
        currentSlide = 0
    } else {
        currentSlide++
    }
    showSlider()
}

function prevSlider() {
    hideSlider()
    if(currentSlide == 0){
        currentSlide = slider.length-1
    } else {
        currentSlide--
    }
    showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

console.log(slider)

//slider 2
const slider2 = document.querySelectorAll('.slider2')
const btnPrev2 = document.getElementById('prev-button2');
const btnNext2= document.getElementById('next-button2');

let currentSlide2 = 0;

function hideSlider2() {
    slider2.forEach(item => item.classList.remove('on2'))
}

function showSlider2() {
    slider2[currentSlide2].classList.add('on2')
}

function nextSlider2() {
    hideSlider2()
    if(currentSlide2 == slider2.length -1){
        currentSlide2 = 0
    } else {
        currentSlide2++
    }
    showSlider2()
}

function prevSlider2() {
    hideSlider2()
    if(currentSlide2 == 0){
        currentSlide2 = slider2.length-1
    } else {
        currentSlide2--
    }
    showSlider2()
}

btnNext2.addEventListener('click', nextSlider2)
btnPrev2.addEventListener('click', prevSlider2)

console.log(slider2)