  
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
 import { getDatabase , ref ,set , get , child } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAOwZeZL-YOzEKyNjY7pCkn0B3_o-ytCTM",
   authDomain: "puertasvisas-3959b.firebaseapp.com",
   projectId: "puertasvisas-3959b",
   storageBucket: "puertasvisas-3959b.appspot.com",
   messagingSenderId: "558161524886",
   appId: "1:558161524886:web:6399302ebcfc1b963b6ab7",
   measurementId: "G-T450DM027J"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
  const db = getDatabase(app)

  document.getElementById('submitemail').addEventListener('click', function(e){
    e.preventDefault(),

    set(ref(db, 'email/' + document.getElementById("email").value),{
        email:document.getElementById("email").value
    });
    alert("Login Successfull !")
  })
