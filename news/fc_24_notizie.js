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
  paragrafoData.classList.add("news-info", "green");
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

const notizieDaRenderizzare = 18;

for (let i = 0; i < notizieDaRenderizzare; i++) {
  generaCardNotizia(oggettoNotizie[i]);
}

const numeroPagineScroll = Math.floor(
  oggettoNotizie.length / notizieDaRenderizzare
);

for (let i = 0; i < numeroPagineScroll; i++) {
  const paginePerScroll = document.querySelector(".pagine-per-scroll");
  const bottone = document.createElement("button");
  bottone.classList.add("bottone-per-scroll");
  if (i === 0) {
    bottone.classList.add("bottone-per-scroll-focus");
  }
  bottone.innerText = `${i + 1}`;
  paginePerScroll.appendChild(bottone);
}
// oggettoNotizie.forEach((notizia) => {
//   generaCardNotizia(notizia);
// });

/* FINE Sezione delle notizie */

/* Inizio Bottone Carica Altro */

let indiceNotizia = notizieDaRenderizzare;

const bottoniScroll = document.querySelectorAll(".bottone-per-scroll");

let attualeBottoneScroll = 1;

for (let i = 0; i < bottoniScroll.length; i++) {
  bottoniScroll[i].addEventListener("click", () => {
    griglia.innerHTML = "";
    bottoniScroll.forEach((bottone) =>
      bottone.classList.remove("bottone-per-scroll-focus")
    );
    bottoniScroll[i].classList.add("bottone-per-scroll-focus");

    attualeBottoneScroll = i + 1;

    const notiziaIniziale = notizieDaRenderizzare * i;

    if (notiziaIniziale + notizieDaRenderizzare > oggettoNotizie.length) {
      for (let n = notiziaIniziale; n < oggettoNotizie.length; n++) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    } else {
      for (
        let n = notiziaIniziale;
        n < notiziaIniziale + notizieDaRenderizzare;
        n++
      ) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    }
  });
}

function passaAlBottoneSuccessivo() {
  if (attualeBottoneScroll + 1 <= bottoniScroll.length) {
    griglia.innerHTML = "";

    const bottoneScrollSuccessivo = attualeBottoneScroll + 1;
    bottoniScroll.forEach((bottone) =>
      bottone.classList.remove("bottone-per-scroll-focus")
    );
    bottoniScroll[attualeBottoneScroll].classList.add(
      "bottone-per-scroll-focus"
    );

    const notiziaIniziale = notizieDaRenderizzare * attualeBottoneScroll;

    if (notiziaIniziale + notizieDaRenderizzare > oggettoNotizie.length) {
      for (let n = notiziaIniziale; n < oggettoNotizie.length; n++) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    } else {
      for (
        let n = notiziaIniziale;
        n < notiziaIniziale + notizieDaRenderizzare;
        n++
      ) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    }
    if (bottoneScrollSuccessivo <= bottoniScroll.length) {
      attualeBottoneScroll = bottoneScrollSuccessivo;
    }
  }
}

function passaAlBottonePrecedente() {
  if (attualeBottoneScroll - 1 >= 0) {
    griglia.innerHTML = "";

    const bottoneScrollPrecedente = attualeBottoneScroll - 1;
    bottoniScroll.forEach((bottone) =>
      bottone.classList.remove("bottone-per-scroll-focus")
    );
    bottoniScroll[bottoneScrollPrecedente].classList.add(
      "bottone-per-scroll-focus"
    );

    const notiziaIniziale = notizieDaRenderizzare * bottoneScrollPrecedente;

    if (notiziaIniziale + notizieDaRenderizzare > oggettoNotizie.length) {
      for (let n = notiziaIniziale; n < oggettoNotizie.length; n++) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    } else {
      for (
        let n = notiziaIniziale;
        n < notiziaIniziale + notizieDaRenderizzare;
        n++
      ) {
        generaCardNotizia(oggettoNotizie[n]);
      }
    }
    if (bottoneScrollPrecedente >= 1) {
      attualeBottoneScroll = bottoneScrollPrecedente;
    }
  }
}

/* Fine sezione Notizia */

/* Inizio Bottoni Nazioni */

const grigliaFooter = document.querySelectorAll(".grid-footer");
const contenitoreGrigliaFooter = document.querySelectorAll(
  ".grid-footer-container"
);
const bottonePrezzi = document.getElementById("bottone-prezzi");
const grigliaPrezzi = document.getElementById("griglia-prezzi");
const arrayLinkPrezzi = document.querySelectorAll("#griglia-prezzi a");

const bottoneLingue = document.getElementById("lingue");
const grigliaLingue = document.getElementById("griglia-lingue");
const arrayLinkLingue = document.querySelectorAll("#griglia-lingue a");

function mostraGriglia(bottone, griglia, arraylink, id) {
  griglia.classList.add("mostra");

  bottone.addEventListener("blur", (event) => {
    console.log("No focus");
    setTimeout(() => {
      griglia.classList.remove("mostra");
    }, 0);
  });

  grigliaLingue.addEventListener("click", (event) => {
    event.stopPropagation();
    bottoneLingue.focus();
  });

  bottoneInFocus(bottone, arraylink, id)
}

// let mouseIsOverGridPrezzi = false;
// let mouseIsOverGridLingue = false;

// grigliaPrezzi.addEventListener("mouseover", (event) => {
//   mouseIsOverGridPrezzi = true;
// });

// grigliaPrezzi.addEventListener("mouseout", (event) => {
//   mouseIsOverGridPrezzi = false;
// });

// grigliaLingue.addEventListener("mouseover", (event) => {
//   mouseIsOverGridLingue = true;
// });

// grigliaLingue.addEventListener("mouseout", (event) => {
//   mouseIsOverGridLingue = false;
// // });

function bottoneInFocus(bottone, arrayLink, id) {
  //     bottone.addEventListener("blur", (event) => {
  //       if (!mouseIsOverGridPrezzi && !mouseIsOverGridLingue) {
  //         griglia.classList.remove("mostra");
  //       } else {
  //         event.preventDefault();
  //       }
  //     });

  arrayLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.stopPropagation();
      event.preventDefault()
      bottone.focus()

      arrayLink.forEach((element) => {
        const tic = document.querySelector(`${id} .tic`);
        if (element.contains(tic)) {
          element.removeChild(tic);
        }
      });
      
      const nuovoTic = document.createElement("div");
      nuovoTic.classList.add("tic");

      link.appendChild(nuovoTic);

      if (bottone === bottonePrezzi) {
        const nazioneDelPrezzo = document.getElementById("nazione-prezzi");
        nazioneDelPrezzo.innerHTML = link.children[0].innerHTML;
      }

      if (bottone === bottoneLingue) {
        const linguaNazione = document.getElementById("bottone-con-bandiera");
        linguaNazione.innerHTML = link.children[0].innerHTML;
      }

      // setTimeout(() => {
      //   bottone.blur()
      // }, 200);
    });
  });
}
