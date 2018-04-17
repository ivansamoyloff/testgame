$(function() {
    var w;
    var h;
    var i;
    var j;
    var x;
    var arr = [];
    var randIndex;
    var count =0;
    var scoreCount = 3000;

    function getRandomInt(min, max){
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function startTimer(){
        timerId = setInterval(startTime, 10);
    }

    function resetTimer(){
        clearInterval(timerId);
        getTimer();
    }

    function alarm() {
        $time = $(".timer").text();
        $score_num = $(".score_num").text();
        alert("Your points: "+$score_num+". Your time: "+$time);
    }

    var timeId = setTimeout(function score() {
        scoreCount--;
        var scoreC = document.getElementsByClassName('score_num');
        scoreC[0].innerHTML = '<p>'+scoreCount+'</p>';
        timeId = setTimeout(score, 1000);
    }, 1000);

    $.getJSON("https://kde.link/test/get_field_size.php", function(data) {
        console.log(data);
        w = data.width;
        h = data.height;
        $ActiveElements=[];
        $allElems=[];

        for(i=0;i<h;i++){
            for(j=1;j<=w;j++){
                x = i*8+j;
                $("#"+x).removeClass("hidden").addClass("isActive");
                $ActiveElements.push(x);
            }
        }

        startTimer();

        while($ActiveElements.length>2){
            x = getRandomInt(0,9);
            randIndex = getRandomInt(1,$ActiveElements.length-3);
            j = $ActiveElements[0];
            $("#"+j).attr("alt",""+x);
            $ActiveElements.splice(0,1);
            $("#"+$ActiveElements[randIndex-1]).attr("alt",""+x);
            $ActiveElements.splice((randIndex-1),1);
        }

        x = getRandomInt(0,9);
        $("#"+$ActiveElements[0]).attr("alt",""+x);
        $("#"+$ActiveElements[1]).attr("alt",""+x);
        $allElems.push($(".isActive"));

        $workImg = $("img");
        $workImg.on('click', function(){
            if(count>=2){
                $(".isClicked").attr('src',"img/ross-lovegrove-sprite-stacking-chair-maple-front-knoll_1024x1024.jpg");
                $workImg.removeClass("isClicked");
                count=0;
                arr.splice(0,2);
            }
            if(!($(this).hasClass("isClicked"))){
                $(this).addClass("isClicked");
                count++;
                arr.push($(this).attr('alt'));
                $(this).attr('src',"http://kde.link/test/"+$(this).attr('alt')+".png");
            }else{
                $(".isClicked").attr('src',"img/ross-lovegrove-sprite-stacking-chair-maple-front-knoll_1024x1024.jpg");
                $workImg.removeClass("isClicked");
                count=0;
                arr.splice(0,1);
            }
            if(arr.length>=2){
                if(arr[0]===arr[1]){
                    $(".isClicked").addClass("hidden").removeClass("isActive");
                    $allElems[0].splice(0,2);
                    scoreCount+=100;
                }

            }
            if($allElems[0].length===0){
                resetTimer();
                clearTimeout(timeId);
                alarm();
            }
        });
    });
});