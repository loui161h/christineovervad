const endpoint = "http://louisesettrup.dk/kea/2sem/10_eksamensprojekt/christineovervad/wordpress/wp-json/wp/v2/project/339";
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

function vis(project) {
    /* VARIABLE ÆNDRE SIG EFTER HVAD SIDE DET ER */
    console.log(project);
    document.querySelector("#project_heading").textContent = project.title.rendered;
    /* HUSK VARIBEL HER */


    document.querySelector("#project_tekst1").textContent = project.tekst1;
    document.querySelector("#photo1").src = project.img1.guid;
    document.querySelector("#photo2").src = project.img2.guid;
    document.querySelector("#photo3").src = project.img3.guid;
    document.querySelector("#photo4").src = project.img4.guid;
    document.querySelector("#photo5").src = project.img5.guid;
    document.querySelector("#photo6").src = project.img6.guid;
    document.querySelector("#photo7").src = project.img7.guid;

    document.querySelector("#project_tekst2").textContent = project.tekst2;
    document.querySelector("#project_tekst3").textContent = project.tekst3;
    document.querySelector("#project_tekst4").textContent = project.tekst4;

}
