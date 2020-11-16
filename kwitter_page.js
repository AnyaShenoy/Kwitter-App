//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyD0NPBzNciXvEIGpmUY1j1VFiNWWYjEWAc",
    authDomain: "anya-kwitter-3ca6d.firebaseapp.com",
    databaseURL: "https://anya-kwitter-3ca6d.firebaseio.com",
    projectId: "anya-kwitter-3ca6d",
    storageBucket: "anya-kwitter-3ca6d.appspot.com",
    messagingSenderId: "411263654814",
    appId: "1:411263654814:web:a1a221606c9602a93c148f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
	user_name = localStorage.getItem("User_name");
	room_name = localStorage.getItem("Room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        console.log(firebase_message_id);
        console.log(message_data);
        name= message_data['name'];
        likes= message_data['like'];
        message= message_data['message'];
        name_with_tag= "<h4>"+name+"<img src='tick.png' class='user_tick'> </h4>"
        message_with_tag= "<h4 class='message_h4'>"+message+"</h4>"
        like_button= "<button class='btn  btn-warning' id= "+firebase_message_id+ " value= "+likes+" onclick= update_likes(this.id)>";
        span_with_tag= "<span class= glyphicon glyphcon-thumbs-up>Like:"+likes+"</span></button>" 
        row= name_with_tag+message_with_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML+= row; 
//End code
      } });  }); }
getData();

function update_likes(message_id){
    console.log("Clicked on like button"+message_id)
    button_id= message_id;
    like= document.getElementById(button_id).value;
    updated_like= Number(like)+1;
    firebase.database().ref(room_name).child(message_id).update({
        like:updated_like
    })
}