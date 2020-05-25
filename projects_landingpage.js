 const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/project_landingpage";
 let projects = [];
 let filter = "alle";
 const container = document.querySelector("main");
 const projectsTemplate = document.querySelector("template");
 /* const detalje = document.querySelector("#detalje");*/


 document.addEventListener("DOMContentLoaded", start);

 function start() {
     hentData();
     addEventListenersToButtons();
 }

 async function hentData() {
     const response = await fetch(endpoint);
     console.log(response);
     projects = await response.json();
     console.log(projects);
     visProjects();

 }

 //data fra array ligger i json fil - alledyr.json

 function visProjects() {
     container.innerHTML = "";


     projects.forEach((project) => {
         /* først henter data i json fil ret.content.rendered - efter pods hedder rettype fordi det hedder den i filtreringen i PODS */
         if (filter == "alle" || filter == project.rettype) {
             let klon = projectsTemplate.cloneNode(true).content;

             /* HENTET FRA PODS */
             klon.querySelector("img").src = project.billede.guid;



             klon.querySelector(".projects").addEventListener("click", () => {
                 visDetalje(project)
             });




             container.appendChild(klon);
         }
     })
 }
