const endDate = "25 August 2025 12:00 AM"

document.getElementById("end-Date").innerText = endDate // Dynamic 

const inputs = document.querySelectorAll("input")

function clock() {
    const end = new Date (endDate)
    const now = new Date ()

    // const diff = end - now; // the difference is in millisec
    const diff = (end - now) / 1000

    //days
    inputs[0].value = Math.floor(diff / 3600 / 24)
    
    //hours
    inputs[1].value = Math.floor(diff / 3600) % 24

    //minutes
    inputs[2].value = Math.floor(diff / 60) % 60

    //seconds
    inputs[3].value = Math.floor(diff) % 60
}
clock()

/*
1 day = 24 hrs
1 hr = 60 min
1 min = 60 sec
*/

setInterval(() => {
    clock()
}, 1000);