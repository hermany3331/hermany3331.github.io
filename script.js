'use strict';

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const closeButton = document.getElementById("btn-close");


closeButton.addEventListener("click",function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

document.addEventListener('keydown',function(e){
    if(e.key === 'Escape'){
      if(!modal.classList.contains('hidden')){
        modal.classList.add('hidden');
        overlay.classList.add('hidden');
      };
    };
});

overlay.addEventListener('click', function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});