$("#loginButton").click(function(){
  var password1=$("#pass1").val();
  var password2=$("#pass2").val();

if(password1!="" && password2!=""){

    if(password1==password2){
        alert("Successfully LogIn")
    }else{
        alert("Password wasn't Matching")
    }
    
}else{
    alert("Please Enter Your Passwords")
}


})