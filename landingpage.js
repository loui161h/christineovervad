  const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/landingpage/146";
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

  function vis(landingpage) {
      /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
      console.log(landingpage);
      /* HUSK VARIBEL HER */
      document.querySelector("#splash").src = landingpage.billede.guid;
      document.querySelector("#landing_headline").innerHTML = landingpage.title.rendered;
      document.querySelector("#landing_headline2").innerHTML = landingpage.headline;


  }
