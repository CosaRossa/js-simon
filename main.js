// Un alert espone 5 numeri casuali (univoci).
var numRandomAlert = cicloRandom(5);
alert(numRandomAlert);
console.log(numRandomAlert);
var punti = 0;
var arrayUser = [];

// Poi parte un timer di 30 secondi.
setTimeout(function () {

  // Dopo 30 secondi l’utente deve inserire,
  // un prompt alla volta,
  // i numeri che ha visto precedentemente.
  for (var i = 0; i < 5; i++) {
    var numUser = parseInt(prompt('Inserisci un numero della serie precedente:'));
    if (numRandomAlert.indexOf(numUser) != -1) {
      arrayUser.push(numUser);
      punti++;
    } else {
      console.log('nope');
    }
  }

  // Dopo che sono stati inseriti i 5 numeri,
  // il software dice quanti e quali dei numeri
  // da indovinare sono stati individuati.
  $('p').html('Il tuo punteggio è: ' + punti + '.<br>' + 'I numeri che ti sei ricordato sono: ' + arrayUser + '.');

}, 3000)

function randomNum(max, min) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var result = Math.floor(Math.random()*(max - min + 1)) + min;
  return result;
}

function cicloRandom(giri) {
  var arrayRandom = [];
  for (var i = 0; i < giri; i++) {
    var numAlert = randomNum(100, 1);
    if (arrayRandom.indexOf(numAlert) == -1) {
      arrayRandom.push(numAlert);
    } else {
      i--;
    }
  }
  return arrayRandom;
}
