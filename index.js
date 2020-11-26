$(document).ready(function(){
    $(".question").click(function(){
        $(this).children().toggleClass("bould");
        $(this).children().last().toggleClass("rotated");
        $(this).parent().children().last().slideToggle();    
    });
});