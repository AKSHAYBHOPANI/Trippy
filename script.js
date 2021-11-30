const music = document.getElementById('music');
const bg = document.getElementById('bg');
const info = document.getElementById('info');

document.addEventListener('keydown', (event) => {
  const keyName = event.key;

  if (keyName) {
    music.play();
    info.textContent=`You Pressed ${event.key}`; 
    bg.classList.add("screen-animation");
    setTimeout(MusicPause, 2000)
    
  }

  
}, false);

function MusicPause() {
music.pause();
bg.classList.remove("screen-animation")
}