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
