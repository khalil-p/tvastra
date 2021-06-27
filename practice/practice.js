// for (var i=0; i<5; i++){
//     document.querySelectorAll("button")[i].addEventListener("click", function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// }

// $("button").click(function(){
//     $("h1").css("color", "purple");
// });

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
});

$("h1").before("<button>click</button>")