function myApp (){
    var miliseconds = 00
    var seconds = 00
    var minutes = 00

    var milisec = document.getElementById('milisec')
    var sec = document.getElementById('sec')
    var min = document.getElementById('min')

    var start = document.getElementById('start-button')
    var stop = document.getElementById('stop-button')
    var reset = document.getElementById('reset-button')

    var interval


    start.addEventListener('click', function (){
        console.log('you clicked start')
        interval = setInterval(setTimer, 10);
    })

    stop.addEventListener('click', function (){
        console.log('you clicked stop')
        clearInterval(interval)
    })

    reset.addEventListener('click', function (){
        console.log('you clicked reset')
        clearInterval(interval)
        miliseconds = '00'
        milisec.innerHTML = miliseconds
        seconds = '00'
        sec.innerHTML = seconds
        minutes = '00'
        min.innerHTML = minutes
    })


    function setTimer (){
        miliseconds++;
        if(miliseconds <= 9){
            miliseconds = "0" + miliseconds;
            milisec.innerHTML = miliseconds;
        }

        if (miliseconds > 9){
            miliseconds = miliseconds
            milisec.innerHTML = miliseconds
        }

        if (miliseconds > 99){
            seconds++
            sec.innerHTML = "0" + seconds
            miliseconds = 0
            milisec.innerHTML = "0" + miliseconds;
        }

        if (seconds > 9){
            seconds = seconds
            sec.innerHTML = seconds
        }

        if (seconds > 60){
            minutes++
            min.innerHTML = "0" + minutes
            seconds = 0
            sec.innerHTML = "0" + seconds
        }

        if (minutes > 9){
            minutes = minutes
            min.innerHTML = minutes
        }

    }
    
}

myApp()