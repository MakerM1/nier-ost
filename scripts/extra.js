const arrow = document.getElementById('extra-button')
const extraBox = document.getElementById('extra-info-box')
const line = document.getElementById('line')
const find = document.getElementById('find')
let left = true;
let left2 = true;

arrow.addEventListener('click', () => {
    line.classList.toggle('active')
    find.classList.toggle('active')
    extraBox.classList.toggle('active')
    if (left === true) {
        arrow.classList.add('active')
        arrow.style.bottom = `-${find.clientHeight  + 40}px`
        line.style.bottom = `-${find.clientHeight}px`
        left = false
    } else if (left === false) {
        arrow.classList.remove('active')
        arrow.style.bottom = '-20px'
        line.style.bottom = '0px'
        left = true
    }
})

const arrow2 = document.getElementById('extra-button2')
const extraBox2 = document.getElementById('extra-info-box2')
const line2 = document.getElementById('line2')
const find2 = document.getElementById('find2')

arrow2.addEventListener('click', () => {
    line2.classList.toggle('active')
    find2.classList.toggle('active')
    extraBox2.classList.toggle('active')
    if (left2 === true) {
        arrow2.classList.add('active')
        arrow2.style.bottom = `-${find.clientHeight  + 60}px`
        line2.style.bottom = `-${find.clientHeight  + 10}px`
        left2 = false
    } else if (left2 === false) {
        arrow2.classList.remove('active')
        arrow2.style.bottom = '-20px'
        line2.style.bottom = '0px'
        left2 = true
    }
})