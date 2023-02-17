// add selector by ID
const loginHandler = async (event) => {
    event.preventDefault();
    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-field").value.trim();

    if (email && password) {
      const response = await fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  };
  
  const signupHandler = async (event) => {
    event.preventDefault();
  
    const firstName = document.querySelector("#first-name").value.trim();
    const lastName = document.querySelector("#last-name").value.trim();
  
    const userName = document.querySelector("#username-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
  
    if (userName && email && password) {
      const response = await fetch("api/users", {
        method: "POST",
        body: JSON.stringify({
          userName,
          email,
          firstName,
          lastName,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("made it before doc.location");
      if (response.ok) {
        document.location.replace("/");
      }
    }
  
  };
  
  // add event listeners below
  window.onload = function () {
    if (window.location.pathname === "/login") {
      document
        .querySelector(".signin-form")
        .addEventListener("submit", loginHandler);
    }
  
    if (window.location.pathname === "/signup") {
      document
        .querySelector("#signup-form")
        .addEventListener("submit", signupHandler);
    }
  };