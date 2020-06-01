  const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/behind/69";
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

  function vis(behind) {
      /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
      console.log(behind);
      document.querySelector("#behind_heading").textContent = behind.title.rendered;
      /* HUSK VARIBEL HER */
      document.querySelector("#behind_heading2").textContent = behind.headline;
      document.querySelector("#behind_p1").textContent = behind.behind;
      document.querySelector("#behind_p2").textContent = behind.signup;

  }
