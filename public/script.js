//Handling the submit button
function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name').value;
    const role = document.getElementById('role').value;
    const spaceType = document.getElementById('spaceType').value;
    const capacity = document.getElementById('capacity').value;
    const bookingStatus = document.getElementById('bookingStatus').value;
    const pricing = document.getElementById('pricing').value;
    const data = { email, password, name, role, spaceType, capacity, bookingStatus, pricing };
    fetch('http://localhost:3000/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}
//validating user logic
function validateUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email address');
        return false;
    }
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return false;
    }
    return true;
}

//login logic
function login() {
    if (!validateUser()) {
        return;
    }
    redirect();
}

//logout logic
function logout() {
    window.location.href = '3.1LoginPage.html';
}

//redirecting on successful login
function redirect() {
    window.location.href = '4.1SearchPage(Global Login).html';
}   


