'use strict';

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const modalClose = document.getElementsByClassName('modal__close');
const showSuccess = document.getElementsByClassName('show-success');

modalMain.className = 'modal modal_active';


modalClose[0].onclick = function () {
    modalMain.className = 'modal';
};

showSuccess.onclick = function () {
    modalSuccess.className = 'modal modal_active';
};

modalClose[1].onclick = function () {
    modalMain.className = 'modal';
    modalSuccess.className = 'modal';
};

