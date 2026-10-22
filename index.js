let seconds = 0

document.getElementById("mybutton").onclick = function () {

    setInterval(() => {
        seconds++;
        document.getElementById("timer2").textContent = seconds

    }, 1000);


}
