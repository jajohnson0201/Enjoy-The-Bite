// add selector by ID
const loginHandler = async (event) => {

    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
 
        if (response.ok){
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
};

const signupHandler = async (event) => {

    const userName = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (userName && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: JSON.stringify({
                userName,
                email,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            document.location.replace('/profile');
        }
    }
};

// add event listeners below
document.querySelector('.login-form').addEventListener('submit', loginHandler);

document.querySelector('.signup-form').addEventListener('submit', signupHandler);