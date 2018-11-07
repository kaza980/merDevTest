async function sendLoginForm(){
    try {
        const rawResponse = await fetch('https://us-central1-mercdev-academy.cloudfunctions.net/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: document.getElementById("email").value,
                password: document.getElementById("password").value
            })
        });
        const content = await rawResponse.json();
        if(!rawResponse.ok)
            failSubmit(content.error)
        else
            successSubmit(content)
    }
    catch (e) {
        failSubmit(e);
    }
}

function disableForm() {
    var elements = document.getElementById("loginForm").elements;
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = true;
    }
}

function enableForm() {
    var elements = document.getElementById("loginForm").elements;
    for (var i = 0; i < elements.length; i++) {
        elements[i].disabled = false;
    }
}

function successSubmit(answer) {
    document.getElementById("nickname").innerHTML = answer.name;
    document.getElementById("avatar").src = answer.photoUrl;
    document.getElementById("errorBlock").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("logoutForm").style.display = "block";
}

function failSubmit(text) {
    document.getElementById("errorMessage").innerHTML = "Error: " + text;
    document.getElementById("errorBlock").style.display = "block";
    enableForm();
}

function sendLogoutForm() {
    document.getElementById("logoutForm").style.display = "none";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("loginForm").style.display = "block";
}
