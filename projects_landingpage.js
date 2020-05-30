 const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/project_landingpage/376";
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


 function vis(projects_landingpage) {
     /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
     console.log(projects_landingpage);
     document.querySelector("#projects_landingpage_heading").textContent = projects_landingpage.title.rendered;
     /* HUSK VARIBEL HER */


     document.querySelector("#img1").src = projects_landingpage.img1.guid;
     document.querySelector("#projects_aar19").textContent = projects_landingpage.aar19;
     document.querySelector("#projects_udstilling19").textContent = projects_landingpage.udstilling19;

     document.querySelector("#img2").src = projects_landingpage.img2.guid;
     document.querySelector("#projects_aar18").textContent = projects_landingpage.aar18;
     document.querySelector("#projects_udstilling18").textContent = projects_landingpage.udstilling18;
     document.querySelector("#projects_udstilling18_2").textContent = projects_landingpage.udstilling18_2;


     document.querySelector("#img3").src = projects_landingpage.img3.guid;
     document.querySelector("#projects_aar17").textContent = projects_landingpage.aar17;
     document.querySelector("#projects_udstilling17").textContent = projects_landingpage.udstilling17;
     document.querySelector("#projects_udstilling17_2").textContent = projects_landingpage.udstilling17_2;


     document.querySelector("#img4").src = projects_landingpage.img4.guid;
     document.querySelector("#projects_aar16").textContent = projects_landingpage.aar16;
     document.querySelector("#projects_udstilling16").textContent = projects_landingpage.udstilling16;
     document.querySelector("#projects_udstilling16_2").textContent = projects_landingpage.udstilling16_2;
     document.querySelector("#projects_udstilling16_3").textContent = projects_landingpage.udstilling16_3;
     document.querySelector("#projects_udstilling16_4").textContent = projects_landingpage.udstilling16_4;





     document.querySelector("#img5").src = projects_landingpage.img5.guid;
     document.querySelector("#projects_aar15").textContent = projects_landingpage.aar15;
     document.querySelector("#projects_udstilling15").textContent = projects_landingpage.udstilling15;
     document.querySelector("#projects_udstilling15_2").textContent = projects_landingpage.udstilling15_2;
     document.querySelector("#projects_udstilling15_3").textContent = projects_landingpage.udstilling15_3;



     document.querySelector("#img6").src = projects_landingpage.img6.guid;
     document.querySelector("#projects_aar14").textContent = projects_landingpage.aar14;
     document.querySelector("#projects_udstilling14").textContent = projects_landingpage.udstilling14;
     document.querySelector("#projects_udstilling14_2").textContent = projects_landingpage.udstilling14_2;


     document.querySelector("#img7").src = projects_landingpage.img7.guid;
     document.querySelector("#projects_aar13").textContent = projects_landingpage.aar13;
     document.querySelector("#projects_udstilling13").textContent = projects_landingpage.udstilling13;
     document.querySelector("#projects_udstilling13_2").textContent = projects_landingpage.udstilling13_2;


     document.querySelector("#img8").src = projects_landingpage.img8.guid;
     document.querySelector("#projects_aar12").textContent = projects_landingpage.aar12;
     document.querySelector("#projects_udstilling12").textContent = projects_landingpage.udstilling12;

     document.querySelector("#img9").src = projects_landingpage.img9.guid;
     document.querySelector("#projects_aar11").textContent = projects_landingpage.aar11;
     document.querySelector("#projects_udstilling11").textContent = projects_landingpage.udstilling11;
     document.querySelector("#projects_udstilling11_2").textContent = projects_landingpage.udstilling11_2;


     document.querySelector("#img10").src = projects_landingpage.img10.guid;
     document.querySelector("#projects_aar09").textContent = projects_landingpage.aar09;
     document.querySelector("#projects_udstilling09").textContent = projects_landingpage.udstilling09;

     document.querySelector("#img11").src = projects_landingpage.img11.guid;
     document.querySelector("#img12").src = projects_landingpage.img12.guid;
     document.querySelector("#img13").src = projects_landingpage.img13.guid;
     document.querySelector("#img14").src = projects_landingpage.img14.guid;
     document.querySelector("#img15").src = projects_landingpage.img15.guid;
     document.querySelector("#img16").src = projects_landingpage.img16.guid;
     document.querySelector("#img17").src = projects_landingpage.img17.guid;
     document.querySelector("#img18").src = projects_landingpage.img18.guid;
     document.querySelector("#img19").src = projects_landingpage.img19.guid;
     document.querySelector("#img20").src = projects_landingpage.img20.guid;
     document.querySelector("#img21").src = projects_landingpage.img21.guid;
     document.querySelector("#img22").src = projects_landingpage.img22.guid;
     document.querySelector("#img23").src = projects_landingpage.img23.guid;
     document.querySelector("#img24").src = projects_landingpage.img24.guid;


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
