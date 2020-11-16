
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
    user_name= localStorage.getItem("User_Name")
    document.getElementById("user_name").innerHTML= "Welcome "+user_name+"!"
function addRoom(){
      room_name= document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"Adding Room Name"
      })
      localStorage.setItem("Room_Name", room_name);
      window.location= "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Names- "+Room_names);
row= "<div id= '"+Room_names+"' class= 'room_name' onclick= 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("Room_name", name);
            window.location= "kwitter_page.html"
      }
getData();
 function logout(){
       localStorage.removeItem("User_Name");
       localStorage.removeItem("Room_name")
       window.location= "index.html"
 }
