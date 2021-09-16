let WHITE_KEYS = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
let BLACK_KEYS = ['w', 'e', 'r', 't', 'y', 'u', 'i'];


let keys = document.querySelectorAll('.key');
let whiteKeys = document.querySelectorAll('.key.white');
let blackKeys = document.querySelectorAll('.key.black');

keys.forEach(key => {
  key.addEventListener("click", () => playNote(key));
});

document.addEventListener('keydown', e => {
  let key = e.key;
  let whiteKeyIndex = WHITE_KEYS.indexOf(key);
  let blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1 ) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1 ) playNote(blackKeys[blackKeyIndex])
});

function playNote(key) {
  let noteAudio = document.getElementById(key.dataset.note);
  noteAudio.currentTime = 0;
  noteAudio.play();
  key.classList.add('active')
  noteAudio.addEventListener("ended", () => {
    key.classList.remove('active')
  })
}