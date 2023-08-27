const audioCnotainer = document.getElementById('a-cont')
const audio = document.querySelector('audio')
const Audioname = document.getElementById('audio-name')
const lyrics1 = document.querySelector('.lyrics-box')

const adionew = new Audio()

audio.addEventListener('play', () => {
    audioCnotainer.style.top = '80%';
    audio.style.maxWidth = '500px'
    Audioname.style.maxWidth = '500px'
    console.log('playing')
})

if (audio.currentTime >= 9 && audio.currentTime <= 18) {
    lyrics1.classList.add('active')
}

console.log(audio.currentTime)