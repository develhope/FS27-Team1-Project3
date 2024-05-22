/* INIZIO SEZIONE ULTIME NOVITA' */

/* Trovo l'elemento grid */
const newsGrid = document.querySelector(`.grid`);

/* Trovo ogni bottone della sezione menù delle Ultime Notizie e un array che li contiene*/
const bottoneNotizieEa = document.getElementById(`bottone-notizie-ea`);
const bottoneEaSports = document.getElementById(`bottone-ea-sports`);
const bottoneApex = document.getElementById(`bottone-apex`);
const bottoneTheSims4 = document.getElementById(`bottone-the-sims-4`);
const bottoneStarWars = document.getElementById(`bottone-star-wars`);
const bottoneF1 = document.getElementById(`bottone-f1`);
const bottoneBf = document.getElementById(`bottone-bf`);
const bottoneNfs = document.getElementById(`bottone-nfs`);

const arrayBottoni = document.querySelectorAll(`.menu button`);
console.log(bottoneEaSports);
/* Creo una variabile che mi permette di cambiare l'elemento in focus */

let bottoneSelezionato = bottoneNotizieEa;

/* Trovo ogni elemento da cambiare delle prime 6 card */

/* Immagini notizia*/
const newsImg1 = document.querySelector("#filtered-news-1 img");
const newsImg2 = document.querySelector("#filtered-news-2 img");
const newsImg3 = document.querySelector("#filtered-news-3 img");
const newsImg4 = document.querySelector("#filtered-news-4 img");
const newsImg5 = document.querySelector("#filtered-news-5 img");
const newsImg6 = document.querySelector("#filtered-news-6 img");

/* Autore notizia */
const newsAuthor1 = document.querySelector("#filtered-news-1 p.red");
const newsAuthor2 = document.querySelector("#filtered-news-2 p.red");
const newsAuthor3 = document.querySelector("#filtered-news-3 p.red");
const newsAuthor4 = document.querySelector("#filtered-news-4 p.red");
const newsAuthor5 = document.querySelector("#filtered-news-5 p.red");
const newsAuthor6 = document.querySelector("#filtered-news-6 p.red");

/* Data notizia */
const newsDate1 = document.querySelector("#filtered-news-1 p.black");
const newsDate2 = document.querySelector("#filtered-news-2 p.black");
const newsDate3 = document.querySelector("#filtered-news-3 p.black");
const newsDate4 = document.querySelector("#filtered-news-4 p.black");
const newsDate5 = document.querySelector("#filtered-news-5 p.black");
const newsDate6 = document.querySelector("#filtered-news-6 p.black");

/* Titolo notizia */
const newsTitle1 = document.querySelector("#filtered-news-1 h3");
const newsTitle2 = document.querySelector("#filtered-news-2 h3");
const newsTitle3 = document.querySelector("#filtered-news-3 h3");
const newsTitle4 = document.querySelector("#filtered-news-4 h3");
const newsTitle5 = document.querySelector("#filtered-news-5 h3");
const newsTitle6 = document.querySelector("#filtered-news-6 h3");

/* Didascalia notizia */
const newsText1 = document.querySelector(
  "#filtered-news-1 p.articolo-della-news"
);
const newsText2 = document.querySelector(
  "#filtered-news-2 p.articolo-della-news"
);
const newsText3 = document.querySelector(
  "#filtered-news-3 p.articolo-della-news"
);
const newsText4 = document.querySelector(
  "#filtered-news-4 p.articolo-della-news"
);
const newsText5 = document.querySelector(
  "#filtered-news-5 p.articolo-della-news"
);
const newsText6 = document.querySelector(
  "#filtered-news-6 p.articolo-della-news"
);

/* Cards nella loro interezza */
const newsCard1 = document.getElementById(`filtered-news-1`);
const newsCard2 = document.getElementById(`filtered-news-2`);
const newsCard3 = document.getElementById(`filtered-news-3`);
const newsCard4 = document.getElementById(`filtered-news-4`);
const newsCard5 = document.getElementById(`filtered-news-5`);
const newsCard6 = document.getElementById(`filtered-news-6`);

/* Cards di EA SPORTS FC non visibili ad apertura pagina*/
const newsCard7 = document.getElementById(`filtered-news-7`);
const newsCard8 = document.getElementById(`filtered-news-8`);
const newsCard9 = document.getElementById(`filtered-news-9`);
const newsCard10 = document.getElementById(`filtered-news-10`);
const newsCard11 = document.getElementById(`filtered-news-11`);
const newsCard12 = document.getElementById(`filtered-news-12`);

/* Div Autore e Data */
const newsInfo1 = document.getElementById(`author-and-date-1`);
const newsInfo2 = document.getElementById(`author-and-date-2`);
const newsInfo3 = document.getElementById(`author-and-date-3`);
const newsInfo4 = document.getElementById(`author-and-date-4`);
const newsInfo5 = document.getElementById(`author-and-date-5`);
const newsInfo6 = document.getElementById(`author-and-date-6`);

