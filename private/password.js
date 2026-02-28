fetch("/api/passwords")
  .then(res => res.json())
  .then(data => {
    const passwordsContainer = document.createElement("div");

    data.forEach(pw => {
    const pwEntry = document.createElement("p");

    pwEntry.innerHTML = `
        <span>Website:</span> ${pw.Website} 
        <span>Password:</span> ${pw.Password}
    `;

    passwordsContainer.appendChild(pwEntry);
    });

    const element = document.getElementById("div1");
    element.appendChild(passwordsContainer);
  });
function logout() {
  fetch("/api/logout", { method: "POST" })
    .then(res => {
      if (!res.ok) throw new Error();
      return res.json();
    })
    .then(data => {
      if (data.success) {
        window.location.href = "/";
      }
    })
    .catch(() => {
      alert("Server error. Please try again.");
    });
}

const button = document.getElementById('button');
button.addEventListener('click', logout)