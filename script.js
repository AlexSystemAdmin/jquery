/*$(".btn").append("обязательно");
$(".btn").prepend("обязательно");
$(".btn").before("<p class='text'>А теперь обязательно</p>");
$(".btn").after("<p class='text'>А теперь обязательно</p>");
$(".btn").css("background-color", "green");*/

/*$(".btn").click(function(){
    $(".box").toggle();
});*/

/*$(".btn").click(function(){
    $(".box").remove();
});*/

/*$(".btn").click(function(){
    $(".item:last").remove();
});*/

/*$(".btn").hover(function(){
    $(".item").css("background-color", "green");
},
function(){
    $(".item").css("background-color", "#f33f56")
});*/

$(".btn").click(function(){
    $(".box").fadeToggle();
});

/*$(".btn").click(function(){
    $(".box").animate({opacity: "0.5"});
});*/

$(".box").after("<p align='center'>Этот пример сделан на jQuery</p>");

$(".btn").html("Сделай клик");