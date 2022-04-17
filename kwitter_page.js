//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDbAgkXo3MVEgrIzXOLfiIsD7bq0RpFpCI",
      authDomain: "kwikker-d19ce.firebaseapp.com",
      databaseURL: "https://kwikker-d19ce-default-rtdb.firebaseio.com",
      projectId: "kwikker-d19ce",
      storageBucket: "kwikker-d19ce.appspot.com",
      messagingSenderId: "756923099657",
      appId: "1:756923099657:web:b154dc76bdc279991ee6d8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    un=localStorage.getItem("un");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
nt="<h4>"+name+"<img class='image_tick' src='tick.png'></h4>";
mt="<h4 class='message_h4'>"+message+"</h4>";
lb="<button class='btn btn-success' id="+firebase_message_id+"value="+like+" onclick='updateLike(this.id)'>";
st="<span class='glyphicon glyphicon-thumbs-up'>Like: "+like+"</span></button><hr>";
row=nt+mt+lb+st;
document.getElementById("output").innerHTML +=row;
//End code
      } });  }); }
getData();

function logout(){
localStorage.removeItem("un");
localStorage.removeItem("room_name");
window.location="index.html";
}

function send(){
msg=document.getElementById("msg").value;
firebase.database().ref("/").push({
name:un,
message: msg,
like: 0
});
document.getElementById("msg").value="";
}

function updateLike(message_id){
      console.log("clicked on the like button- "+message_id);
      button_id=message_id;
      likes=document.getElementById("button_id").value;
      updatedLikes=Number(likes)+1;
      console.log(updatedLikes);

firebase.database().ref(room_name).child(message_id).update({
like:updatedLikes
});


}