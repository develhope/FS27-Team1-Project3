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

arrayInLocale.forEach((notizia) => {
  const oggettoNotizia = {
    imagesrc: notizia.imagesrc,
    imagealt: notizia.imagealt,
    autore: notizia.autore,
    data: notizia.data,
    titolo: notizia.titolo,
    didascalia: notizia.didascalia,
  };

  arrayNotiziePerCondivisione.push(oggettoNotizia);
});

// arrayNotiziePerCondivisione = `${arrayNotiziePerCondivisione}`

arrayDiOggetti.innerHTML = `<span class="pink">const</span> <span class="violet">arrayDiNotizie</span> <span class="pink"> = </span> ${JSON.stringify(
  arrayNotiziePerCondivisione
)}`;

console.log(JSON.parse(localStorage.getItem("notizie-ea")));

const obj = [
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ultime_tecnologie.png",
    imagealt: "Ultime Tecnologie",
    autore: "Electronic Arts Inc.",
    data: "8-mag-2024",
    titolo: "Le ultime innovazioni tecnologiche di EA SPORTS",
    didascalia:
      "Uno sguardo ai più grandi progressi tecnologici di Electronic Arts mentre ci prepariamo per un altro anno all'insegna dell'innovazione.",
  },
  {
    imagesrc: "../immagini/parallelepipedi_verdi.png",
    imagealt: "Parallelepipedi Verdi",
    autore: "Electronic Arts Inc.",
    data: "9-apr-2024",
    titolo:
      "Cambiare le carte in tavola: una tecnologia rivoluzionaria per il patching ...",
    didascalia:
      "Hans van Veenendaal di EA ha creato una rivoluzionaria tecnologia per le patch di gioco con cui ridurre tempi e costi, e incoraggiare la sostenibilità.",
  },
  {
    imagesrc: "../immagini/sfondo_battlefield.jpg",
    imagealt: "Battlefield",
    autore: "Battlefield 2042",
    data: "9-apr-2024",
    titolo:
      "Un aggiornamento su Battlefield 2042 e un benvenuto nel team a Motive Stud...",
    didascalia:
      "Il team di Battlefield si amplia mentre guardiamo al futuro della serie",
  },
  {
    imagesrc: "../immagini/parallelepipedi_viola.png",
    imagealt: "Parallelepipedi Viola",
    autore: "Electronic Arts Inc.",
    data: "27-mar-2024",
    titolo:
      "Il viaggio di Kate Kellogg alla guida del futuro videoludico di Electronic ...",
    didascalia:
      "Il viaggio di Kate Kellogg come direttrice operativa di EA Studios, in cui approfondiremo il suo percorso di leadership, il suo stile collaborativo e le sue idee sul futuro dei videogiochi.",
  },
  {
    imagesrc: "../immagini/pc_the_sims.png",
    imagealt: "Pc con the sims",
    autore: "Electronic Arts Inc.",
    data: "26-mar-2024",
    titolo: "La nuovissima EA app per Mac",
    didascalia:
      "A breve EA app prenderà il posto di Origin come piattaforma principale per Mac.",
  },
  {
    imagesrc: "../immagini/tre_sims.jpg",
    imagealt: "Tre Sims",
    autore: "Maxis",
    data: "25-mar-2024",
    titolo:
      "Come The Sims e i suoi partner stanno promuovendo diversità e rappresentazi...",
    didascalia:
      'Maxis inaugura una collaborazione con Dark & Lovely e Danielle "Ebonix" Udogaranya per aiutare altri giocatori a riconoscersi nel gioco',
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/donne_nello_sport.jpg",
    imagealt: "Donne nello Sport",
    autore: "Electronic Arts Inc.",
    data: "22-mar-2024",
    titolo:
      "EA SPORTS: i nostri continui sforzi per sostenere le donne nello sport e ne...",
    didascalia:
      "Celebriamo le donne straordinare nei nostri studi, nei nostri videogiochi e nelle nostre industrie ed evidenziando i nostri continui impegni di inclusione.",
  },
  {
    imagesrc: "../immagini/parallelepipedi_viola.png",
    imagealt: "Parallelepipedi viola",
    autore: "Electronic Arts Inc.",
    data: "20-mar-2024",
    titolo:
      "Dentro lo straordinario viaggio verso la leadership di Kate Gorman",
    didascalia:
      "Scopri il mandato di Kate Gorman come vicepresidentessa e direttrice generale di The Sims, esplorando i traguardi della sua carriera e l'innovazione nell'intrattenimento interattivo.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/parallelepipedi_arancioni.png",
    imagealt: "Parallelepipedi Arancioni",
    autore: "Electronic Arts Inc.",
    data: "14-mar-2024",
    titolo:
      "Tiffany Everett: vita di una responsabile globale dei social media di EA SP...",
    didascalia:
      "Scopri il percorso professionale di Tiffany Everett, responsabile globale dei social media di EA SPORTS, com'è lavorare al Super Bowl e perchè stringere rapporti professionali è fondamentale.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/parallelepipedi_arancioni.png",
    imagealt: "Parallelepipedi Arancioni",
    autore: "Electronic Arts Inc.",
    data: "13-mar-2024",
    titolo:
      "Celebriamo la leadership femminile nei videogiochi con Charity Joy",
    didascalia:
      "Esplora il viaggio di Charity Joy da produttrice e direttrice generale di EA, le sue idee sulla diversità nei videogiochi e sul futuro dell'industria",
  },
  {
    imagesrc: "../immagini/parallelepipedi_verdi.png",
    imagealt: "Parallelepipedi Verdi",
    autore: "Electronic Arts Inc.",
    data: "12-mar-2024",
    titolo:
      "EA parla di grafica, gameplay e tecnologia generativa alla GDC 2024",
    didascalia:
      "Non perderti gli incontri alla GDC 2024 con ingegneri, scienziati e artisti tecnici di Electronic Arts.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/field_the_future.jpg",
    imagealt: "Field the Future",
    autore: "Electronic Arts Inc.",
    data: "11-mar-2024",
    titolo:
      '"EA SPORTS Madden presents Field the Future" scatena tutto il proprio impat...',
    didascalia:
      'Scopri il programma "EA SPORTS Madden presents Field the Future" a sostegno delle donne nello sport. Oltre che sui giochi, lasciamo il segno sulla società.',
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/parallelepipedi_arancioni.png",
    imagealt: "Parallelepipedi Arancioni",
    autore: "Electronic Arts Inc.",
    data: "8-mar-2024",
    titolo:
      "In testa alla carica: il percorso di Rebecka Coutaz verso l'eccellenza dei ...",
    didascalia:
      "Scopri il viaggio e la filosofia di Rebecka Coutaz, vicepresidentessa e direttrice generale di DICE, e il ruolo delle donne nel plasmare il futuro dei videogiochi.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/studiare.jpg",
    imagealt: "Studiare",
    autore: "Electronic Arts Inc.",
    data: "16-feb-2024",
    titolo:
      "Come EA SPORTS incoraggia la rappresentazione della comunità nera nei corsi...",
    didascalia:
      "Scopri di più sulla nostra collaborazione con Ethọ́s Lab, un'organizzazione fondata da giovani neri con lo scopo di includere e rappresentare la comunità nera nei corsi di studio STEAM.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/campo_da_calcio.jpeg",
    imagealt: "Campo da Calcio",
    autore: "Electronic Arts Inc.",
    data: "9-feb-2024",
    titolo: "EA SPORTS FC™ - Vita nel team",
    didascalia:
      "Scopri dal team di sviluppo di EA SPORTS FC cosa si prova a lavorare nel team",
  },
  {
    imagesrc: "../immagini/parallelepipedi_verdi.png",
    imagealt: "Parallelepipedi Verdi",
    autore: "Electronic Arts Inc.",
    data: "18-gen-2024",
    titolo: "Sbloccare opportunità: uno sguardo sulla vita in EA",
    didascalia:
      "Kirk Chavarie, reclutatore di Electronic Arts, condivide la sua conoscenza sulla cultura, i valori e le opportunità di crescita lavorativa dell'azienda",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/frostbite.png",
    imagealt: "Frostbite",
    autore: "Frostbite",
    data: "18-dic-2023",
    titolo:
      "Annunciato un nuovo look e nuovo futuro per il motore Frostbite di EA",
    didascalia:
      "Il rebranding del Frostbite da parte di Electronic Arts nel 2024 segna un'era nuova e più collaborativa per il suo motore di gioco all'avanguardia.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/casa_the_sims_4.jpg",
    imagealt: "Casa The Sims 4",
    autore: "Maxis",
    data: "14-dic-2023",
    titolo: "Dietro The Sims 4 In Affitto Expansion Pack",
    didascalia:
      "I progettisti di Maxis svelano come i nuovi immobili in locazione adattano la narrazione tipica di The Sims alla vita multifamiliare.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/year_in_review_2023.png",
    imagealt: "Year in Review",
    autore: "Electronic Arts Inc.",
    data: "13-dic-2023",
    titolo: "Festeggiamo un anno importante per EA SPORTS",
    didascalia:
      "È stato un anno importante per EA Sports e vogliamo riflettere su alcuni dei nostri più grandi successi e sforzi riguardo ai nostri giochi, alle nostre community e ai nostri team mentre ci avviamo verso il nuovo anno.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ea_banner_completo.png",
    imagealt: "Cubo Sfera Piramide",
    autore: "Electronic Arts Inc.",
    data: "13-dic-2023",
    titolo:
      'Electronic Arts è stata nominata in diverse classifiche dei "Migliori ambie...',
    didascalia:
      "Electronic Arts è stata premiata per la qualità del suo ambiente di lavoro.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ea_banner_completo.png",
    imagealt: "Cubo Sfera Piramide",
    autore: "Electronic Arts Inc.",
    data: "1-dic-2023",
    titolo: "Electronic Arts continua a promuovere il gioco inclusivo",
    didascalia:
      "EA rende open source il suo strumento IRIS per la fotosensibilità e aggiunge quattro brevetti aggiuntivi al suo impegno in materia di brevetti per l'accessibilità.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/managers.png",
    imagealt: "Managers",
    autore: "Electronic Arts Inc.",
    data: "22-nov-2023",
    titolo: "Creazione dell'esperienza visiva di EA SPORTS Madden NFL 24",
    didascalia:
      "Preparati a conoscere Terrance e Shelley, due membri del team Tiburon VisX che si impegnano a offrire ai nostri giocatori di EA SPORTS Madden NFL 24 l'esperienza visiva più autentica e coinvolgente di sempre.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/positive_player_awards.png",
    imagealt: "Positive Player Award",
    autore: "Electronic Arts Inc.",
    data: "26-ott-2023",
    titolo:
      "Continuiamo a promuovere i valori sportivi con l'EA Positive Player Award",
    didascalia:
      "Celebriamo la sportività con il Positive Player Award di EA SPORTS. Premiamo i concorrenti degli eSport che si impegnano a giocare in modo positivo.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/parallelepipedi_arancioni.png",
    imagealt: "Parallelepipedi Arancioni",
    autore: "Electronic Arts Inc.",
    data: "18-ott-2023",
    titolo: "L'arte della distruzione",
    didascalia:
      'Nel mondo in continua evoluzione dei videogiochi, dove nascono universi digitali, esiste un gruppo di artigiani misconosciuti noti come "artisti della distruzione"',
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/bar.jpg",
    imagealt: "Dipendenti al Bar",
    autore: "Electronic Arts Inc.",
    data: "18-ott-2023",
    titolo:
      "Tre studi EA ottengono riconoscimenti come migliori ambienti di lavoro negl...",
    didascalia:
      "GamesIndutry.biz premia Maxis, Ripple Effect e Cliffhanger per aver reso l'industria dei videogiochi un posto migliore in cui lavorare.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/criterion.png",
    imagealt: "Criterion",
    autore: "Electronic Arts Inc.",
    data: "20-set-2023",
    titolo: "Criterion Games si unisce a EA Entertainment",
    didascalia:
      "Lo studio si unisce ai nostri fenomenali developer di Battlefield.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ea_rubik.jpg",
    imagealt: "EA vetro e rubik",
    autore: "Electronic Arts Inc",
    data: "14-set-2023",
    titolo: "Condividiamo il nostro rapporto sull'impatto del 2023",
    didascalia:
      "Come EA sta creando valore duraturo per i nostri dipendenti, i nostri utenti, la nostra società e il pianeta.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/positive_player_awards.png",
    imagealt: "Positive Player Award",
    autore: "Electronic Arts Inc.",
    data: "10-set-2023",
    titolo: "Verhulst vince il Positive Player Award di Electronic Arts",
    didascalia:
      "L'EA Positive Player Award premia i finalisti degli esport che hanno innalzato la cultura del gioco e celebra il loro contributo alla positività, al livello di abilità e all'impatto per la community della ALGS.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ea_banner_completo.png",
    imagealt: "Cubo Sfera Piramide",
    autore: "Electronic Arts Inc.",
    data: "7-set-2023",
    titolo: "La nuovissima EA app per Mac",
    didascalia:
      "A breve EA app prenderà il posto di Origin come piattaforma principale per Mac.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/positive_player_awards.png",
    imagealt: "Positive Player Award",
    autore: "Electronic Arts Inc.",
    data: "10-ago-2023",
    titolo: "Aprono le votazioni per il primo EA Positive Player Award",
    didascalia:
      "Il Positive Player Award di EA premia i finalisti degli esport che hanno innalzato la cultura del gioco e celebra il loro contributo alla positività, al livello di abilità e all'impatto per la community della ALGS.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ombrelloni.jpg",
    imagealt: "Team tra ombrelloni",
    autore: "Electronic Arts Inc.",
    data: "27-lug-2023",
    titolo: "Festeggiamo il futuro di EA con gli stagisti!",
    didascalia:
      "Organizziamo eventi dedicati agli stage che consentono a chi partecipa di conoscersi, collaborare, imparare e dare slancio alla propria carriera con EA.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/cliffhanger.png",
    imagealt: "Cliffhanger Games",
    autore: "Electronic Arts Inc.",
    data: "10-lug-2023",
    titolo: "Scopri Cliffhanger Games™",
    didascalia:
      "Ti presentiamo Cliffhanger Games™, un nuovo studio di EA che sta lavorando su un gioco d'azione e avventura per giocatore singolo tratto da Black Panther di Marvel.",
  },
  {
    imagesrc:
      "../news/immagini_sezione_news/notizie_ea/positive_player_awards.png",
    imagealt: "Positive Player Award",
    autore: "Electronic Arts Inc.",
    data: "5-lug-2023",
    titolo:
      "I giochi fanno emergere il meglio in noi, e noi vogliamo festeggiare",
    didascalia:
      "Il Positive Player Award di EA premia i giocatori di esport che hanno contribuito in maniera significativa a coltivare una cultura di gioco forte, positiva e sana.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/stanza_the_sims_4.png",
    imagealt: "Stanza The Sims",
    autore: "Maxis",
    data: "28-giu-2023",
    titolo: "Project Rene: playtest sulla nuova generazione di The Sims",
    didascalia:
      "Scopri come il team di Maxis dietro il nuovo titolo di The Sims coinvolge i fan nel processo di sviluppo",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/pride.jpg",
    imagealt: "Pride",
    autore: "Electronic Arts Inc.",
    data: "14-giu-2023",
    titolo: "Celebriamo la comunità LGBTQ+",
    didascalia:
      "EA è orgogliosa di celebrare la comunità LGBTQ+ e di sostenerla in questo Mese dell'orgoglio.",
  },
  {
    imagesrc: "../news/immagini_sezione_news/notizie_ea/ragazze.jpeg",
    imagealt: "Ragazze",
    autore: "Electronic Arts Inc.",
    data: "8-giu-2023",
    titolo: "Laboratorio di Girls Make GGames presso EA Stoccolma",
    didascalia:
      "In occasione della Giornata internazionale della donna e del Mese della storia delle donne, EA e Girls Make Games hanno organizzato un laboratorio per incoraggiare le future sviluppatrici di videogiochi.",
  },
];
