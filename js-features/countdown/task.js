
<<<<<<< HEAD
const count = document.getElementById("timer");

const timer = setInterval(()=>{
    count.innerText--;
    if (count.innerText == 0) {
        alert('Вы победили в конкурсе');
        clearInterval(timer);
    }
}, 1000);
=======
>>>>>>> ce48b2de26ba750a7fffaefdf909fe26d8c62983
