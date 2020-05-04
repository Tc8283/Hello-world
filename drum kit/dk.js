window.addEventListener('keydown',playsound)


function playsound(e){
    const audio=document.querySelector(`audio[key="${e.key}"]`)
    const key=document.querySelector(`.sfx[key="${e.key}"]`)
    audio.currentTime=0;
    audio.play();
    key.classList.toggle('playing');
}
function removeTransition(e){
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.sfx');

keys.forEach(key=>key.addEventListener('transitionend', removeTransition))