/* Trovo il menù delle varie categorie delle Ultime novità con
i contenitori delle frecce */

const categoryList = document.querySelector(`.menu`);
const frecciaSinistra = document.querySelector(`.contenitore-freccia-sinistra`);
const frecciaDestra = document.querySelector(`.contenitore-freccia-destra`);

/* Disabilito l'effetto di default della sidebar */
categoryList.style.overflowX = `hidden`;

/* Faccio in modo che all'apparire della sidebar escano le frecce */

function buttonShow() {
  if (categoryList.scrollWidth > categoryList.clientWidth) {
    frecciaDestra.style.display = `flex`;
  } else {
    frecciaDestra.style.display = `none`;
  }
}

buttonShow();

window.addEventListener(`resize`, buttonShow);

/* Creo le due funzioni gemelle che faranno scrollare la sidebare di menu, inserendo
all'interno una funzione che controlla la posizione della scrollbar per nascondere gli
elementi */

function arrowManagment() {
  if (categoryList.scrollLeft >= 20) {
    frecciaSinistra.style.display = `flex`;
  } else {
    frecciaSinistra.style.display = `none`;
  }
  /* calcolo la lunghezza della scrollbar */
  let maxScrollValue = categoryList.scrollWidth - categoryList.clientWidth;
  /* scrollWidth = lunghezza totale / clientWidth = lunghezza visualizzata dallo User */

  if (categoryList.scrollLeft >= maxScrollValue) {
    frecciaDestra.style.display = `none`;
  } else {
    frecciaDestra.style.display = `flex`;
  }
}

function moveLeft() {
  categoryList.scrollLeft += 400;
  setTimeout(arrowManagment, 500);
}

function moveRight() {
  categoryList.scrollLeft -= 400;
  setTimeout(arrowManagment, 500);
}
/* Creo dei duplicati di tutti gli .innerHTML, delle .src e degli .alt 
del bottone Notizie EA come backup */

const tempImg1 = newsImg1.src;
const tempImg2 = newsImg2.src;
const tempImg3 = newsImg3.src;
const tempImg4 = newsImg4.src;
const tempImg5 = newsImg5.src;
const tempImg6 = newsImg6.src;

const tempImgAlt1 = newsImg1.alt;
const tempImgAlt2 = newsImg2.alt;
const tempImgAlt3 = newsImg3.alt;
const tempImgAlt4 = newsImg4.alt;
const tempImgAlt5 = newsImg5.alt;
const tempImgAlt6 = newsImg6.alt;

const tempAuthor1 = newsAuthor1.innerHTML;
const tempAuthor2 = newsAuthor2.innerHTML;
const tempAuthor3 = newsAuthor3.innerHTML;
const tempAuthor4 = newsAuthor4.innerHTML;
const tempAuthor5 = newsAuthor5.innerHTML;
const tempAuthor6 = newsAuthor6.innerHTML;

const tempDate1 = newsDate1.innerHTML;
const tempDate2 = newsDate2.innerHTML;
const tempDate3 = newsDate3.innerHTML;
const tempDate4 = newsDate4.innerHTML;
const tempDate5 = newsDate5.innerHTML;
const tempDate6 = newsDate6.innerHTML;

const tempTitle1 = newsTitle1.innerHTML;
const tempTitle2 = newsTitle2.innerHTML;
const tempTitle3 = newsTitle3.innerHTML;
const tempTitle4 = newsTitle4.innerHTML;
const tempTitle5 = newsTitle5.innerHTML;
const tempTitle6 = newsTitle6.innerHTML;

const tempText1 = newsText1.innerHTML;
const tempText2 = newsText2.innerHTML;
const tempText3 = newsText3.innerHTML;
const tempText4 = newsText4.innerHTML;
const tempText5 = newsText5.innerHTML;
const tempText6 = newsText6.innerHTML;

/* Creazione delle funzioni che modificheranno i contenuti delle card in base al bottone premuto */

