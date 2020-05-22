  const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/contact/70";
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

  function vis(contact) {
      /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
      console.log(contact);
      document.querySelector("#contact_heading").textContent = contact.title.rendered;
      /* HUSK VARIBEL HER */
      document.querySelector("#contact_heading2").textContent = contact.exhibition;
      document.querySelector("#contact_p1").textContent = contact.adress_exhibition;
      document.querySelector("#contact_p2").textContent = contact.contact_exhibition;;
      document.querySelector("#contact_heading3").textContent = contact.studio;
      document.querySelector("#contact_p3").textContent = contact.contact_studio;
      document.querySelector("#contact_p4").textContent = contact.adress_studio;;

  }
