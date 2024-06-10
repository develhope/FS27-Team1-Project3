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
  const paragrafoAutore = document.createElement("p");
  paragrafoAutore.classList.add("news-info", "red");
  paragrafoAutore.innerHTML = notizia.autore;
  divAutoreEData.appendChild(paragrafoAutore);

  const paragrafoData = document.createElement("p");
  paragrafoData.classList.add("news-info", "black");
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

  /* Metto in display:none tutte le card da non caricare all'apertura
  della pagina */
  // if (oggettoNotizie.indexOf(notizia) >= 18) {
  //   section.classList.add("nascosto");
  // }
}

const notizieDaRenderizzare = 18;

for (let i = 0; i < notizieDaRenderizzare; i++) {
  generaCardNotizia(oggettoNotizie[i]);
}
// oggettoNotizie.forEach((notizia) => {
//   generaCardNotizia(notizia);
// });

/* FINE Sezione delle notizie */

/* Inizio Bottone Carica Altro */

let indiceNotizia = notizieDaRenderizzare;

function aggiungiNotizie() {
  // const sections = document.querySelectorAll("section");
  // /* trasformo la Nodelist in un array per usare i metodi */
  // const arraySections = Array.from(sections);

  // const indicePrimaNotiziaNascosta = arraySections.indexOf(
  //   arraySections.find((section) => section.classList.contains("nascosto"))
  // );

  // if (indicePrimaNotiziaNascosta + 18 > arraySections.length) {
  //   for (let i = indicePrimaNotiziaNascosta; i < arraySections.length; i++) {
  //     sections[i].classList.remove("nascosto");
  //   }
  // } else {
  //   for (
  //     let i = indicePrimaNotiziaNascosta;
  //     i < indicePrimaNotiziaNascosta + 18;
  //     i++
  //   ) {
  //     sections[i].classList.remove("nascosto");
  //   }
  // }

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

/* Inizio Bottoni Nazioni */

const grigliaFooter = document.querySelectorAll(".grid-footer");
const contenitoreGrigliaFooter = document.querySelectorAll(".grid-footer-container")
const bottonePrezzi = document.getElementById("bottone-prezzi");
const grigliaPrezzi = document.getElementById("griglia-prezzi");
const arrayLinkPrezzi = document.querySelectorAll("#griglia-prezzi a");

const bottoneLingue = document.getElementById("lingue");
const grigliaLingue = document.getElementById("griglia-lingue");
const arrayLinkLingue = document.querySelectorAll("#griglia-lingue a");

function mostraGriglia(griglia) {
  griglia.classList.add("mostra");
}

let mouseIsOverGridPrezzi = false;
let mouseIsOverGridLingue = false;

grigliaPrezzi.addEventListener("mouseover", (event) => {
  mouseIsOverGridPrezzi = true;
});

grigliaPrezzi.addEventListener("mouseout", (event) => {
  mouseIsOverGridPrezzi = false;
});

grigliaLingue.addEventListener("mouseover", (event) => {
  mouseIsOverGridLingue = true;
});

grigliaLingue.addEventListener("mouseout", (event) => {
  mouseIsOverGridLingue = false;
});

function bottoneInFocus(bottone, griglia, arrayLink, id) {
  bottone.addEventListener("blur", (event) => {
    if (!mouseIsOverGridPrezzi && !mouseIsOverGridLingue) {
      griglia.classList.remove("mostra");
    } else {
      event.preventDefault();
    }
  });

  arrayLink.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
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

      bottone.addEventListener("blur", () => {
        setTimeout(() => {
          griglia.classList.remove("mostra");
        }, 200);
      });
    });
  });
}

bottoneInFocus(
  bottonePrezzi,
  grigliaPrezzi,
  arrayLinkPrezzi,
  "#griglia-prezzi"
);
bottoneInFocus(
  bottoneLingue,
  grigliaLingue,
  arrayLinkLingue,
  "#griglia-lingue"
);

console.log(grigliaFooter[0].getBoundingClientRect().height , contenitoreGrigliaFooter[0].getBoundingClientRect().height)
for (let i = 0; i < grigliaFooter.length; i++) {
  grigliaFooter[i].addEventListener("scroll", (event) => {
    const altezzaIniziale = contenitoreGrigliaFooter[i].getBoundingClientRect().height
    const nuovaAltezza = altezzaIniziale + grigliaFooter[i].scrollTop;

    contenitoreGrigliaFooter.style.height = nuovaAltezza + "px"
  })
}
