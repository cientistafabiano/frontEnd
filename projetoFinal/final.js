$(function(){
    $("nav li p").click(function(){
        $(this).next("nav li ul").toggle("fast");
         //qdo this virar nav li ul ele recebe a class:open
        $(this).toggleClass("open");
    });
});