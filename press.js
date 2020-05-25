  const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/press/74";
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

  function vis(press) {
      /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
      console.log(press);
      document.querySelector("#press_heading").textContent = press.title.rendered;
      /* HUSK VARIBEL HER */
      document.querySelector("#press_heading2").textContent = press.headline;
      document.querySelector("#press_reviews").textContent = press.reviews;
      document.querySelector("#press_review1").textContent = press.review1;
      document.querySelector("#press_review_year1").textContent = press.review_year1;

      document.querySelector("#press_review2").textContent = press.review2;
      document.querySelector("#press_interviews").textContent = press.interviews;
      document.querySelector("#press_interview1").textContent = press.interview1;
      document.querySelector("#press_interview_year1").textContent = press.interview_year1;

      document.querySelector("#press_photo_reportage").textContent = press.photo_reportage;

      document.querySelector("#press_reportage1").textContent = press.reportage1;
      document.querySelector("#press_reportage_year1").textContent = press.reportage_year1;
      document.querySelector("#press_grants").textContent = press.grants;
      document.querySelector("#press_grants1").textContent = press.grants1;
      document.querySelector("#press_grants_year1").textContent = press.grants_year1;

  }
