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
      /* BILLEDE HER */
      document.querySelector("#contact_overvad").src = contact.contact_img.guid;
      document.querySelector("#contact_heading").textContent = contact.title.rendered;
      document.querySelector("#contact_descriptiion").innerHTML = contact.contact_description;
      /* HUSK VARIBEL HER */
      document.querySelector("#contact_heading2").textContent = contact.exhibition;
      document.querySelector("#contact_street").textContent = contact.street_exhibition;
      document.querySelector("#contact_zip").textContent = contact.zip_exhibition;
      document.querySelector("#contact_country").textContent = contact.country_exhibition;
      document.querySelector("#contact_phone").textContent = contact.phone_exhibition;
      document.querySelector("#contact_email_exhibition").textContent = contact.email_exhibition;
      document.querySelector("#contact_web").textContent = contact.web_exhibition;


      document.querySelector("#contact_heading3").textContent = contact.studio;
      document.querySelector("#contact_studio").textContent = contact.contact_studio;
      document.querySelector("#contact_email_studio").textContent = contact.email_studio;

  }
