function validateRegisterForm() {
    errorMsg = "";

    // Username
    if (!validateUsername()) {
        errorMsg += "Please enter a username\n";
    }

    // Email
    if (!validateEmail()) {
        errorMsg += "Please enter a valid email\n";
    }

    // Password 1
    if (!validatePassword1()) {
        errorMsg += "Please enter a password\n";
    }
    // Password 2
    if (!validatePassword2()) {
        errorMsg += "Please confirm your password\n";
    }
    // Password match
    if (!matchPasswords()) {
        errorMsg += "Passwords do not match\n";
    }

    // Gender
    if (!validateGender()) {
        errorMsg += "Please select a gender\n";
    }

    // Favorite Ice Cream
    if (!validateIceCream()) {
        errorMsg += "Please select your favorite ice cream\n";
    }

    if (errorMsg != "") {
        alert(errorMsg);
        return false;
    }
}

// Validate username
function validateUsername() {
    username = $("#username").val();

    if (username != ""){
        $("#username").removeClass("invalid");
        $("#username").addClass("valid");
        return true;
    }

    $("#username").removeClass("valid");
    $("#username").addClass("invalid");
    return false;
}

// Validate email
function validateEmail() {
    email = $("#email").val();

    if (email != "" && email.includes("@") && email.includes(".")){
        $("#email").removeClass("invalid");
        $("#email").addClass("valid");
        return true;
    }

    $("#email").removeClass("valid");
    $("#email").addClass("invalid");
    return false;
}

// Validate password 1
function validatePassword1() {
    password1 = $("#password1").val();

    if (password1 != "" && password1.length >= 9) {
        $("#password1").removeClass("invalid");
        $("#password1").addClass("valid");
        return true;
    }

    $("#password1").removeClass("valid");
    $("#password1").addClass("invalid");
    return false;
}

// Validate password 2
function validatePassword2() {
    password2 = $("#password2").val();

    if (password2 != "") {
        $("#password2").removeClass("invalid");
        $("#password2").addClass("valid");
        matchPasswords();
        return true;
    }

    $("#password2").removeClass("valid");
    $("#password2").addClass("invalid");
    return false;
}

// Match passwords
function matchPasswords() {
    password1 = $("#password1").val();
    password2 = $("#password2").val();
    if (password1 == password2 && password1 != "" && password2 != "") {
        $("#password2").removeClass("invalid");
        $("#password2").addClass("valid");
        return true;
    }

    $("#password2").removeClass("valid");
    $("#password2").addClass("invalid");
    return false;
}

// Validate gender
function validateGender() {
    gender = $("input[name=gender]:checked").val();

    if (gender != null) {
        return true;
    }

    return false;
}

// Validate favorite Ice Cream
function validateIceCream() {
    iceCream = $("#favoriteIceCream").val();

    if (iceCream != null) {
        return true;
    }

    return false;
}

// Initialise event listeners
function init() {
    // Add event listener for form submit to run validateRegisterForm function
    $("#registerForm").submit(validateRegisterForm);

    // Add event listener for all inputs on blur to run relevant validation function
    $("#username").blur(validateUsername);
    $("#email").blur(validateEmail);
    $("#password1").blur(validatePassword1);
    $("#password2").blur(validatePassword2);
    $("#favoriteIceCream").blur(validateIceCream);
}

init()