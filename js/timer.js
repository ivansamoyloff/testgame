var createTimer ={
    milliseconds:0,
    sec:0,
    minutes:0,
    hour:0
};

function startTime(){
    getTimer();
    createTimer.milliseconds +=10;
    if(createTimer.milliseconds >= 1000) {
        createTimer.sec++;
        createTimer.milliseconds = 0;
        if (createTimer.sec >= 60) {
            createTimer.minutes++;
            createTimer.sec = 0;
            if (createTimer.minutes >= 60) {
                createTimer.hour++;
                createTimer.minutes = 0;
            }
        }
    }
}

function getTimer(){
    var clocks = document.getElementsByClassName('timer');
    if(createTimer.hour < 10) {
        if (createTimer.minutes < 10) {
            if (createTimer.sec < 10) {
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+0+createTimer.minutes+':'+0+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+0+createTimer.minutes+':'+0+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }
            }else{
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+0+createTimer.minutes+':'+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+0+createTimer.minutes+':'+createTimer.sec+':'+createTimer.milliseconds+'</p>';
            }
        }
    }else{
            if (createTimer.sec < 10) {
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+createTimer.minutes+':'+0+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+createTimer.minutes+':'+0+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }

            }else{
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+createTimer.minutes+':'+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+0+createTimer.hour+':'+createTimer.minutes+':'+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }
            }
        }
    }else {
        if (createTimer.minutes < 10) {
            if (createTimer.sec < 10) {
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+0+createTimer.minutes+':'+0+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+0+createTimer.minutes+':'+0+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }
            }else{
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+0+createTimer.minutes+':'+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+0+createTimer.minutes+':'+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }
            }
        }else{
            if (createTimer.sec < 10) {
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+createTimer.minutes+':'+0+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+createTimer.minutes+':'+0+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }

            }else{
                if (createTimer.milliseconds < 100) {
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+createTimer.minutes+':'+createTimer.sec+':'+0+createTimer.milliseconds+'</p>';
                }else{
                    clocks[0].innerHTML = '<p>'+createTimer.hour+':'+createTimer.minutes+':'+createTimer.sec+':'+createTimer.milliseconds+'</p>';
                }
            }
        }
    }
}





