const loginHandler = async (event) => {

    const email = document.querySelector();
    const password = document.querySelector();

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
}