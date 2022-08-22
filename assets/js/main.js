const headline = ('CodeFlow Übung lev1_2: Date Methods')
document.getElementById('headline').innerHTML = headline

let monate = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]

let wochenTag = [
    "Sonntag",
    "Montag",
    "Dienstag",
    "Mittwoch",
    "Donnerstag",
    "Freitag",
    "Samstag"
]


const d = new Date()
console.log(d.getFullYear())

console.log(d.getMonth() + ' Monate')

console.log(d.getDate() + ' Tage')

console.log(d.getHours() + ' Stunden')

console.log(d.getMinutes() + ' Minuten')

let day = wochenTag[d.getDay()]
console.log(day)

let month = monate[d.getMonth()]
console.log(month)