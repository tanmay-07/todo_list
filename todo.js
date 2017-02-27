$(document).ready(function(){
	
	changeClr();
		$(".content").on("click", function(){
		$(this).toggleClass("strike");
	});
	$("#add").click(function(){
		$("#default").toggle();

	});
	$("input").keypress(function (event) {
		if(event.which == 13){
			var inp ="";
			inp = $(this).val();
			$(this).val("");
			$("#list").append("<li><span class=\"content\">" + inp + "</span></li>");

			changeClr();
		}
		
	})



});
function changeClr(argument) {
	// body...
	$("li").each(function(){
		console.log("hii");
		var index = $(this).index();
		if(index%2==0){
			$(this).css("background", "#E3E3E3");
		}
		$(this).hover(function(){
			console.log("hovered");
			$("#remove").toggle();
		});
	});

}