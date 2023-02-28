"use strict";

window.onload = function () {

  //time
  timeAndDateFunc();

}

//=================================================================================================================
//    Adding eventlisteners start
//=================================================================================================================
const userNameToLocalStorageHandler = () => {
  const greetingUserNameElement = document.querySelector('.name');

  const setUserNameToLocalStorage = () => {
    localStorage.setItem('userName', greetingUserNameElement.value);
  }
  
  const getUserNameToLocalStorage = () => {
    if (localStorage.getItem('userName')) {
      greetingUserNameElement.value = localStorage.getItem('userName');
    }
  }

  window.addEventListener('beforeunload', setUserNameToLocalStorage);

  window.addEventListener('load', getUserNameToLocalStorage);
}

userNameToLocalStorageHandler();

//=================================================================================================================
//    Adding eventlisteners end
//=================================================================================================================

//=================================================================================================================
//    Time js functions start
//=================================================================================================================

const timeAndDateFunc = () => {
  const timeElement = document.querySelector('.time');

  const dateElement = document.querySelector('.date');
  
  const greetingTextElement = document.querySelector('.greeting');
  
  const showDate = () => {
    const date = new Date();

    const options = { weekday: 'long', month: 'long', day: 'numeric'};

    dateElement.textContent =  date.toLocaleDateString('en-GB', options);
  }
  
  const showTime = () => {
    const date = new Date();
  
    timeElement.textContent =  date.toLocaleTimeString();

    //real time greeting function execution
    setGreetingIntoElement(greetingTextElement, getGreetingDependOnTime, date);

    showDate();
    
    showTime.timerID = setTimeout(showTime, 1000);
  }

  showTime();
}
//=================================================================================================================
//    Time js functions end
//=================================================================================================================

//=================================================================================================================
//    Greeting js functions start
//=================================================================================================================

const getGreetingDependOnTime = (date) => {
  let currentHour = date.getHours();

  switch (true) {
    case (currentHour > 0 && currentHour < 6):
      return `Good night,`;
    case (currentHour >= 6 && currentHour < 12):
      return `Good morning,`;
    case (currentHour >= 12 && currentHour < 18):
      return `Good afternoon,`;
    case (currentHour >= 18 && currentHour < 24):
      return `Good evening,`;
  }
}

const setGreetingIntoElement = (greetingTextElement, getGreetingDependOnTime, date) => {
  greetingTextElement.textContent = getGreetingDependOnTime(date);
}

//=================================================================================================================
//    Greeting js functions end
//=================================================================================================================