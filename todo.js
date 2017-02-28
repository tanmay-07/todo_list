var database = firebase.database();
console.log(database);
var dbref = database.ref().child("todos");



$(document).ready(function(){


$("#add").on("click",function(){
						$("#default").toggle();

					});


				var key1 = 10;
					

				$("input").keypress(function (event) {
						if(event.which == 13){
							var inp ="";
							inp = $(this).val();
							$(this).val("");
							//$("#list").append("<li><span class=\"content\">" + inp + "</span></li>");
							var newPostRef = dbref.push().set({
				    			// ...
				    			
				    			"name":inp,
								"comlpleted": false,
								"id": key1		

							});
				}
				});		
				var lis = document.querySelectorAll("li");
				for (var i = 0; i < lis.length; i++) {
							
							//var idd = this;
							//console.log(idd);
							$("#container").on('mouseenter', 'li', function() {
    								//do something
    								$(this).find("button").addClass("vis_rem");
							});
							$("#container").on('mouseleave', 'li', function() {
    								//do something
    								$(this).find("button").removeClass("vis_rem");
							});

								/*

						$(lis[i]).hover(function(){
							$(this).find("button").toggle(".remove");
							
						});   
							*/
				}

				$(document).on("click", '.remove', function(){
						console.log(this);
						$(this).parent().remove();
						var keyToBeDeleted = $(this).parent().get(0).id;
						var delRef = dbref.child(keyToBeDeleted);
						delRef.remove();
						console.log(keyToBeDeleted);
				});				
				


});

setTimeout( function(){


	

}, 2000);
						




	//changeClr();
/*
		$(".content").on("click", function(){
		$(this).toggleClass("strike");

		var keyToBeCompleted = $(this).parent().get(0).id;
		console.log(keyToBeCompleted);

		
		var taskref = dbref.child(keyToBeCompleted);
		taskref.once('value', function(snapshot) {

    		if( snapshot.val() === null ) {
        		/* does not exist 
    		} else {
        		console.log(snapshot.val());
        		taskref.update({"comlpleted": true});
    		}

});     


		dbref.orderByChild('comlpleted').on('value',function(snap){
			//console.log(snap.val());
		})
		
	});    */