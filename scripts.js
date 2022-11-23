var acc = document.getElementsByClassName("accordion");

$(".accordion").on("click",function() {
	$(this).toggleClass("active");
	var $panel = $(this).next(".panel");
  $panel.slideToggle();
  
})