 const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/cv/73";
 /* PODETS NAVN I ENTAL OG ID'ET I ENDPOINT ÆNDRES AFHÆNGIG AF HVILKET POD/SIDE MAN VIL SE */



 document.addEventListener("DOMContentLoaded", start);

 function start() {
     hentData();
 }


 async function hentData() {
     const response = await fetch(endpoint);
     const json = await response.json();
     vis(json);
 }


 function vis(cv) {
     /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
     console.log(cv);
     document.querySelector("#cv_heading").textContent = cv.title.rendered;
     /* HUSK VARIBEL HER */

     document.querySelector("#cv_about").textContent = cv.about;
     document.querySelector("#cv_overskrift1").textContent = cv.overskrift1;
     document.querySelector("#cv_aar1").textContent = cv.aar1;
     document.querySelector("#cv_tekst1").textContent = cv.tekst1;

     document.querySelector("#cv_overskrift2").textContent = cv.overskrift2;
     document.querySelector("#cv_aar2").textContent = cv.aar2;
     document.querySelector("#cv_tekst2").textContent = cv.tekst2;
     document.querySelector("#cv_aar3").textContent = cv.aar3;
     document.querySelector("#cv_tekst3").textContent = cv.tekst3;
     document.querySelector("#cv_aar4").textContent = cv.aar4;
     document.querySelector("#cv_tekst4").textContent = cv.tekst4;
     document.querySelector("#cv_aar5").textContent = cv.aar5;
     document.querySelector("#cv_tekst5").textContent = cv.tekst5;

     document.querySelector("#cv_overskrift3").textContent = cv.overskrift3;
     document.querySelector("#cv_aar6").textContent = cv.aar6;
     document.querySelector("#cv_tekst6").textContent = cv.tekst6;
     document.querySelector("#cv_aar7").textContent = cv.aar7;
     document.querySelector("#cv_tekst7").textContent = cv.tekst7;

     document.querySelector("#cv_overskrift4").textContent = cv.overskrift4;
     document.querySelector("#cv_aar8").textContent = cv.aar8;
     document.querySelector("#cv_tekst8").textContent = cv.tekst8;

     document.querySelector("#cv_overskrift5").textContent = cv.overskrift5;
     document.querySelector("#cv_aar9").textContent = cv.aar9;
     document.querySelector("#cv_tekst9").textContent = cv.tekst9;
     document.querySelector("#cv_aar10").textContent = cv.aar10;
     document.querySelector("#cv_tekst10").textContent = cv.tekst10;
     document.querySelector("#cv_aar11").textContent = cv.aar11;
     document.querySelector("#cv_tekst11").textContent = cv.tekst11;
     document.querySelector("#cv_aar12").textContent = cv.aar12;
     document.querySelector("#cv_tekst12").textContent = cv.tekst12;



     document.querySelector("#cv_overskrift6").textContent = cv.overskrift6;
     document.querySelector("#cv_underoverskrift1").textContent = cv.underoverskrift1;
     document.querySelector("#cv_aar13").textContent = cv.aar13;
     document.querySelector("#cv_tekst13").textContent = cv.tekst13;
     document.querySelector("#cv_aar14").textContent = cv.aar14;
     document.querySelector("#cv_tekst14").textContent = cv.tekst14;
     document.querySelector("#cv_aar15").textContent = cv.aar15;
     document.querySelector("#cv_tekst15").textContent = cv.tekst15;
     document.querySelector("#cv_aar16").textContent = cv.aar16;
     document.querySelector("#cv_tekst16").textContent = cv.tekst16;


     document.querySelector("#cv_underoverskrift2").textContent = cv.underoverskrift2;
     document.querySelector("#cv_aar17").textContent = cv.aar17;
     document.querySelector("#cv_tekst17").textContent = cv.tekst17;
     document.querySelector("#cv_aar18").textContent = cv.aar18;
     document.querySelector("#cv_tekst18").textContent = cv.tekst18;



     document.querySelector("#cv_underoverskrift3").textContent = cv.underoverskrift3;
     document.querySelector("#cv_aar19").textContent = cv.aar19;
     document.querySelector("#cv_tekst19").textContent = cv.tekst19;
     document.querySelector("#cv_aar20").textContent = cv.aar20;
     document.querySelector("#cv_tekst20").textContent = cv.tekst20;
     document.querySelector("#cv_aar21").textContent = cv.aar21;
     document.querySelector("#cv_tekst21").textContent = cv.tekst21;
     document.querySelector("#cv_aar22").textContent = cv.aar22;
     document.querySelector("#cv_tekst22").textContent = cv.tekst22;
     document.querySelector("#cv_aar23").textContent = cv.aar23;
     document.querySelector("#cv_tekst23").textContent = cv.tekst23;
     document.querySelector("#cv_aar24").textContent = cv.aar24;
     document.querySelector("#cv_tekst24").textContent = cv.tekst24;
     document.querySelector("#cv_aar25").textContent = cv.aar25;
     document.querySelector("#cv_tekst25").textContent = cv.tekst25;
     document.querySelector("#cv_aar26").textContent = cv.aar26;
     document.querySelector("#cv_tekst26").textContent = cv.tekst26;
     document.querySelector("#cv_aar27").textContent = cv.aar27;
     document.querySelector("#cv_tekst27").textContent = cv.tekst27;


 }
 //TOP KNAP//

 var mybutton = document.getElementById("myBtn");

 // Når brugeren scroller 20 px ned fra toppen, vises knappen//
 window.onscroll = function () {
     scrollFunction()
 };

 function scrollFunction() {
     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         mybutton.style.display = "block";
     } else {
         mybutton.style.display = "none";
     }
 }

 // Når man klikker på knappen, kommer man til toppen//
 function topFunction() {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
 }
