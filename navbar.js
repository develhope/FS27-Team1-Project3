/* INIZIO SEZIONE NAVBAR */

const aside = document.querySelector(".aside")
const nav = document.querySelector("#nav")

let ultimaPosizione = window.scrollY;
let nascosto = false;

window.addEventListener('scroll', () => {
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
})

//SIDEBAR
document.addEventListener('DOMContentLoaded', () => {
    const sidebarCont = document.getElementById('sidebar-container');
    const sidebar = document.getElementById('sidebar-content')
    const hellipBtn = document.querySelector('.hellip');
    const closeSidebarBtn = document.getElementById('close-sidebar');
  
    hellipBtn.addEventListener('click', () => {
      sidebar.classList.add('show'); 
      sidebarCont.classList.add('show')
      document.body.style.overflow = "hidden"
      if(nav.style.transform === "translateY(-40px)"){
        nav.style.transform = "translateY(0)";
      }
    });

    sidebarCont.addEventListener('click', (event) =>{
        sidebar.classList.remove('show'); 
        sidebarCont.classList.remove('show'); 
        document.body.style.overflow = "" 
        event.stopPropagation()
    })
  
    closeSidebarBtn.addEventListener('click', () => {
      sidebar.classList.remove('show'); 
      sidebarCont.classList.remove('show'); 
      document.body.style.overflow = ""
    });
  });


//GIOCHI
document.addEventListener('DOMContentLoaded', () => {
    const giochiBtn = document.getElementById('giochi-btn');
    let timeoutId;

    giochiBtn.addEventListener('mouseover', mostraLinks);
    giochiBtn.addEventListener('mouseout', nascondiLinkConDelay);

    function mostraLinks() {

        let container = document.querySelector('.link-container');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('link-container');

            const colonna1 = document.createElement('div');
            const colonna2 = document.createElement('div');
            colonna1.classList.add('colonna1')
            colonna2.classList.add('colonna1')
            container.appendChild(colonna1)
            container.appendChild(colonna2)

            const title = document.createElement('h3');
            title.textContent = 'ESPLORA I GIOCHI';
            title.classList.add('title')
            colonna1.appendChild(title);

            const divisore = document.createElement('div');
            divisore.classList.add('divisore')
            colonna1.appendChild(divisore)



            const links1 = [
                { href: '', text: 'Ultimi giochi' },
                { href: '', text: 'Prossimamente' },
                { href: '', text: 'Giochi gratuiti' },
                { href: '', text: 'EA SPORTS' },
                { href: '', text: 'EA Originals' },
                { href: '', text: 'Libreria dei giochi' },
                { href: '', text: 'Offerte EA App' },
            ];

            links1.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna1.appendChild(link);
            });

            const title2 = document.createElement('h3');
            title2.textContent = 'PIATTAFORME';
            title2.classList.add('title')
            colonna2.appendChild(title2);

            const divisore2 = document.createElement('div');
            divisore2.classList.add('divisore')
            colonna2.appendChild(divisore2)

            const links2 = [
                { href: '', text: 'PC' },
                { href: '', text: 'Playstation' },
                { href: '', text: 'Xbox' },
                { href: '', text: 'Nintendo Switch™' },
                { href: '', text: 'Dispositivi mobili' },
                { href: '', text: 'Pogo' },
            ];

            links2.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna2.appendChild(link);
            });


            giochiBtn.insertAdjacentElement('afterend', container);
        }
        container.classList.add('show');
        container.addEventListener('mouseover', () => clearTimeout(timeoutId));
        container.addEventListener('mouseout', nascondiLinkConDelay);
    }

    function nascondiLinkConDelay() {
        timeoutId = setTimeout(nascondiLink, 300);
    }

    function nascondiLink() {
        const container = document.querySelector('.link-container');
        if (container) {
            container.classList.remove('show');
        }
    }
});

//ESPERIENZE
document.addEventListener('DOMContentLoaded', () => {
    const esperienzeBtn = document.getElementById('esperienze-btn');
    let timeoutId;

    esperienzeBtn.addEventListener('mouseover', mostraLinks);
    esperienzeBtn.addEventListener('mouseout', nascondiLinkConDelay);

    function mostraLinks() {

        let container = document.querySelector('.link-container-esp');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('link-container-esp');

            const colonna1 = document.createElement('div');
            colonna1.classList.add('colonna1')
            container.appendChild(colonna1)
            




            const links1 = [
                { href: '', text: 'Per EA app' },
                { href: '', text: 'EA Play' },
                { href: '', text: 'Competizioni videoludiche' },
                { href: '', text: 'Test di gioco' },
            ];

            links1.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna1.appendChild(link);
            });


            esperienzeBtn.insertAdjacentElement('afterend', container);
        }
        container.classList.add('show');
        container.addEventListener('mouseover', () => clearTimeout(timeoutId));
        container.addEventListener('mouseout', nascondiLinkConDelay);
    }

    function nascondiLinkConDelay() {
        timeoutId = setTimeout(nascondiLink, 300);
    }

    function nascondiLink() {
        const container = document.querySelector('.link-container-esp');
        if (container) {
            container.classList.remove('show');
        }
    }
});


