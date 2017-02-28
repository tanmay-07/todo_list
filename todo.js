

var database = firebase.database(); //firebase database reference
console.log(database);
var dbref = database.ref().child("todos"); //reference to root node



$(document).ready(function(){


$("#add").on("click",function(){
						$("#default").toggle();

					});


				var key1 = 10;
					
				//function to handle input from user and ssaving it into database
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

				//function to toggle delete button on hovering iver an item
				var lis = document.querySelectorAll("li");
				for (var i = 0; i < lis.length; i++) {
							
							//var idd = this;
							//console.log(idd);

							if(i%2==0)
								$(this).css("background", "#E3E3E3");

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
							$(this).find("button").toggle(".remove");  ///this wont work when more elements are added
							
						});   
							*/
				}


				//function for remove button. Deletes from the list as well as the database
				$(document).on("click", '.remove', function(){
						console.log(this);
						$(this).parent().remove();
						var keyToBeDeleted = $(this).parent().get(0).id;
						var delRef = dbref.child(keyToBeDeleted);
						delRef.remove();
						console.log(keyToBeDeleted);
				});				
				


});
			
