const num=document.querySelector('.Num');
const colour=document.querySelector(".color");

$(".Num").change(function(){
    $('.quantity').text(num.value);
    num.value=''
})

$(".reset").click(function(){
    location.reload();
})

$(".chooseWhite").click(function(){
    $(".color").text("White");
     $(".whitePlain").attr("src","imgs/whitePlain.webp")
})

$(".chooseColor").click(function(){
    $(".color").text("Coloured");
    $(".whitePlain").attr("src","imgs/blue.webp")
})

$(".normal").click(function(){
    $(".quality").text("Normal");    
    if(colour.innerText=='Coloured'){
        $(".whitePlain").attr("src","imgs/blue.webp");
    }else    $(".whitePlain").attr("src","imgs/whitePlain.jpg");
})

$(".high").click(function(){
    $(".quality").text("high"); 
    if(colour.innerText=='Coloured'){
        $(".whitePlain").attr("src","imgs/highBlue.webp");
    }else    $(".whitePlain").attr("src","imgs/highWhite.jpg");
})