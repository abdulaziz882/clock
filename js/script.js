const   secondArrow = document.querySelector('.s'),
        minuteArrow = document.querySelector('.m'),
        hourArrow   = document.querySelector('.h'),
        hoursBox    = document.querySelector('.hours'),
        minutesBox  = document.querySelector('.minutes');
        

function clock() {
    let time = new Date();
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let seconds = time.getSeconds()
    
    secondArrow.style = `transform: rotate(${seconds * 6}deg)`
    minuteArrow.style = `transform: rotate(${minutes * 6}deg)`
    hourArrow.style = `transform: rotate(${hours * 30}deg)`
    
    minutesBox.innerHTML = minutes < 10 ? '0' + minutes : minutes
    hoursBox.innerHTML = hours < 10 ? '0' + hours : hours
    
    setTimeout(() => clock(), 1000)
    
}

clock()


// setTimeout() - выполяет действия через указанное время

// setTimeout(() =>  console.log('hello'), 2000)

// рекурсия в js Это когда функция вызывает саму себя

// let i = 1;

// function req() {
//     if(i <= 10) {
//         console.log(i);
//         i++ 
//         setTimeout(() =>   req(), 1000)
//     }
// }

// req()



let links = document.querySelectorAll('.tabsItem');
let tabs = document.querySelectorAll('.tabsContentItem');


links.forEach((item,i) => {
    item.addEventListener('click', () => {
        removeActive()
        item.classList.add('active')
        tabs[i].classList.add('active')
    })
})

function removeActive () {
    links.forEach((el,i) => {
        el.classList.remove('active')
        tabs[i].classList.remove('active')
    })
}


const secondBlock = document.querySelector('.stopwatch__seconds'),
      minuteBlock = document.querySelector('.stopwatch__minutes'),
      hourBlock   = document.querySelector('.stopwatch__hours'),
      btn         = document.querySelector('.stopwatch__btn'),
      span        = document.querySelector('.tabsLink__span');
      
    
btn.addEventListener('click', () => {
    if(btn.innerHTML == 'start') {
        btn.innerHTML = 'stop'
        span.classList.add('active')
        let i = 0;
        setTimeout(() => start(btn,i), 1000)
    }else if(btn.innerHTML == 'stop') {
        btn.innerHTML = 'clear'
        span.classList.remove('active')
        span.classList.add('active_clear')
    }else {
        btn.innerHTML = 'start'
        span.classList.remove('active_clear')
        secondBlock.innerHTML = minuteBlock.innerHTML = hourBlock.innerHTML = 0
    }
})

function start(btn,i) {
    if(btn.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            secondBlock.innerHTML = i
            if(minuteBlock.innerHTML == 59) {
                minuteBlock.innerHTML = 0;
                hourBlock.innerHTML++
            }else {
                minuteBlock.innerHTML++
            }
        }else {
            i++
            secondBlock.innerHTML = i
        }
        setTimeout(() => start(btn,i), 1000)
    }
}


