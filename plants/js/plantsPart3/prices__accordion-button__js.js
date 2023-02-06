"use strict";

window.onload = function () {

  pricesOptionsButtonHandler();

}

const pricesOptionsButtonHandler = () => {
  const prices__optionsContainer = document.querySelector('.prices__options-container');
  prices__optionsContainer.addEventListener('click', (event) => {

    let clickedElem = event.target;

    if ( clickedElem.closest('.prices__accordion-button') ) {

      removeSelectionFromButton();

      addSelectionToButton(clickedElem);

      // removeSelectionToButton(clickedElem);
      if ( clickedElem.classList.contains( 'prices__accordion-button_active' ) ) {
      }
    }
  })
  };

const removeSelectionFromButton = () => {
  const prices__AllButtonsOfAccordion = document.querySelectorAll('.prices__accordion-button');
  const prices__AllVectorsOfAccordionButtons = document.querySelectorAll('.prices__accordion-button_vector');
  const prices__allDescriptionContainerOfAccordion = document.querySelectorAll('.prices__accordion-description-container');
  
  prices__AllButtonsOfAccordion.forEach((button) => {
    button.classList.remove('prices__accordion-button_active');
  })
  
  prices__AllVectorsOfAccordionButtons.forEach((button) => {
    button.classList.remove('prices__accordion-button_vector-active');
  })

  prices__allDescriptionContainerOfAccordion.forEach((item) => {
    item.classList.add('prices__elem_hidden');
  })
}


const addSelectionToButton = (clickedElem) => {
  const prices__AllButtonsOfAccordion = document.querySelectorAll('.prices__accordion-button');

  const prices__accordionButton = document.querySelector('.prices__accordion-button');
  const prices__accordionButton_active = document.querySelector('.prices__accordion-button_active');
  const prices__accordionButton_vector = document.querySelector('.prices__accordion-button_vector');
  const prices__accordionDescriptionContainer = document.querySelector('.prices__accordion-description-container');

  const buttonDescriptionSync = {
    'prices__accordion-button1' : 'button-description1',
    'prices__accordion-button2' : 'button-description2',
    'prices__accordion-button3' : 'button-description3'
  };

  const buttonArrowsSync = {
    'prices__accordion-button1' : 'button-vector1',
    'prices__accordion-button2' : 'button-vector2',
    'prices__accordion-button3' : 'button-vector3'
  };

  if ( clickedElem.classList != 'prices__accordion-button' ) {
    return;
  }

  clickedElem.classList.add('prices__accordion-button_active');

  linkDescriptionWithButton(clickedElem, buttonDescriptionSync);

  linkArrowsWithButton(clickedElem, buttonArrowsSync);

}

//I created this code for 4 ours!!! But it hard to read, so it need to be refactored((((((((( ::crying::
const linkDescriptionWithButton = (clickedElem, buttonDescriptionSync) => {
  Object.keys(buttonDescriptionSync).forEach( (elem) => {
    if ( elem === clickedElem.dataset.buttonId ) {
      let elemWatch = document.querySelectorAll('.prices__accordion-description-container');
      elemWatch.forEach((item) => {
        if (item.dataset.button__descriptionId === buttonDescriptionSync[elem]) {
          return item.classList.remove('prices__elem_hidden');
        }
      })
    }
  })
}

const linkArrowsWithButton = (clickedElem, buttonArrowsSync) => {
  Object.keys(buttonArrowsSync).forEach( (elem) => {
    if ( elem === clickedElem.dataset.buttonId ) {
      let elemWatch = document.querySelectorAll('.prices__accordion-button_vector');
      elemWatch.forEach((item) => {
        if (item.dataset.button__vectorId === buttonArrowsSync[elem]) {
          return item.classList.add('prices__accordion-button_vector-active');
        }
      })
    }
  })
}
// TODO   it doesn't work delete after few days if useless
// const linkDescriptionWithButton = (clickedElem, buttonDescriptionSync) => {
//   let clickedElementID = clickedElem.dataset.buttonId;
//   if ( Object.keys(buttonDescriptionSync).includes(clickedElementID) ) {
//     let elemWatch = document.querySelectorAll('.prices__accordion-description-container');
//     console.log(`elemWatch ${elemWatch}`);
//     if ( elemWatch.includes(buttonDescriptionSync[clickedElementID]) ) {
//       elemWatch.find((item) => item === clickedElementID).classList.remove('prices__elem_hidden');
//     }
//   }

// }

const removeSelectionToButton = (clickedElem) => {
  const prices__optionsContainer = document.querySelector('.prices__options-container');
  
  const prices__accordionButton = document.querySelector('.prices__accordion-button');
  const prices__accordionButton_active = document.querySelector('.prices__accordion-button_active');
  const prices__accordionButton_vector = document.querySelector('.prices__accordion-button_vector');
  const prices__accordionDescriptionContainer = document.querySelector('.prices__accordion-description-container');

  const buttonDescriptionSync = {
    'prices__accordion-button1' : 'button-description1',
    'prices__accordion-button2' : 'button-description2',
    'prices__accordion-button3' : 'button-description3'
  };

  const buttonArrowsSync = {
    'prices__accordion-button1' : 'button-vector1',
    'prices__accordion-button2' : 'button-vector2',
    'prices__accordion-button3' : 'button-vector3'
  };
  
  clickedElem.classList.toggle('prices__accordion-button_active');

  deleteLinkDescriptionWithButton(clickedElem, buttonDescriptionSync);

  deleteLinkArrowsWithButton(clickedElem, buttonArrowsSync);
}

//I created this code for 4 ours!!! But it hard to read, so it need to be refactored((((((((( ::crying::
const deleteLinkDescriptionWithButton = (clickedElem, buttonDescriptionSync) => {
  Object.keys(buttonDescriptionSync).forEach( (elem) => {
    if ( elem === clickedElem.dataset.buttonId ) {
      let elemWatch = document.querySelectorAll('.prices__accordion-description-container');
      elemWatch.forEach((item) => {
        if (item.dataset.button__descriptionId === buttonDescriptionSync[elem]) {
          return item.classList.toggle('prices__elem_hidden');
        }
      })
    }
  })
}

const deleteLinkArrowsWithButton = (clickedElem, buttonArrowsSync) => {
  Object.keys(buttonArrowsSync).forEach( (elem) => {
    if ( elem === clickedElem.dataset.buttonId ) {
      let elemWatch = document.querySelectorAll('.prices__accordion-button_vector');
      elemWatch.forEach((item) => {
        if (item.dataset.button__vectorId === buttonArrowsSync[elem]) {
          return item.classList.toggle('prices__accordion-button_vector-active');
        }
      })
    }
  })
}