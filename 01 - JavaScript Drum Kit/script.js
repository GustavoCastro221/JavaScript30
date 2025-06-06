window.addEventListener('keydown', playAudio);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playAudio(e){
   
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if(!audio) return;

    audio.currentTime = 0;
    audio.play();
    
    key.classList.add("playing")

}


function removeTransition(e){
    this.classList.remove("playing");
}

