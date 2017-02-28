 var config = {
    // ...
 // Initialize Firebase
    apiKey: "AIzaSyBVqFvMMu9iq-UZWmLK3xXvHXPv6NPnHZE",
    authDomain: "todo-list-e3606.firebaseapp.com",
    databaseURL: "https://todo-list-e3606.firebaseio.com",
    storageBucket: "todo-list-e3606.appspot.com",
    messagingSenderId: "874474661809"
  };
  firebase.initializeApp(config);


// Get a reference to the database service
var database = firebase.database();
console.log(database);
var dbref = database.ref().child("todos");

	/*	dbref.on("value",function(e){
			console.log(e.val());
			var test = e.val();
			
			

		});
    */
   
function loadData(){
	dbref.on("child_added", function(snap){
		console.log(snap.val());
		var tst = snap.val();
		var li  = document.createElement('li');
		li.innerHTML = "<span class=\"content\"> "+ tst["name"] +"</span>  <button class=\"remove\">X</button>";
		//li.className = "content";
		li.id = snap.key;
		//console.log(tst["task1"]);
		$("#list").append(li);	
		//changeClr();

	});	
	
}

loadData();

dbref.on("child_changed", function(snap){
	//console.log(snap);
	const liChanged = document.getElementById(snap.key);
	liChanged.innerText = snap.val()["name"];

});

dbref.on("child_removed", function(snap){
	//console.log(snap);
	const liToRemove = document.getElementById(snap.key);
	liToRemove.remove();

});