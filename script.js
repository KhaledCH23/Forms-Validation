function validate() {
    if (document.myform.name.value == "") {
        alert("Please enter your name!")
        document.myform.name.focus();
        return false
    }
    if (document.myform.ad.value == "") {
        alert("Please enter your address!")
        document.myform.ad.focus();
        return false
    }
    if (document.myform.email.value == "") {
        alert("Please enter your email!")
        document.myform.email.focus();
        return false
    }
    if (document.myform.password.value == "") {
        alert("Please enter your password!")
        document.myform.password.focus();
        return false
    }
    if (document.myform.comments.value == "") {
        alert("Please enter your comments!")
        document.myform.comments.focus();
        return false
    }
    ///////////password length validation///////////
    if (document.myform.password.value.length <= 8) {
        alert("your password must be 8 charcters at least!")
        document.myform.password.focus();
        return false
    }
    ///////////////email form validation///////////////
    var emailID = document.myform.email.value;
    var at = emailID.indexOf("@");
    var dot = emailID.lastIndexOf(".");
    if (at < 1 || (dot - at < 2)) {
        alert("Please enter a valid email ID")
    }
    //////////////password form validation///////////
    var pass = document.myform.password.value;
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passw.test(pass)) {
        alert("The password must be a combination of charatacters , numbers and at least a capital letter");
        pass.focus();
        return false;
    }
}









//let firstevent = function() 
//{ alert("hello!")}
//document.getElementsByClassName("send").addEventListener("click", firstevent)
