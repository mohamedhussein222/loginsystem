var userName = document.querySelector(".input1") ; 
var email = document.querySelector(".input2") ;
var password = document.getElementById("demo");

var emailLog = document.querySelector(".emailLog");
var passwordLog = document.querySelector(".passwordLog");

 var allData = [];
 if(localStorage.getItem("allData")!=null){
   allData=JSON.parse(localStorage.getItem("allData"));
 }
 window.document.querySelector(".add").addEventListener("click" , function(){
   var user = {
      userName : userName.value ,
      email : email.value , 
      password : password.value ,  
   }
   
   allData.push(user);

   if(userName.value=='' ||email.value=='' ||password.value=='' ){
     window.document.querySelector(".warn").classList.remove("d-none");
   }
   else{
      window.document.querySelector(".success").classList.remove("d-none");
      
   } 

   localStorage.setItem( "allData" ,  JSON.stringify(allData) ) ; 
 clear();
})

 
function loopinput(){
   for(var i = 0 ; i<allData.length ; i++){
      if(emailLog.value==allData[i].email && passwordLog.value==allData[i].password){
         window.location.href = "./index.html";
 window.document.getElementById("#headuser").innerHTML="welcome" + allData[i].userName;
       
      }
      else{
         alert("not found");
      }
    
   
   }
 }

 // log in 
window.document.querySelector(".btnlog").addEventListener("click" , function(){
   loopinput();
})





function clear(){
   userName.value = "";
   email.value = "";
      password.value= "";  
}
// log out
window.document.querySelector(".btNlog").addEventListener("click" ,function(){
  window.location.href = "./index.html";

})

 
 
 
