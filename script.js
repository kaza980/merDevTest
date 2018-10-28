function sendLoginForm() {

    var xhttp = false;
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else {
        if (window.ActiveXObject) {
            try {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    xhttp.open('POST', 'http://us-central1-mercdev-academy.cloudfunctions.net/login');
    xhttp.setRequestHeader("Content-type", "application/json");
   
    var json = JSON.stringify({
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    });

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
            alert(this.getAllResponseHeaders() + "\n" + this.status + "\n" + this.responseText);
            if (this.status == 200) {
                successSubmit();
            } else {
                failSubmit();
            }
        }
    }
    ;

    xhttp.send(json);
}

function successSubmit() {
    document.getElementById("errorBlock").style.display = "none";
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("logoutForm").style.display = "block";
}

function failSubmit() {
    document.getElementById("errorBlock").style.display = "block";
}

function sendLogoutForm() {
	document.getElementById("logoutForm").style.display = "none";
	document.getElementById("loginForm").style.display = "block";
}
