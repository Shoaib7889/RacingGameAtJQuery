$(function(){
    $car1w=$("#car1").width();
    
//    $raceTrackWidth=$(document).width()-$car1w;
    $raceTrackWidth=$(window).width()-$car1w;
//    $raceTrackWidth2=$(window).width()-$car1w;
//    alert('documetn width'+$raceTrackWidth);
//    alert('window width'+$raceTrackWidth2);
    
    $bool=false;
    $positon='1st';
    
    
    //it will not calling here so now value will not assign according to functiton
    function checkPosition(){
        if($bool===false){
            $bool=true;
        }else  {
            $positon='2nd';
        }
    }
    
    
//    $('#b1').on('click',function(){
//        alert('clicked');
//    })
        
    $('#b1').on('click',function(){
        $rand1=Math.floor((Math.random()*1000)+1);
//        $('#car1').animate({left:$raceTrackWidth-4},$rand1,function(){
        $('#car1').animate({left:$raceTrackWidth},$rand1,function(){
                checkPosition(); 
            $('#raceInfo1 span').text(' is at '+$positon).css('color','white');
        });
    })
    
    $('#b1').on('click',function(){
        $rand2=Math.floor((Math.random()*1000)+1);
        $('#car2').animate({left:$raceTrackWidth},$rand2,function(){
                checkPosition();
            $('#raceInfo2 span').text(' is at '+$positon).css('color','white');
        });
    })
    
    $('#b2').on('click',function(){
        $('#car1').animate({left:0},300);
        $('#car2').animate({left:0},300);
         $('#raceInfo1 span').text('');
         $('#raceInfo2 span').text('');
        
          $bool=false;
          $positon='first';
        
    })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})