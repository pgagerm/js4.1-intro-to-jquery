//JS4.1: Intro to jQuery



// Part I

// $(document).on('ready', function() {
//   $("button").click(function() {
//   	console.log("Printed message on click");
//   });
// });



// $(document).on('ready', function() {
//   $("button").click(function() {
//   	$("body").append("Appended text");
//   });
// });



// $(document).on('ready', function() {
//   $(".button1").click(function() {
//   	$("body").append("Appended text");
//   });
// $(".button2").click(function() {
//   	$("body").append("<h1>More appended text</h1>");
//   });
// });



// $(document).on('ready', function() {
// 	$(".button1").click(function() {
//   		$("body").append("Appended text");
//   	});
// $(".button2").click(function() {
// 	$("body").append("<h1>More appended text</h1>");
//    	});
// $(".button3").click(function() {
// 	$("body").append("<ul>header list</ul>", "<li>first item</li>",
//   	"<li>second item</li>", "<li>third item</li>");
// 	});
// });



// Part II

// $(document).on('ready', function() {
//   	$('.pink').mouseover(function() {
//   		$(this).css('color', 'peachpuff');
//   	});
// });



// $(document).on('ready', function() {
//   	$('.pink').mouseover(function() {
//   		$(this).css('color', 'peachpuff');
//   	});
//   	$('h1').mouseover(function() {
//   		$(this).append("!");
//   	});
// });



$(document).on('ready', function() {
  	$('a').on("click", function() {
  		var answer = confirm("Are you sure you want to navigate to another window?");
  			if (answer === false) {
  				event.preventdefault();
  				return false;
  			}
  	});
});








