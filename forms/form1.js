const form = document.querySelector('.signup-form');


const feedback = document.querySelector('.feedback');

const usernamePattern = /^[a-zA-Z]{6,12}$/; 

form.addEventListener('submit', e => {
    e.preventDefault();

    const username = form.username.value;

    if (usernamePattern.test(username)){
        feedback.textContent = 'Valid username';
    }else{
        feedback.textContent = 'Username must be 6 to 12 letters long letters only';
    }
});


// live feedback, red or green border
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    }else{
        form.username.setAttribute('class', 'error');
    }
});