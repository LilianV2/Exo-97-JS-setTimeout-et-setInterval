let button = document.getElementById('timeout')
button.innerHTML = "wait 2 sec"

button.addEventListener("click", function() {
    setTimeout( function() {
        let newDiv = document.createElement('div')
        newDiv.innerHTML = "Mon timeout vient de créer ce div 2 secondes après le click sur le button"
        newDiv.style.backgroundColor = "cornflowerblue"
        document.getElementById('timeout-div').appendChild(newDiv)
    }, 2000)
})

let button2 = document.getElementById('interval-start')
button2.innerHTML = "start"
let button3 = document.getElementById('interval-stop')
button3.innerHTML = "stop"

button2.addEventListener("click", function () {
    let a = 0
    let interval = setInterval(function() {
        button3.addEventListener("click", function() {
            clearInterval(interval)
        },1000)
        let newDiv2 = document.getElementById('interval-div')
        newDiv2.innerHTML = a;
        a++;
    })
})