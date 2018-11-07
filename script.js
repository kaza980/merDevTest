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

    xhttp.open('POST', 'https://us-central1-mercdev-academy.cloudfunctions.net/login');
    xhttp.setRequestHeader("Content-Type", "application/json");
   
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
                failSubmit(this.status, this.responseText);
            }
        }
    }
    ;

    xhttp.send(json);
}

function disableForm(){
	var elements = document.getElementById("loginForm").elements;
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled = true;
}
}

function enableForm(){
	var elements = document.getElementById("loginForm").elements;
	for (var i = 0; i < elements.length; i++) {
		elements[i].disabled = false;
}
}

function successSubmit() {
    document.getElementById("errorBlock").style.display = "none";
	document.getElementById("loginForm").style.display = "none";
	document.getElementById("logoutForm").style.display = "block";
}

function failSubmit(code, text) {
	document.getElementById("errorMessage").innerHTML = "Error " + code + ": "+text;
    document.getElementById("errorBlock").style.display = "block";
	enableForm();
}

function sendLogoutForm() {
	document.getElementById("logoutForm").style.display = "none";
	document.getElementById("loginForm").style.display = "block";
}
