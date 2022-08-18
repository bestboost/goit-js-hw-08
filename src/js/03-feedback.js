// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь 
// что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых
//  сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".

import throttle from 'lodash.throttle';

const STORAGE_KAY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

let inputData = {}

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onEmailInput, 500));
// message.addEventListener('input', throttle(onEmailInput, 500));
  
populateData();

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);
    console.log('send form')
}

function onEmailInput(evt) {
    let inputData = {
        email,
        message,
    }
    
   localStorage.setItem(STORAGE_KAY, JSON.stringify(inputData));

}

// function onTextareaInput(evt) {
//     const message = evt.target.value;
    
// //    localStorage.setItem(STORAGE_KAY, message);
// }

function populateData() {
  
    const savedInputData = localStorage.getItem(STORAGE_KAY);
    const parsedInputData = JSON.parse(savedInputData);
    console.log(parsedInputData)

   
    // if(savedEmail) {
    //     console.log(savedEmail);
    //     email.value = savedEmail;
    // }

    // if(savedMessage) {
    //     console.log(savedMessage);
    //     message.value = savedMessage;
    // }

   

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
//     const email = evt.target.value;

// //    localStorage.setItem(STORAGE_KAY, email);

// }

// function onTextareaInput(evt) {
//     const message = evt.target.value;
    
// //    localStorage.setItem(STORAGE_KAY, message);
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