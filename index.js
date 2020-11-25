$(document).ready(function(){
    $(".card-header").click(function(){
        $(this).children().toggleClass("bould");
        $(this).children().last().toggleClass("rotated");      
    });
});