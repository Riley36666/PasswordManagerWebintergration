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