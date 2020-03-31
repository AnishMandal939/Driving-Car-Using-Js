$(document).ready(function(){
    //variables
    $surface = $('.surface');//.surface will specify surface to given variable
    $car = $('.car'); //selecting car using car
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_05.png','./assets/Img_06.png'];
    // keypress Event
    //to stop and to start calling jquery object
    $(document).on('keypress',function(e){
        //console.log(e.which);//this is to check value of keys
        if(e.which == 13){
            $($surface).toggleClass('moveRight');
            $($car).toggleClass('suspension');
        }
    })
//for light 
    $(document).on('keypress',function(e){
        if(e.which == 119){
            if(flag){
                flag = false;
                $img.attr('src',cars[0]);
            }else{
                flag = true;
                $img.attr('src',cars[1]);
            }
        }
    })


});
