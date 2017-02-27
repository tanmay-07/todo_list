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
var dbref = database.ref();

dbref.on("value",function(e){
	console.log(e.val());
	var test = e.val();
	console.log(test[0]);
	for (var i = 0; i < test.length; i++) {
		//test[i]
		$("#list").append("<li><span class=\"content\">" + test[i]["name"] + "</span></li>");
	}
	


});