import throttle from 'lodash.throttle';

const STORAGE_KAY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');

const inputData = {  email: '', 
message: '',};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));
  
populateData();

function onFormSubmit(evt) {
    evt.preventDefault(); 

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KAY);

    console.log(inputData);
}

function onInput(evt) {
  
   inputData[evt.target.name] = evt.target.value
   
   localStorage.setItem(STORAGE_KAY, JSON.stringify(inputData));

}

function populateData() {
  
    const savedInputData = localStorage.getItem(STORAGE_KAY);
    const parsedInputData = JSON.parse(savedInputData);
   
     if(parsedInputData) {
        email.value = parsedInputData.email; 
         message.value = parsedInputData.message;
      
    } 
        email.value = ''; 
        message.value = '';

};

