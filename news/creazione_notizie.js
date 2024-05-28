/* Recupero tutti gli elementi dei vari input */

const imageSrc = document.getElementById("image-src");
const imageAlt = document.getElementById("image-alt");
const autore = document.getElementById("autore");
const data = document.getElementById("data");
const titolo = document.getElementById("titolo");
const didascalia = document.getElementById("didascalia");

const checkImmagine = document.getElementById("check-immagine");
const checkAlt = document.getElementById("check-alt");
const checkAutore = document.getElementById("check-autore");
const checkData = document.getElementById("check-data");
const checkTitolo = document.getElementById("check-titolo");
const checkDidascalia = document.getElementById("check-didascalia");

const arrayDiOggetti = document.getElementById("array-di-oggetti");

/* Creo un array vuoto per metterlo a schermo e poterlo poi passare */
let arrayNotiziePerCondivisione = [];

/* Creo una funzione che prende i valori degli input e li inserisce nei
  controlli */

function checkDati() {
  checkImmagine.src = imageSrc.value;
  checkAlt.innerHTML = imageAlt.value;
  checkAutore.innerHTML = autore.value;
  checkData.innerHTML = data.value;
  checkTitolo.innerHTML = titolo.value;
  checkDidascalia.innerHTML = didascalia.value;
}

function inviaDati() {
  const oggettoNotizia = {
    imagesrc: imageSrc.value,
    imagealt: imageAlt.value,
    autore: autore.value,
    data: data.value,
    titolo: titolo.value,
    didascalia: didascalia.value,
  };

  let arrayNotizie = localStorage.getItem("notizie-ea");
  if (!arrayNotizie) {
    arrayNotizie = [];
  } else {
    arrayNotizie = JSON.parse(arrayNotizie);
  }

  arrayNotizie.unshift(oggettoNotizia);
  localStorage.setItem("notizie-ea", JSON.stringify(arrayNotizie));
}

function reset() {
  localStorage.removeItem("notizie-ea");
}

const arrayInLocale = JSON.parse(localStorage.getItem("notizie-ea"));

arrayInLocale.forEach(notizia => {
  const oggettoNotizia = {
    imagesrc: notizia.imagesrc,
    imagealt: notizia.imagealt,
    autore: notizia.autore,
    data: notizia.data,
    titolo: notizia.titolo,
    didascalia: notizia.didascalia,
  }

  arrayNotiziePerCondivisione.push(oggettoNotizia)
})

// arrayNotiziePerCondivisione = `${arrayNotiziePerCondivisione}`

arrayDiOggetti.innerHTML = `<span class="pink">const</span> <span class="violet">arrayDiNotizie</span> <span class="pink"> = </span> ${JSON.stringify(arrayNotiziePerCondivisione)}`;

console.log(JSON.parse(localStorage.getItem("notizie-ea")));

