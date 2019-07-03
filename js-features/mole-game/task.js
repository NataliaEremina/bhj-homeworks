'use strict';

const hole = document.getElementsByClassName('hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


    hole.onclick = function () {
        hole.classList.contains('hole_has-mole') ? dead.innerText++ : lost.innerText++;
        if (dead.innerText == 10) {
            alert('Вы победили!');
            dead.innerText = 0;
            lost.innerText = 0;
        } else if (lost.innerText == 5) {
            alert('Вы проиграли!');
            dead.innerText = 0;
            lost.innerText = 0;
        }
    }



