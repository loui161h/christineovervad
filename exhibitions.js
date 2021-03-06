  const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/exhibition/92";
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

  function vis(exhibition) {
      /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
      console.log(exhibition);
      document.querySelector("#exhibition_heading").textContent = exhibition.title.rendered;
      /* HUSK VARIBEL HER */
      document.querySelector("#exhibition_heading2").textContent = exhibition.current;
      document.querySelector("#poster1").src = exhibition.current_exhibition1.guid;
      document.querySelector("#where_exhibtion1").textContent = exhibition.exhibtion1;
      document.querySelector("#poster2").src = exhibition.current_exhibition2.guid;
      document.querySelector("#where_exhibtion2").textContent = exhibition.exhibtion2;
      document.querySelector("#poster3").src = exhibition.current_exhibition3.guid;
      document.querySelector("#where_exhibtion3").textContent = exhibition.exhibtion3;
      document.querySelector("#exhibition_heading3").textContent = exhibition.future;
      document.querySelector("#exhibition_heading4").textContent = exhibition.past;


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
