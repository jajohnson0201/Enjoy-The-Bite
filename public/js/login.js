// add selector by ID
const loginHandler = async (event) => {

    //const email = document.querySelector();
    //const password = document.querySelector();

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
            //document.location.replace('')
        } else {
            alert(response.statusText);
        }
    }
};

const signupHandler = async (event) => {

    //const name = document.querySelector();
    //const email = document.querySelector();
    //const password = document.querySelector();

    if (name && email && password) {
        const response = await fetch('api/users', {
            method: 'POST',
            body: {
                name,
                email,
                password
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            //document.location.replace('')
        }
    }
};

// add event listeners below