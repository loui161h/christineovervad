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
      document.querySelector("#poster2").src = exhibition.current_exhibition2.guid;
      document.querySelector("#poster3").src = exhibition.current_exhibition3.guid;

  }
