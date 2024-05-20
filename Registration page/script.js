function validateForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('loginPassword').value;
    var rePassword = document.getElementById('RePassword').value;

    var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (username.length < 6) {
        alert("Username must be at least 6 characters long");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long");
        return false;
    }

    if (password !== rePassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}



function validatedetails() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('loginPassword').value;

    var emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
    var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one number, and be at least 8 characters long");
        return false;
    }

    return true;
}
