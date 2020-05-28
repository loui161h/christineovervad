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
     document.querySelector("#img2").src = projects_landingpage.img2.guid;
     document.querySelector("#img3").src = projects_landingpage.img3.guid;
     document.querySelector("#img4").src = projects_landingpage.img4.guid;
     document.querySelector("#img5").src = projects_landingpage.img5.guid;
     document.querySelector("#img6").src = projects_landingpage.img6.guid;
     document.querySelector("#img7").src = projects_landingpage.img7.guid;
     document.querySelector("#img8").src = projects_landingpage.img8.guid;
     document.querySelector("#img9").src = projects_landingpage.img9.guid;
     document.querySelector("#img10").src = projects_landingpage.img10.guid;
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
