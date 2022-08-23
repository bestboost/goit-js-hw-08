import throttle from 'lodash.throttle';

const STORAGE_KAY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const inputData = {}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onEmailInput, 500));
  
populateData();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
}

function onEmailInput(evt) {

    inputData[evt.target.name] = evt.target.value;
   
   localStorage.setItem(STORAGE_KAY, JSON.stringify(inputData));

}



function populateData() {
  
    const savedInputData = localStorage.getItem(STORAGE_KAY);
    const parsedInputData = JSON.parse(savedInputData);
   

     
    if(parsedInputData) {
 
        email.value = parsedInputData.email;
         message.value = parsedInputData.message;
    }
}
   








// import throttle from 'lodash.throttle';

// const STORAGE_KAY = 'feedback-form-state';

// const refs = {
// form: document.querySelector('.feedback-form'),
// email: document.querySelector('.feedback-form input'),
// textarea: document.querySelector('.feedback-form textarea'),
// };

// refs.form.addEventListener('submit', onFormSubmit);
// refs.email.addEventListener('input', throttle(onEmailInput, 500));
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));

// populateData();

// function onFormSubmit(evt) {
//     evt.preventDefault();

//     evt.currentTarget.reset();
//     localStorage.removeItem(STORAGE_KAY);
//     console.log('send form')
// }

// function onEmailInput(evt) {
//     const emailInput = evt.target.value;

//    localStorage.setItem(STORAGE_KAY, emailInput);

// }

// function onTextareaInput(evt) {
//     const message = evt.target.value;
    
//    localStorage.setItem(STORAGE_KAY, message);
// }

// function populateData() {
//     const savedEmail = localStorage.getItem(STORAGE_KAY);
//     const savedMessage = localStorage.getItem(STORAGE_KAY);
   
//     if(savedEmail) {
//         console.log(savedEmail);
//         refs.email.value = savedEmail;
//     }

//     if(savedMessage) {
//         console.log(savedMessage);
//         refs.textarea.value = savedMessage;
//     }

   

// }