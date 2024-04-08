var daysEl = document.getElementById('days')
var hoursEl = document.getElementById('hours')
var minutesEl = document.getElementById('minutes')
var secondsEl = document.getElementById('seconds')

function countdownTimer(){
    const countDownDate = new Date('06/30/2024 10:00').getTime();


    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24


    const interval = setInterval(() => {
    const now = new Date().getTime()
    const distance = countDownDate - now


    daysEl.innerText = formatNumber(Math.floor(distance / day))
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour))
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute))
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second))

if (disctance < 0) {
    document.getElementById('headline').innerText = 'Umarım kazanmışsındır'
    document.getElementById('countdown').style.display = 'none'

    clearInterval(interval)
}

    }, 1000)

}
function formatNumber(number) {
    if(number < 10) {
        return '0' + number
    }

    return number
}

countdownTimer()
