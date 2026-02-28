const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username_input');
const passwordInput = document.getElementById('password_input');
function login() {
    window.location.href = "/password";
}


function checkPass(username, password) {
    fetch('api/login', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    })
    .then(async res => {
        const data = await res.json();
        if (!res.ok) {
            console.log(data.message || "Username or password is wrong!");
            return;
        }
        if (data.success === true) {
            login();
        } else {
            console.log("Failed")
        }
    })
    .catch(() => {
        alert("Server error. Please try again.");
    });
}





form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = usernameInput.value.trim();
    const password = passwordInput.value;

 
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    checkPass(username, password)

});