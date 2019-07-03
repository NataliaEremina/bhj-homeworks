'use strict';

const count = document.getElementById("timer");

const timer = setInterval(()=>{
    countdown.innerText--;
    if (count.innerText == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);
    }
}, 1000);