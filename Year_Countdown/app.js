const daysDoc        = document.getElementById('days');
const hoursDoc       = document.getElementById('hours');
const minutesDoc     = document.getElementById('minutes');
const secondsDoc     = document.getElementById('seconds');

const daysTextDoc    = document.getElementById('days-text');
const hoursTextDoc   = document.getElementById('hours-text');
const minutesTextDoc = document.getElementById('minutes-text');
const secondsTextDoc = document.getElementById('seconds-text');

const NextYearTextDoc = document.getElementById('next-year');

function countdown(){
    const currentDay = new Date()
    const nextyear   = new Date("1 Jan " + (currentDay.getFullYear() + 1).toString())
    let diffYear = nextyear - currentDay

    let days = Math.floor(diffYear / (1000 * 60 * 60 * 24))
    diffYear %= (1000 * 60 * 60 * 24)
    daysDoc.innerHTML = formatTime(days)
    daysTextDoc.innerText = formatDataText(days, "days");

    let hours = Math.floor(diffYear / (1000 * 60 * 60))
    diffYear %= (1000 * 60 * 60)
    hoursDoc.innerHTML = formatTime(hours)
    hoursTextDoc.innerText = formatDataText(hours, "hours");

    let minutes = Math.floor(diffYear / (1000 * 60))
    diffYear %= (1000 * 60)
    minutesDoc.innerHTML = formatTime(minutes)
    minutesTextDoc.innerText = formatDataText(minutes, "minutes");

    let seconds = Math.floor(diffYear / 1000)
    secondsDoc.innerHTML = formatTime(seconds)
    secondsTextDoc.innerText = formatDataText(seconds, "seconds");

    NextYearTextDoc.innerHTML = "to " + (currentDay.getFullYear() + 1).toString()
}

function formatTime(data)
{
    return data < 10 ? "0" + data.toString() : data.toString()
}

function formatDataText(data, texto)
{
    return data == 1 ? texto.substring(0, texto.length - 1) : texto
}

setInterval(countdown, 1000);