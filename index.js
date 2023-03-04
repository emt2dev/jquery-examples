/* waits until jquery has finished loading; useful if js linked in the header instead of end of body as normal.
$(document).ready(function() {
  $("h1").css("color", "red");
})
*/

/* INSTEAD OF USING OUR JS FILE TO STYLE, LOOK BELOW AT SECTION 3 AND .big-title in our css
console.log($("h1").css("color"));
console.log($("h1").css("font-size"));
$("h1").css("color", "green");
console.log($("h1").css("color"));
console.log($("h1").css("font-size", "5rem"));
*/

// $("h1").addClass("big-title");
// $("h1").removeClass("big-title");
// $("h1").addClass("big-title margin-50"); // adds two classes
// $("h1").hasClass("margin-50");
//
// $("h1").text("Bye");
// $("button").html("<em>Don't click</em>");
// // attribute manipulation
// console.log($("img").attr("src"));
// $("a").attr("href","https://www.yahoo.com");
// $("h1").attr("class");

// $("h1").click(function() {
//   $("h1").css("color", "purple");
// });

// vanilla js
/*
for (var i=0; i<5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    document.querySelector("h1").style.color = "purple";
  })
}
*/

// jQuery Vers
// $("button").click(function() {
//   $("h1").css("color","purple");
// })

// logs all keystrokes across entire website
/*
$(document).keydown(function(event) {
  console.log(event);
});
*/
/* logs all keystrokes in the input boxes
$("input").keydown(function(event) {
  console.log(event);
});
*/
/* below changes the text of h1 with whatever is typed in the textbox
$(document).keydown(function(event) {
  $("h1").text(event.key);
}) below is eeasier way;
*/


// $("h1").on("mouseover", function() {
//   $("h1").css("color", "purple");
// });

// add button from the console
// $("h1").before("<button>New</button>") //comes before h1
// .after("<button>New</button>") //comes after h1
// .prepend() // added inside <h1>, before the text
// .append() // added inside <h1>, after the text
// $("button").remove(); removes all buttons

// $('button').on('click', function() {
//   $('h1').toggle(); // quickly disappears
// });

// $('button').on('click', function() {
//   $('h1').fadeOut(); // slowly disappears
// });
//
// $('button').on('click', function() {
//   $('h1').fadeIn(); // slowly disappears
// });
//
// $('button').on('click', function() {
//   $('h1').fadeToggle(); //
// });
//
// $('button').on('click', function() {
//   $('h1').slideUp(); // collapse
// });
//
// $('button').on('click', function() {
//   $('h1').slideDown(); // uncollapse
// });

// $('button').on('click', function() {
//   $('h1').slideToggle(); //
// });


// $('button').on('click', function() {
//   $('h1').animate({opacity: 0.5}); // css argument inside the animate, numeric values only percentages are strings ie: "20%"
// });

$('button').on('click', function() {
  $('h1').slideUp().slideDown().animate({opacity: 0.5}); // chaining
});
