const audioCnotainer = document.getElementById('a-cont')
const audio = document.querySelector('audio')
const Audioname = document.getElementById('audio-name')
const background = document.querySelector('.background')
const lyrics1 = document.getElementById('lyrics-box1')
const lyrics2 = document.getElementById('lyrics-box2')
const lyrics3 = document.getElementById('lyrics-box3')
const lyrics4 = document.getElementById('lyrics-box4')
const lyrics5 = document.getElementById('lyrics-box5')
const lyrics6 = document.getElementById('lyrics-box6')
const lyrics7 = document.getElementById('lyrics-box7')
const lyrics8 = document.getElementById('lyrics-box8')
const lyrics9 = document.getElementById('lyrics-box9')
const lyrics10 = document.getElementById('lyrics-box10')
const lyricsSection = document.getElementById('lyrics')

const lyricses = [lyrics1, lyrics2, lyrics3, lyrics4, lyrics5, lyrics6, lyrics7, lyrics8, lyrics9, lyrics10]

const adionew = new Audio()

audio.addEventListener('play', () => {
    audioCnotainer.style.top = '80%';
    audio.style.maxWidth = '500px'
    Audioname.style.maxWidth = '500px'
    lyricsSection.style.marginTop = '120px'
    console.log('playing')
    background.classList.add('Background-active')

    setInterval(() => {
        if (audio.currentTime >= 8.1 && audio.currentTime < 17.9 || audio.currentTime >= 97 && audio.currentTime < 106 || audio.currentTime >= 240 && audio.currentTime < 248) {
            lyricses[0].classList.add('active')
            
            
            if (lyricses[0].classList.contains('active')) {
                lyricses[0].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[0].scrollIntoView(false)
            }
        } else {
            lyricses[0].classList.remove('active')
        }

        if (audio.currentTime >= 17.9 && audio.currentTime < 26 || audio.currentTime >= 106.5 && audio.currentTime < 114.5 || audio.currentTime >= 248.5 && audio.currentTime < 257.9) {
            lyricses[1].classList.add('active')
           
            if (lyricses[1].classList.contains('active')) {
                lyricses[1].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[1].scrollIntoView(false)
            }
        } else {
            lyricses[1].classList.remove('active')
        }

        if (audio.currentTime >= 26.5 && audio.currentTime < 35 || audio.currentTime >= 115 && audio.currentTime < 124 || audio.currentTime >= 169 && audio.currentTime < 177.5 || audio.currentTime >= 257.9 && audio.currentTime < 266.4) {
            lyricses[2].classList.add('active')

            if (lyricses[2].classList.contains('active')) {
                lyricses[2].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[2].scrollIntoView(false)
            }
        } else {
            lyricses[2].classList.remove('active')
        }

        if (audio.currentTime >= 35 && audio.currentTime < 43.8 || audio.currentTime >= 124  && audio.currentTime < 132.8 || audio.currentTime >= 177.5 && audio.currentTime < 186.3 || audio.currentTime >= 266.4 && audio.currentTime < 275.2) {
            lyricses[3].classList.add('active')

            if (lyricses[3].classList.contains('active')) {
                lyricses[3].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[3].scrollIntoView(false)
            }
        } else {
            lyricses[3].classList.remove('active')
        }

        if (audio.currentTime >= 43.8 && audio.currentTime < 53 || audio.currentTime >= 132.8 && audio.currentTime < 141.5 || audio.currentTime >= 186.3 && audio.currentTime <  195.5 || audio.currentTime >= 275.2 && audio.currentTime < 284) {
            lyricses[4].classList.add('active')

            if (lyricses[4].classList.contains('active')) {
                lyricses[4].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[4].scrollIntoView(false)
            }
        } else {
            lyricses[4].classList.remove('active')
        }

        if (audio.currentTime >= 53 && audio.currentTime < 56 || audio.currentTime >= 142 && audio.currentTime < 145 || audio.currentTime >= 195.5 && audio.currentTime < 198.5 || audio.currentTime >= 284 && audio.currentTime < 287) {
            lyricses[5].classList.add('active')

            if (lyricses[5].classList.contains('active')) {
                lyricses[5].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[5].scrollIntoView(false)
            }
        } else {
            lyricses[5].classList.remove('active')
        }

        if (audio.currentTime >= 56  && audio.currentTime < 62 || audio.currentTime >= 145 && audio.currentTime < 150.5 || audio.currentTime >=  198.5 && audio.currentTime < 204.5 || audio.currentTime >= 287 && audio.currentTime < 293) {
            lyricses[6].classList.add('active')

            if (lyricses[6].classList.contains('active')) {
                lyricses[6].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[6].scrollIntoView(false)
            }
        } else {
            lyricses[6].classList.remove('active')
        }

        if (audio.currentTime >= 62.2   && audio.currentTime < 71 || audio.currentTime >= 151 && audio.currentTime < 159.8 || audio.currentTime >= 204.5 && audio.currentTime < 212.8 || audio.currentTime >= 293 && audio.currentTime < 301.8) {
            lyricses[7].classList.add('active')

            if (lyricses[7].classList.contains('active')) {
                lyricses[7].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[7].scrollIntoView(false)
            }
        } else {
            lyricses[7].classList.remove('active')
        }

        if (audio.currentTime >= 71 && audio.currentTime < 79.5 || audio.currentTime >= 159.8 && audio.currentTime < 168.5 || audio.currentTime >= 212.5 && audio.currentTime < 221.5 || audio.currentTime >= 301.8 && audio.currentTime < 310.3) {
            lyricses[8].classList.add('active')

            if (lyricses[8].classList.contains('active')) {
                lyricses[8].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[8].scrollIntoView(false)
            }
        } else {
            lyricses[8].classList.remove('active')
        }

        if (audio.currentTime >= 79.5   && audio.currentTime < 83 || audio.currentTime >= 221.8 && audio.currentTime < 225) {
            lyricses[9].classList.add('active')

            if (lyricses[9].classList.contains('active')) {
                lyricses[9].scrollIntoView({block: 'center',  behavior: 'smooth'})
            } else {
                lyricses[9].scrollIntoView(false)
            }
        } else {
            lyricses[9].classList.remove('active')
        }
    }, 1000)
})

lyrics1.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 8.1
})

lyrics2.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 17.9
})

lyrics3.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 26.5
})

lyrics4.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 35
})

lyrics5.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 43.8
})

lyrics6.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 53
})

lyrics7.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 56
})

lyrics8.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 62.2
})

lyrics9.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 71
})

lyrics10.addEventListener('click', () => {
    audio.play()
    audio.currentTime = 79.5
})





