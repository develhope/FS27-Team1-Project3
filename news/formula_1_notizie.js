/* Inizio Sticky Navbar */

const aside = document.querySelector("aside");
const nav = document.querySelector("nav");

let ultimaPosizione = window.scrollY;
let nascosto = false;

window.addEventListener("scroll", () => {
  const posizioneCorrente = window.scrollY;

  if (posizioneCorrente > ultimaPosizione) {
    // Scrolla in giù
    if (!nascosto) {
      // Nascondi la navbar
      nav.style.transform = "translateY(-40px)";
      nascosto = true;
    }
  } else {
    if (nascosto) {
      // Mostra la navbar
      nav.style.transform = "translateY(0)";
      nascosto = false;
    }
  }
  ultimaPosizione = posizioneCorrente;
});

/* Fine Sticky Navbar */

/* INIZIO Sezione delle notizie */

/* Creo una funzione che mi genera le notizie prendendo le informazioni 
da un API (in questo caso un localStorage) */

const griglia = document.getElementById("griglia-notizie");
const notizieNelLocale = localStorage.getItem("notizie-ea");
const oggettoNotizie = JSON.parse(notizieNelLocale);

function generaCardNotizia(notizia) {
  /* Creo il section della card */
  const section = document.createElement("section");
  section.classList.add("news-card");
  griglia.appendChild(section);

  /* Creo il link della card 
  - DENTRO section */
  const a = document.createElement("a");
  a.href = "#";
  section.appendChild(a);

  /* Creo l'immagine della card e un contenitore per la parte testuale
  - DENTRO a */

  const immagineNotizia = document.createElement("img");
  immagineNotizia.src = notizia.imagesrc;
  immagineNotizia.alt = notizia.imagealt;
  a.appendChild(immagineNotizia);

  const divNotizie = document.createElement("div");
  a.appendChild(divNotizie);

  /* Creo i vari sottogruppi delle notizie.
  - DENTRO divNotizie */

  const divAutoreEData = document.createElement("div");
  divAutoreEData.classList.add("autore-e-data");
  divNotizie.appendChild(divAutoreEData);

  /*Creo autore e data della notizia
    - DENTRO divAutoreEData */
  const paragrafoData = document.createElement("p");
  paragrafoData.classList.add("news-info", "yellow");
  paragrafoData.innerHTML = notizia.data;
  divAutoreEData.appendChild(paragrafoData);

  /* torno
  - DENTRO divNotizie */
  const hTitolo = document.createElement("h3");
  hTitolo.innerHTML = notizia.titolo;
  divNotizie.appendChild(hTitolo);

  const paragrafoDidascalia = document.createElement("p");
  paragrafoDidascalia.classList.add("articolo-della-news");
  paragrafoDidascalia.innerHTML = notizia.didascalia;
  divNotizie.appendChild(paragrafoDidascalia);
}

const notizieDaRenderizzare = 9;

for (let i = 0; i < notizieDaRenderizzare; i++) {
  generaCardNotizia(oggettoNotizie[i]);
}

/* FINE Sezione delle notizie */

/* Inizio Bottone Carica Altro */

let indiceNotizia = notizieDaRenderizzare;

function aggiungiNotizie() {
  const bottoneCaricaAltro = document.querySelector(".carica-altro");
  bottoneCaricaAltro.style.marginTop = "60px";

  setTimeout(() => {
    if (indiceNotizia + notizieDaRenderizzare > oggettoNotizie.length) {
      for (let i = indiceNotizia; i < oggettoNotizie.length; i++) {
        generaCardNotizia(oggettoNotizie[i]);
      }
      indiceNotizia = oggettoNotizie.length;
    } else {
      for (
        let i = indiceNotizia;
        i < indiceNotizia + notizieDaRenderizzare;
        i++
      ) {
        generaCardNotizia(oggettoNotizie[i]);
      }
      indiceNotizia += notizieDaRenderizzare;
    }

    bottoneCaricaAltro.style.marginTop = "0";
    if (indiceNotizia === oggettoNotizie.length) {
      bottoneCaricaAltro.style.display = "none";
    }
  }, 1000);
}

/* Fine Bottone Carica Altro */