//INFORMAZIONI
document.addEventListener('DOMContentLoaded', () => {
    const infoBtn = document.getElementById('info-btn');
    let timeoutId;

    infoBtn.addEventListener('mouseover', mostraLinks);
    infoBtn.addEventListener('mouseout', nascondiLinkConDelay);

    function mostraLinks() {

        let container = document.querySelector('.link-container-info');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('link-container-info');

            const colonna1 = document.createElement('div');
            colonna1.classList.add('colonna1')
            container.appendChild(colonna1)
            




            const links1 = [
                { href: '', text: 'Società' },
                { href: '', text: 'Lavora con noi' },
                { href: '', text: 'Notizie' },
                { href: '', text: 'Tecnologia' },
                { href: '', text: 'EA Studios' },
                { href: '', text: 'Partner EA' },
            ];

            links1.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna1.appendChild(link);
            });


            infoBtn.insertAdjacentElement('afterend', container);
        }
        container.classList.add('show');
        container.addEventListener('mouseover', () => clearTimeout(timeoutId));
        container.addEventListener('mouseout', nascondiLinkConDelay);
    }

    function nascondiLinkConDelay() {
        timeoutId = setTimeout(nascondiLink, 300);
    }

    function nascondiLink() {
        const container = document.querySelector('.link-container-info');
        if (container) {
            container.classList.remove('show');
        }
    }
});


//IMPEGNI
document.addEventListener('DOMContentLoaded', () => {
    const impegniBtn = document.getElementById('impegni-btn');
    let timeoutId;

    impegniBtn.addEventListener('mouseover', mostraLinks);
    impegniBtn.addEventListener('mouseout', nascondiLinkConDelay);

    function mostraLinks() {

        let container = document.querySelector('.link-container-imp');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('link-container-imp');

            const colonna1 = document.createElement('div');
            colonna1.classList.add('colonna1')
            container.appendChild(colonna1)
            




            const links1 = [
                { href: '', text: 'I nostri impegni' },
                { href: '', text: 'Gioco positivo' },
                { href: '', text: 'Diversità e inclusione' },
                { href: '', text: 'Impatto sociale' },
                { href: '', text: 'Persone e cultura' },
                { href: '', text: 'Ambiente' },
            ];

            links1.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna1.appendChild(link);
            });


            impegniBtn.insertAdjacentElement('afterend', container);
        }
        container.classList.add('show');
        container.addEventListener('mouseover', () => clearTimeout(timeoutId));
        container.addEventListener('mouseout', nascondiLinkConDelay);
    }

    function nascondiLinkConDelay() {
        timeoutId = setTimeout(nascondiLink, 300);
    }

    function nascondiLink() {
        const container = document.querySelector('.link-container-imp');
        if (container) {
            container.classList.remove('show');
        }
    }
});


//RISORSE
document.addEventListener('DOMContentLoaded', () => {
    const risorseBtn = document.getElementById('risorse-btn');
    let timeoutId;

    risorseBtn.addEventListener('mouseover', mostraLinks);
    risorseBtn.addEventListener('mouseout', nascondiLinkConDelay);

    function mostraLinks() {

        let container = document.querySelector('.link-container-ris');

        if (!container) {
            container = document.createElement('div');
            container.classList.add('link-container-ris');

            const colonna1 = document.createElement('div');
            colonna1.classList.add('colonna1')
            container.appendChild(colonna1)
            




            const links1 = [
                { href: '', text: 'Aiuto' },
                { href: '', text: 'Forum' },
                { href: '', text: 'Filtro famiglia' },
                { href: '', text: 'Accessibilità' },
                { href: '', text: 'Stampa' },
                { href: '', text: 'Investitori' },
            ];

            links1.forEach(linkData => {
                const link = document.createElement('a');
                link.href = linkData.href;
                link.textContent = linkData.text;
                colonna1.appendChild(link);
            });


            risorseBtn.insertAdjacentElement('afterend', container);
        }
        container.classList.add('show');
        container.addEventListener('mouseover', () => clearTimeout(timeoutId));
        container.addEventListener('mouseout', nascondiLinkConDelay);
    }

    function nascondiLinkConDelay() {
        timeoutId = setTimeout(nascondiLink, 300);
    }

    function nascondiLink() {
        const container = document.querySelector('.link-container-ris');
        if (container) {
            container.classList.remove('show');
        }
    }
});