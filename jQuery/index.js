$("h1").addClass("big-title margin-50");
//$("button").click(function () {
//   $("h1").css("color", "purple");
//});
//$("h1").before("<button>New</button>");
//after();
//prepend();
//append();
$("button").click(function () {
    $("h1").slideToggle().animate({opacity: "0.5"});//.animate()only can have numeric css values
    //show();
    //hide();
    //toggle();
    //fadeOut();
    //fadeIn();
    //fadeToggle();
    //slideToggle();
    //slideUp();
    //slideDown();
});

$(document).keypress(function (event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
    $("h1").css("color", "grey");
});