function newsNotizieEA() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = tempImg1;
  newsImg2.src = tempImg2;
  newsImg3.src = tempImg3;
  newsImg4.src = tempImg4;
  newsImg5.src = tempImg5;
  newsImg6.src = tempImg6;

  newsImg1.alt = tempImgAlt1;
  newsImg2.alt = tempImgAlt2;
  newsImg3.alt = tempImgAlt3;
  newsImg4.alt = tempImgAlt4;
  newsImg5.alt = tempImgAlt5;
  newsImg6.alt = tempImgAlt6;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = tempAuthor1;
  newsAuthor2.innerHTML = tempAuthor2;
  newsAuthor3.innerHTML = tempAuthor3;
  newsAuthor4.innerHTML = tempAuthor4;
  newsAuthor5.innerHTML = tempAuthor5;
  newsAuthor6.innerHTML = tempAuthor6;

  /* cambio la data della notizia */

  newsDate1.innerHTML = tempDate1;
  newsDate2.innerHTML = tempDate2;
  newsDate3.innerHTML = tempDate3;
  newsDate4.innerHTML = tempDate4;
  newsDate5.innerHTML = tempDate5;
  newsDate6.innerHTML = tempDate6;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = tempTitle1;
  newsTitle2.innerHTML = tempTitle2;
  newsTitle3.innerHTML = tempTitle3;
  newsTitle4.innerHTML = tempTitle4;
  newsTitle5.innerHTML = tempTitle5;
  newsTitle6.innerHTML = tempTitle6;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = tempText1;
  newsText2.innerHTML = tempText2;
  newsText3.innerHTML = tempText3;
  newsText4.innerHTML = tempText4;
  newsText5.innerHTML = tempText5;
  newsText6.innerHTML = tempText6;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneNotizieEa) {
    bottoneSelezionato = bottoneNotizieEa;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsEaSportsFc() {
  /* riporta la card in default (dove serve) */

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  /* Rendo visibili le news-card nascoste */

  newsCard7.style.display = `flex`;
  newsCard8.style.display = `flex`;
  newsCard9.style.display = `flex`;
  newsCard10.style.display = `flex`;
  newsCard11.style.display = `flex`;
  newsCard12.style.display = `flex`;

  /* Sistemo le misure della grid della sezione Utlime Novità */

  if (window.innerWidth < 1024) {
    newsGrid.style.marginBottom = `10px`;
  } else {
    newsGrid.style.marginBottom = `105px`;
  }

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/giocatore-maglietta-arancione.jpg`;
  newsImg2.src = `immagini/notizie/logo-FC-novità.jpg`;
  newsImg3.src = `immagini/notizie/logo-FC-novità.jpg`;
  newsImg4.src = `immagini/notizie/giocatore-maglietta-bianca.jpg`;
  newsImg5.src = `immagini/notizie/logo-FC-novità.jpg`;
  newsImg6.src = `immagini/notizie/giocatore-maglietta-azzurra.jpg`;

  newsImg1.alt = `giocatore con maglietta arancione`;
  newsImg2.alt = `novità FC`;
  newsImg3.alt = `novità FC`;
  newsImg4.alt = `giocatore con maglietta bianca`;
  newsImg5.alt = `novità FC`;
  newsImg6.alt = `giocatore con maglietta azzurra`;

  /* cambio la data della notizia 
  (sfruttando il <p> dell'autore per
  lo stile diverso della sezione) */

  newsAuthor1.innerHTML = `25-apr-2024`;
  newsAuthor2.innerHTML = `19-apr-2024`;
  newsAuthor3.innerHTML = `21-mar-2024`;
  newsAuthor4.innerHTML = `12-mar-2024`;
  newsAuthor5.innerHTML = `2-feb-2024`;
  newsAuthor6.innerHTML = `5-dic-2023`;

  /* nascondo il <p> data, 
  assente sulla card */

  newsDate1.style.display = `none`;
  newsDate2.style.display = `none`;
  newsDate3.style.display = `none`;
  newsDate4.style.display = `none`;
  newsDate5.style.display = `none`;
  newsDate6.style.display = `none`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Nike x EA SPORTS FC<span><sup>TM</sup></span>: WHAT THE FC`;
  newsTitle2.innerHTML = `Foorball Ultimate Team<span><sup>TM</sup></span> 24 - Squadra della stagione`;
  newsTitle3.innerHTML = `EA SPORTS FC<span><sup>TM</sup></span> 24 - Offerta MLS Season Pass 2024 FC Founder`;
  newsTitle4.innerHTML = `EA SPORTS FC<span><sup>TM</sup></span> 24 | Note di sviluppo - Aggiornamento di primavera`;
  newsTitle5.innerHTML = `Aggiornamento sulla SCR campionati TOTY 86+ - Sito ufficiale EA Sports`;
  newsTitle6.innerHTML = `EA SPORTS FC<span><sup>TM</sup></span> 24 | Note del team di sviluppo - Aggiornamento delle feste`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Prova WHAT THE FC in EA SPORTS FC<span><sup>TM</sup></span> 24`;
  newsText2.innerHTML = `Celebra le migliori stelle di questa stagione con la Squadra della stagione (TOTS) di EA SPORTS FC<span><sup>TM</sup></span> 24 Football Ultimate Team`;
  newsText3.innerHTML = `Grazie alla collaborazione tra EA SPORTS FC<span><sup>TM</sup></span> e Apple, avrai diritto a 1 mese di prova gratuita* per l'MLS Season Pass 2024.`;
  newsText4.innerHTML = `L'aggiornamento di primavera aggiunge 86 nuovi volti e propone un'esperienza di gioco rinnovata grazie alle modifiche agli stili di gioco e alla difficoltà dell'IA della CPU a livello leggenda.`;
  newsText5.innerHTML = ``;
  newsText6.innerHTML = `L'aggiornamento delle feste (aggiornamento n°6) è vicino e non vediamo l'ora di parlarvi delle fantastiche modifiche e aggiunte a EA SPORTS FC<span><sup>TM</sup></span> 24.`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneEaSports) {
    bottoneSelezionato = bottoneEaSports;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsApexLegends() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/apex-banner-notizie.png`;
  newsImg2.src = `immagini/notizie/apex-portali.png`;
  newsImg3.src = `immagini/notizie/apex-team.png`;
  newsImg4.src = `immagini/notizie/apex-global-series.png`;
  newsImg5.src = `immagini/notizie/apex-play-off-screen.jpg`;
  newsImg6.src = `immagini/notizie/apex-play-off-sfidanti.jpg`;

  newsImg1.alt = `Disordine`;
  newsImg2.alt = `Portali`;
  newsImg3.alt = `Disordine con team`;
  newsImg4.alt = `Global Series`;
  newsImg5.alt = `Playoffs`;
  newsImg6.alt = `Playoffs sfidanti`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `Apex Legends`;
  newsAuthor2.innerHTML = `Apex Legends`;
  newsAuthor3.innerHTML = `Apex Legends`;
  newsAuthor4.innerHTML = `Apex Legends`;
  newsAuthor5.innerHTML = `Apex Legends`;
  newsAuthor6.innerHTML = `Apex Legends`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `6-mag-2024`;
  newsDate2.innerHTML = `3-mag-2024`;
  newsDate3.innerHTML = `3-mag-2024`;
  newsDate4.innerHTML = `26-apr-2024`;
  newsDate5.innerHTML = `23-apr-2024`;
  newsDate6.innerHTML = `22-apr-2024`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Apex Legends<span><sup>TM</sup></span>: Disordine - Note sulla patch`;
  newsTitle2.innerHTML = `Tutte le novità di Apex Legends<span><sup>TM</sup></span>: Disordine`;
  newsTitle3.innerHTML = `Apex Legends<span><sup>TM</sup></span>: arrivano gli artefatti`;
  newsTitle4.innerHTML = `Apex Legends Global Series: scopri i partner della 4ª edizione`;
  newsTitle5.innerHTML = `Apex Legends Global Series: scopri gli esclusivi Twitch Drop della Fase 1`;
  newsTitle6.innerHTML = `Playoff Fase 1: tutto quello che c'è da sapere`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Preparati per l'uscita di Disordine con Alter e le novità sul bilanciamento, le leggende e altro ancora.`;
  newsText2.innerHTML = `Il ritorno della modalità Solo, Alter, una nuova Luna distrutta e altro ancora: scopri cos'è cambiato in ApexLegends<span><sup>TM</sup></span>: Disordine!`;
  newsText3.innerHTML = `Scrivi la tua storia con i nuovi artefatti personalizzabili di Apex Legends. Tua la battaglia, tuo lo stile.`;
  newsText4.innerHTML = `Siamo lieti di annunciare i partner della 4ª edizione della ALGS. Clicca qui per saperne di più!`;
  newsText5.innerHTML = `Mostra a tutti il tuo amore per la ALGS con questi fantastici Twitch Drop!`;
  newsText6.innerHTML = `Dal 2 al 5 maggio, segui il primo evento LAN della 4ª edizione della ALGS. Scopri di più sulle squadre, le dirette, i gironi e non solo!`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneApex) {
    bottoneSelezionato = bottoneApex;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsTheSims4() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/tre_sims.jpg`;
  newsImg2.src = `immagini/notizie/the-sims-sfondo-grigio.jpg`;
  newsImg3.src = `immagini/notizie/the-sims-sfondo-grigio.jpg`;
  newsImg4.src = `immagini/notizie/the-sims-gioielli.png`;
  newsImg5.src = `immagini/notizie/the-sims-sfondo-grigio.jpg`;
  newsImg6.src = `immagini/notizie/the-sims-gioielli-sfondo-rosso.png`;

  newsImg1.alt = `app ea`;
  newsImg2.alt = `parallelepipedi the sims`;
  newsImg3.alt = `parallelepipedi the sims`;
  newsImg4.alt = `gioielli con persona reale`;
  newsImg5.alt = `parallelepipedi the sims`;
  newsImg6.alt = `gioielli con sfondo rosso`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `The Sims 4`;
  newsAuthor2.innerHTML = `The Sims 4`;
  newsAuthor3.innerHTML = `The Sims 4`;
  newsAuthor4.innerHTML = `The Sims 4`;
  newsAuthor5.innerHTML = `The Sims 4`;
  newsAuthor6.innerHTML = `The Sims 4`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `25-mar-2024`;
  newsDate2.innerHTML = `6-mar-2024`;
  newsDate3.innerHTML = `28-feb-2024`;
  newsDate4.innerHTML = `28-feb-2024`;
  newsDate5.innerHTML = `27-feb-2024`;
  newsDate6.innerHTML = `22-feb-2024`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Come The Sims e i suoi partner stanno ampliando diversità e rappresentazion...`;
  newsTitle2.innerHTML = `Aggiornamento: 06/03/2024`;
  newsTitle3.innerHTML = `Aggiornamento: 28/02/2024`;
  newsTitle4.innerHTML = `La collezione di gioielli veri di The Sims con i Plumbob`;
  newsTitle5.innerHTML = `Aggiornamento: 27/02/2024`;
  newsTitle6.innerHTML = `Arethabee crea gioielli appariscenti per The Sims 4 Creazioni di Cristallo`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Maxis inaugura una collaborazione con Dark & Lovely e Danielle "Ebonix" Udogaranya per aiutare di più le persone a riconoscersi nel gioco`;
  newsText2.innerHTML = `Aggiornamento cruiciali per risolvere importanti problemi comunitari`;
  newsText3.innerHTML = `E-Patch`;
  newsText4.innerHTML = `Acquista la collezione dei gioielli Plumbob di The Sims4 Creazioni di Cristallo Stuff Pack`;
  newsText5.innerHTML = `Un aggiornamento tra i più scintillanti`;
  newsText6.innerHTML = `Sei tu a creare The Sims con Arethabee`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneTheSims4) {
    bottoneSelezionato = bottoneTheSims4;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsStarWars() {
  /* riporta la card in default (dove serve) */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* Cambio il flex-direction e il gap
  del div #author-and-date */

  newsInfo1.style.flexDirection = `column`;
  newsInfo2.style.flexDirection = `column`;
  newsInfo3.style.flexDirection = `column`;
  newsInfo4.style.flexDirection = `column`;
  newsInfo5.style.flexDirection = `column`;
  newsInfo6.style.flexDirection = `column`;

  newsInfo1.style.gap = `0`;
  newsInfo2.style.gap = `0`;
  newsInfo3.style.gap = `0`;
  newsInfo4.style.gap = `0`;
  newsInfo5.style.gap = `0`;
  newsInfo6.style.gap = `0`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/obi-wan.png`;
  newsImg2.src = `immagini/notizie/may-the-4th.png`;
  newsImg3.src = `immagini/notizie/aggiornamento-maggio.jpg`;
  newsImg4.src = `immagini/notizie/jar-jar-binks.png`;
  newsImg5.src = `immagini/notizie/guerriero-gungan.png`;
  newsImg6.src = `immagini/notizie/star-wars-pc.jpg`;

  newsImg1.alt = `Obi-Wan Kenobi`;
  newsImg2.alt = `May the 4th`;
  newsImg3.alt = `Aggiornamento Maggio`;
  newsImg4.alt = `Jar Jar Binks`;
  newsImg5.alt = `Guerriero Gungan con scudo`;
  newsImg6.alt = `Star Wars su pc`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `Star Wars™ Galaxy of Heroes`;
  newsAuthor2.innerHTML = `Star Wars™ Galaxy of Heroes`;
  newsAuthor3.innerHTML = `Star Wars™ Galaxy of Heroes`;
  newsAuthor4.innerHTML = `Star Wars™ Galaxy of Heroes`;
  newsAuthor5.innerHTML = `Star Wars™ Galaxy of Heroes`;
  newsAuthor6.innerHTML = `Star Wars™ Galaxy of Heroes`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `6-mag-2024`;
  newsDate2.innerHTML = `2-mag-2024`;
  newsDate3.innerHTML = `29-apr-2024`;
  newsDate4.innerHTML = `25-apr-2024`;
  newsDate5.innerHTML = `9-apr-2024`;
  newsDate6.innerHTML = `4-apr-2024`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Presentazione di Obi-Wan Padawan`;
  newsTitle2.innerHTML = `Festeggia lo Star Wars Day, edizione 2024`;
  newsTitle3.innerHTML = `Anteprima del calendario di Maggio`;
  newsTitle4.innerHTML = `Presentazione di Jar Jar Binks`;
  newsTitle5.innerHTML = `Presentazione della Falange Gungan`;
  newsTitle6.innerHTML = `Star Wars<span><sup>TM</sup></span>: Gli eroi della galassia è in arrivo su PC`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Scopri le abilità di Obi-Wan padawan in questa presentazione!`;
  newsText2.innerHTML = `Scopri gli eventi di gioco per lo Star Wars Day in STAR WARS<span><sup>TM</sup></span>: Gli eroi della galassia, tra cui l'arrivo di Jar Jar Binks e l'inizio della Closed Beta su PC.`;
  newsText3.innerHTML = `Dai un'occhiata ai prossimi eventi!`;
  newsText4.innerHTML = `Scopri le abilità di Jar Jar Binks in questa presentazione!`;
  newsText5.innerHTML = `Scopri le abilità della Falange Gungan in questa presentazione!`;
  newsText6.innerHTML = `Star Wars<span><sup>TM</sup></span>: Gli eroi della galassia è in arrivo su PC`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneStarWars) {
    bottoneSelezionato = bottoneStarWars;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsF1() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/pilota.png`;
  newsImg2.src = `immagini/notizie/driver-ratings-dicembre.png`;
  newsImg3.src = `immagini/notizie/sorpasso-arancio.jpg`;
  newsImg4.src = `immagini/notizie/sorpasso-rosso.jpg`;
  newsImg5.src = `immagini/notizie/driver-ratings-settembre.png`;
  newsImg6.src = `immagini/notizie/macchina-singola.jpg`;

  newsImg1.alt = `Pilota`;
  newsImg2.alt = `Driver Rating Dicembre`;
  newsImg3.alt = `Sorpasso Macchina Arancione`;
  newsImg4.alt = `Sorpasso Macchina Rossa`;
  newsImg5.alt = `Driver Rating Settembre`;
  newsImg6.alt = `Macchina da F1`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `F1® 23`;
  newsAuthor2.innerHTML = `F1® 23`;
  newsAuthor3.innerHTML = `F1® 23`;
  newsAuthor4.innerHTML = `F1® 23`;
  newsAuthor5.innerHTML = `F1® 23`;
  newsAuthor6.innerHTML = `F1® 23`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `12-dic-2023`;
  newsDate2.innerHTML = `7-dic-2023`;
  newsDate3.innerHTML = `16-ott-2023`;
  newsDate4.innerHTML = `16-ott-2023`;
  newsDate5.innerHTML = `19-sett-2023`;
  newsDate6.innerHTML = `29-ago-2023`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `EA SPORTS<span><sup>TM</sup></span> F1® - I TRIONFI DI MAX`;
  newsTitle2.innerHTML = `AGGIORNAMENTO DELLE VALUTAZIONI PILOTA DI F1® 23 (FINE STAGIONE)`;
  newsTitle3.innerHTML = `F1® 23 - NOTE SULLA PATCH (v1.15)`;
  newsTitle4.innerHTML = `SONO ARRIVATI L'AGGIORNAMENTO SPORTIVO E LA F2<span><sup>TM</sup></span> 2023`;
  newsTitle5.innerHTML = `F1® 23 - AGGIORNAMENTO DELLE VALUTAZIONI DEI PILOTI (SETTEMBRE)`;
  newsTitle6.innerHTML = `F1® 23 - NOTE SULLA PATCH (v1.10)`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Riscoprite un anno sensazionale`;
  newsText2.innerHTML = `È arrivato l'ultimo aggiornamento delle Valutazioni pilota di F1® 23, che tiene conto di Las Vegas e della conclusione di Abu Dhabi`;
  newsText3.innerHTML = `Con questo aggiornamento arrivano due grandi modifiche: l'aggiornamento sportivo e la F2<span><sup>TM</sup></span> 2023`;
  newsText4.innerHTML = `Rivivi la stagione di quest'anno della Formula 2<span><sup>TM</sup></span> in F1® 23`;
  newsText5.innerHTML = `I Grand Prix d'Olanda e d'Italia sono gli ultimi a essere stati inclusi nell'aggiornamento delle valutazioni dei piloti di F1® 23`;
  newsText6.innerHTML = `Con questa patch di F1® 23 arrivano alcune grandi aggiunte e uno degli autraliani più amati dai fan`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneF1) {
    bottoneSelezionato = bottoneF1;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsBattlefield() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsInfo1.style.flexDirection = `row`;
  newsInfo2.style.flexDirection = `row`;
  newsInfo3.style.flexDirection = `row`;
  newsInfo4.style.flexDirection = `row`;
  newsInfo5.style.flexDirection = `row`;
  newsInfo6.style.flexDirection = `row`;

  newsInfo1.style.gap = `14px`;
  newsInfo2.style.gap = `14px`;
  newsInfo3.style.gap = `14px`;
  newsInfo4.style.gap = `14px`;
  newsInfo5.style.gap = `14px`;
  newsInfo6.style.gap = `14px`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/bf2042-mappa.jpg`;
  newsImg2.src = `immagini/notizie/bf2042-soldati-filtro.jpg`;
  newsImg3.src = `immagini/notizie/bf2042-soldati.jpg`;
  newsImg4.src = `immagini/sfondo_battlefield.jpg`;
  newsImg5.src = `immagini/notizie/bf2042-soldato.jpg`;
  newsImg6.src = `immagini/notizie/bf2042-soldati-con-logo.png`;

  newsImg1.alt = `Mappa con Filtro`;
  newsImg2.alt = `Soldati con Filtro`;
  newsImg3.alt = `Soldati`;
  newsImg4.alt = `Sfondo Bf`;
  newsImg5.alt = `Soldato con Filtro`;
  newsImg6.alt = `Soldati con Logo`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `Battlefield 2042`;
  newsAuthor2.innerHTML = `Battlefield 2042`;
  newsAuthor3.innerHTML = `Battlefield 2042`;
  newsAuthor4.innerHTML = `Battlefield 2042`;
  newsAuthor5.innerHTML = `Battlefield 2042`;
  newsAuthor6.innerHTML = `Battlefield 2042`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `25-apr-2024`;
  newsDate2.innerHTML = `12-apr-2024`;
  newsDate3.innerHTML = `11-apr-2024`;
  newsDate4.innerHTML = `9-apr-2024`;
  newsDate5.innerHTML = `28-mar-2024`;
  newsDate6.innerHTML = `27-mar-2024`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Note di sviluppo - Stadio`;
  newsTitle2.innerHTML = `AGGIORNAMENTO 7.1.0 DI BATTLEFIELD 2042`;
  newsTitle3.innerHTML = `Briefing Battlefield - Fronte cremisi`;
  newsTitle4.innerHTML = `Un aggiornamento su Battlefield 2042 e un benvenuto nel team a Motiv Stud...`;
  newsTitle5.innerHTML = `AGGIORNAMENTO 7.0.1 DI BATTLEFIELD 2042 `;
  newsTitle6.innerHTML = `EA anticheat e Battlefield`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Scopri di più sul ritorno di Stadio in Battlefiled 2042`;
  newsText2.innerHTML = `L'aggiornamento 7.1 di Battlefield 2042 porta ulteriori miglioramenti e prepara il gioco all'arrivo dell'evento Fronte cremisi!`;
  newsText3.innerHTML = `Evento a tempo limitato, Fronte cremisi, Prima linea`;
  newsText4.innerHTML = `Il team di Battlefield si amplia mentre guardiamo al futuro della serie`;
  newsText5.innerHTML = `Piccolo hotfix successivo all'uscita dell'aggiornamento 7.0 di Battlefield 2042.`;
  newsText6.innerHTML = `Battlefield 2042, Battlefield V, EA anticheat`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneBf) {
    bottoneSelezionato = bottoneBf;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}

function newsNFS() {
  /* riporta la card in default */

  newsDate1.style.display = `block`;
  newsDate2.style.display = `block`;
  newsDate3.style.display = `block`;
  newsDate4.style.display = `block`;
  newsDate5.style.display = `block`;
  newsDate6.style.display = `block`;

  newsCard7.style.display = `none`;
  newsCard8.style.display = `none`;
  newsCard9.style.display = `none`;
  newsCard10.style.display = `none`;
  newsCard11.style.display = `none`;
  newsCard12.style.display = `none`;

  newsGrid.style.marginBottom = `10px`;

  /* Cambio il flex-direction e il gap
  del div #author-and-date */

  newsInfo1.style.flexDirection = `column`;
  newsInfo2.style.flexDirection = `column`;
  newsInfo3.style.flexDirection = `column`;
  newsInfo4.style.flexDirection = `column`;
  newsInfo5.style.flexDirection = `column`;
  newsInfo6.style.flexDirection = `column`;

  newsInfo1.style.gap = `0`;
  newsInfo2.style.gap = `0`;
  newsInfo3.style.gap = `0`;
  newsInfo4.style.gap = `0`;
  newsInfo5.style.gap = `0`;
  newsInfo6.style.gap = `0`;

  /* cambio le img di tutte le card e il loro alt */

  newsImg1.src = `immagini/notizie/nfs-sorpasso-arancio.jpg`;
  newsImg2.src = `immagini/notizie/nfs-sorpasso-verde.jpg`;
  newsImg3.src = `immagini/notizie/nfs-macchina-rossa.jpg`;
  newsImg4.src = `immagini/notizie/nfs-tubo-scappamento.jpg`;
  newsImg5.src = `immagini/notizie/nfs-nos.jpg`;
  newsImg6.src = `immagini/notizie/nfs-testa-a-testa.jpg`;

  newsImg1.alt = `Sorpasso Macchina Gialla`;
  newsImg2.alt = `Sorpasso Macchina Verde`;
  newsImg3.alt = `Sorpasso Macchina Rossa`;
  newsImg4.alt = `Retro Macchina`;
  newsImg5.alt = `Retro Macchina con Nos e Elicottero`;
  newsImg6.alt = `Macchine in un testa a testa`;

  /* cambio l'autore della notizia */

  newsAuthor1.innerHTML = `Need for Speed: Hot Pursuit Remastered`;
  newsAuthor2.innerHTML = `Need for Speed: Hot Pursuit Remastered`;
  newsAuthor3.innerHTML = `Need for Speed: Hot Pursuit Remastered`;
  newsAuthor4.innerHTML = `Need for Speed: Hot Pursuit Remastered`;
  newsAuthor5.innerHTML = `Need for Speed: Hot Pursuit Remastered`;
  newsAuthor6.innerHTML = `Need for Speed: Hot Pursuit Remastered`;

  /* cambio la data della notizia */

  newsDate1.innerHTML = `24-giu-2021`;
  newsDate2.innerHTML = `25-feb-2021`;
  newsDate3.innerHTML = `18-nov-2020`;
  newsDate4.innerHTML = `6-nov-2020`;
  newsDate5.innerHTML = `30-ott-2020`;
  newsDate6.innerHTML = `23-ott-2020`;

  /* cambio i Titoli dell'articolo */

  newsTitle1.innerHTML = `Scalda i motori con EA Play`;
  newsTitle2.innerHTML = `In arrivo il nuovo editor di wrap con l'aggiornamento NFS<span><sup>TM</sup></span> Hot Pursuit Rema...`;
  newsTitle3.innerHTML = `Sotto il confano: corre e insegui con gli amici`;
  newsTitle4.innerHTML = `Need for Speed<span><sup>TM</sup></span> Hot Pursuit Remastered è disponibile ora`;
  newsTitle5.innerHTML = `Sotto il cofano: aggiornamenti di gioco`;
  newsTitle6.innerHTML = `Sotto il cofano: bentornato a Seacrest County`;

  /* cambio le didascalie degli articoli */

  newsText1.innerHTML = `Need for Speed<span><sup>TM</sup></span> Hot Pursuit Remastered è ora disponibile in The Play List.`;
  newsText2.innerHTML = `In più, la quarta e la quinta generazione di console avranno una risoluzione e una frequenza dei fotogrammi migliori.`;
  newsText3.innerHTML = `Ecco come Need for Speed<span><sup>TM</sup></span> Hot Pursuit Remastered fa della competizione tra amici il suo punto di forza.`;
  newsText4.innerHTML = `Scalda i motori su PS4, Xbox One e PC oggi stessu e su Nintendo Switch la prossima settimana!`;
  newsText5.innerHTML = `Preparati a scoprire gli aggiornamenti di gioco in arrivo a tutta velocità in Need for Speed Hot Pursuit Remastered.`;
  newsText6.innerHTML = `Preparati ad ammirare incredibili miglioramenti grafici e a sfrecciare attraverso strabilianti ambientazioni in Need for Speed Hot Pursuit Remastered.`;

  /* controllo se questo è il pulsante selezionato,
  così da rendere l'effetto hover solo la prima volta
  che cambia */

  if (bottoneSelezionato !== bottoneNfs) {
    bottoneSelezionato = bottoneNfs;

    /* riproduco l'effetto :hover al click, dando la
    classe al click e togliendola subito dopo */

    /* tolgo la transition */
    newsCard1.style.transition = `none`;
    newsCard2.style.transition = `none`;
    newsCard3.style.transition = `none`;
    newsCard4.style.transition = `none`;
    newsCard5.style.transition = `none`;
    newsCard6.style.transition = `none`;
    newsCard7.style.transition = `none`;
    newsCard8.style.transition = `none`;
    newsCard9.style.transition = `none`;
    newsCard10.style.transition = `none`;
    newsCard11.style.transition = `none`;
    newsCard12.style.transition = `none`;

    newsCard1.classList.toggle(`section-hover-effect`);
    newsCard2.classList.toggle(`section-hover-effect`);
    newsCard3.classList.toggle(`section-hover-effect`);
    newsCard4.classList.toggle(`section-hover-effect`);
    newsCard5.classList.toggle(`section-hover-effect`);
    newsCard6.classList.toggle(`section-hover-effect`);
    newsCard7.classList.toggle(`section-hover-effect`);
    newsCard8.classList.toggle(`section-hover-effect`);
    newsCard9.classList.toggle(`section-hover-effect`);
    newsCard10.classList.toggle(`section-hover-effect`);
    newsCard11.classList.toggle(`section-hover-effect`);
    newsCard12.classList.toggle(`section-hover-effect`);

    setTimeout(() => {
      /* reinserisco la transition */

      newsCard1.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard2.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard3.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard4.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard5.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard6.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard7.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard8.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard9.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard10.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard11.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;
      newsCard12.style.transition = `transform 0.3s linear, box-shadow 0.3s linear,
    z-index 0.3s ease-in`;

      newsCard1.classList.toggle(`section-hover-effect`);
      newsCard2.classList.toggle(`section-hover-effect`);
      newsCard3.classList.toggle(`section-hover-effect`);
      newsCard4.classList.toggle(`section-hover-effect`);
      newsCard5.classList.toggle(`section-hover-effect`);
      newsCard6.classList.toggle(`section-hover-effect`);
      newsCard7.classList.toggle(`section-hover-effect`);
      newsCard8.classList.toggle(`section-hover-effect`);
      newsCard9.classList.toggle(`section-hover-effect`);
      newsCard10.classList.toggle(`section-hover-effect`);
      newsCard11.classList.toggle(`section-hover-effect`);
      newsCard12.classList.toggle(`section-hover-effect`);
    }, 100);
  }
}
/* FINE SEZIONE ULTIME NOVITA' */
