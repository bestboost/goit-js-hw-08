import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[name="email"]');
const message = document.querySelector('[name="message"]');
const submitBtn = document.querySelector('button');
submitBtn.disabled = true;

let inputData = {email:'',  message:''} || {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onInput, 500));
  
populateData();

function onFormSubmit(evt) {

    evt.preventDefault(); 
    submitBtn.disabled = true;
 
    console.log(inputData) 
    
    localStorage.removeItem(STORAGE_KEY); 
    evt.currentTarget.reset();
    inputData = {};
}

function onInput(evt) {
   
   inputData[evt.target.name] = evt.target.value

   localStorage.setItem(STORAGE_KEY, JSON.stringify(inputData));

   if (email.value && message.value) {
    submitBtn.disabled = false;
};

}

function populateData() {
  
    const parsedInputData = JSON.parse(localStorage.getItem(STORAGE_KEY));

     if(parsedInputData) { 
        for (const key in parsedInputData){
  
        if(parsedInputData.hasOwnProperty(key)) {
          
         email.value = parsedInputData.email ||  '';
         message.value = parsedInputData.message ||  '';
       
        }
    } 

    if (email.value && message.value) {
        submitBtn.disabled = false;
    };
 }  
     
};