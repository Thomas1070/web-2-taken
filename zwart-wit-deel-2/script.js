const selectVoorAchtergrondKleur = document.querySelector('#achtergrond');
const selectVoorTekstKleur = document.querySelector('#tekstkleur');

  const html = document.querySelector('html');
  document.body.style.padding = '10px';

  const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function updateBackgroundAndTextColor(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  console.log('huidige waarde van de select / dropdown:', select.value);
  if (select.value === 'black') {
    updateBackgroundAndTextColor('black', 'white');
  }
  else if (select.value === 'white') {
    updateBackgroundAndTextColor('white', 'black');
  }
  if (select.value === 'Red'){
    updateBackgroundAndTextColor('Red', 'White');
  }
  else if (select.value === 'Blue') {
    updateBackgroundAndTextColor('Blue', 'White');
  }
}

  /**
   * deze functie gaat de tekstkleur aanpassen
   * @param {*} textColor 
   */
  function updateTextColor(textColor) {
    html.style.color = textColor;
  }

  /**
   * deze functie gaat de achtergrondkleur aanpassen
   * @param {*} achtergrondKleur 
   */
  function updateBackgroundColor(achtergrondKleur) {
    html.style.backgroundColor = achtergrondKleur;
  }

// je moet opnieuw linken aan de juiste select (dus selectVoorAchtergrondKleur of selectVoorTekstKleur)
// door een functie gelijk te stellen aan (naam van de select).onchange = ... (zie oefening zwart/wit of weather switch)



  