var firebaseConfig = {
      apiKey: "AIzaSyCJ19d3aAQVKQJGDctBTNyGCGeqCLqrXNU",
      authDomain: "kwitter-6e649.firebaseapp.com",
      databaseURL: "https://kwitter-6e649-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e649",
      storageBucket: "kwitter-6e649.appspot.com",
      messagingSenderId: "408127120333",
      appId: "1:408127120333:web:60ffb59ca0f36e0e825a84"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
