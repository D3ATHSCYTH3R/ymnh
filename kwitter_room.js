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


lc=localStorage.getItem("un");
    document.getElementById("name").innerHTML="Welcome "+lc+"!";
    function addRoom(){
      room_name=document.getElementById("location").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_names = childKey;
      //Start code
console.log("room names - "+room_names);
row="<div class='room_name' id="+room_names+" onclick='redirectToRoomName(this.id)' #>+room_names+</div><hr>";
document.getElementById("output").innerHTML  += row;


      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("un");
      localStorage.removeItem("room_name");
      window.location="index.html";
      }