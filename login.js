function validate(){
    var confirmPassword = document.getElementById("confirmPassword").value;
    var password = document.getElementById("password").value;
    if(password==confirmPassword){
    	alert("Login Successfully");
        return false;
    }
    else{
    	alert("Login Failed");
    }
}