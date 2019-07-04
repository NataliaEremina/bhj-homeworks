'use strict';

let slider = document.querySelectorAll('.slider__item');
let prev = document.querySelector('.slider__arrow_prev');
let next = document.querySelector('.slider__arrow_next');

let sumSlider = 0;

next.onclick = function () {
    sumSlider++;
    slider[sumSlider].className = 'slider__item';
    if (sumSlider >= slider.length) {
        sumSlider = 0;
    } 
    slider[sumSlider].className = 'slider__item slider__item_active';
}

prev.onclick = function () {
    sumSlider--;
    slider[sumSlider].className = 'slider__item';
    if (sumSlider < 0) {
        sumSlider = slides.length - 1;
    }
    slider[sumSlider].className = 'slider__item slider__item_active';
};


