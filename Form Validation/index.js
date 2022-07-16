$(document).ready(function(){
    $("#usernamevalidation").hide();
    $("#passwordvalidation").hide();
    $("#confirmpasswordvalidation").hide();
    let nameError = true , passwordError = true , confirmPasswordError = true ;
    $("#username").keyup(function(){
        usernameValidation();
    });
    function usernameValidation()
    {
        let userName = $("#username").val();
        console.log(userName);
        var usernameRegex = /^[a-zA-Z0-9]+$/;
        if(userName.length == 0)
        {
            $("#usernamevalidation").show();
            $("#usernamevalidation").html("Username can't be empty");
            $("#usernamevalidation").css("color","red");
        }
        else if(!usernameRegex.test(userName))
        {
            $("#usernamevalidation").show();
            $("#usernamevalidation").html("Invalid Username");
            $("#usernamevalidation").css("color","red");
            nameError = true ;
        }
        else
        {
            $("#usernamevalidation").hide();
            nameError = false;
        }
    }
    $("#password").keyup(passwordValidation);
    function passwordValidation()
    {
        let password = $("#password").val();
        console.log(password);
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})");
        if (password.length === 0) {
            $("#passwordvalidation").show();
            $("#passwordvalidation").text("Password can't be empty");
            $("#passwordvalidation").css("color","red");
            passwordError = true;
        } else if (!strongRegex.test(password)) {
            $("#passwordvalidation").show();
            $("#passwordvalidation").text("Invalid Password");
            $("#passwordvalidation").css("color","red");
            passwordError = true;
        } else {
            $("#passwordvalidation").hide();
            passwordError = false;
        }
    }
    $("#confirmpassword").keyup(confirmPasswordValidation);
    function confirmPasswordValidation()
    {
        let password = $("#password").val();
        let confirmPassword = $("#confirmpassword").val();
        if(confirmPassword.length == 0)
        {
            $("#confirmpasswordvalidation").show();
            $("#confirmpasswordvalidation").text("Confirm Password can't be empty");
            $("#confirmpasswordvalidation").css("color","red");
            confirmPasswordError = true;
        }
        else if(confirmPassword!=password)
        {
            $("#confirmpasswordvalidation").show();
            $("#confirmpasswordvalidation").text("Confirm Password And password Must Be Equal");
            $("#confirmpasswordvalidation").css("color","red");
            confirmPasswordError = true;
        }
        else
        {
            confirmPasswordError = false;
        }
    }

    $("#submitvalidation").click(()=>{
        usernameValidation();
        passwordValidation();
        confirmPasswordValidation();
        if(nameError || passwordError || confirmPasswordError)
        {
            return false;
        }
    });
});