document.addEventListener("DOMContentLoaded", () => {
    const btnDeroulant = document.querySelector(".btn-deroulant");
    const categories = document.querySelectorAll("main .skill > div > div[class^='categorie']");
    const competences = document.querySelectorAll("main .skill > div > div:not([class^='categorie'])");

    let modeDeroulant = false;

    btnDeroulant.addEventListener("click", () => {
        modeDeroulant = !modeDeroulant;
        btnDeroulant.textContent = modeDeroulant ? "Désactiver mode déroulant" : "Activer mode déroulant";

        if (modeDeroulant) {
            // Activer le mode déroulant
            competences.forEach(comp => comp.style.display = "none"); // Masquer les compétences
            categories.forEach(cat => {
                cat.style.cursor = "pointer";
                const titre = cat.querySelector("h1");
                if (titre) titre.innerHTML = `▼ ${titre.textContent} ▼`; // Ajouter les chevrons
                cat.addEventListener("click", toggleCompetences);
            });
        } else {
            // Désactiver le mode déroulant
            competences.forEach(comp => comp.style.display = ""); // Réafficher toutes les compétences
            categories.forEach(cat => {
                cat.style.cursor = "default";
                const titre = cat.querySelector("h1");
                if (titre) titre.innerHTML = titre.textContent.replace(/▲|▼/g, "").trim(); // Supprimer les chevrons
                cat.removeEventListener("click", toggleCompetences);
            });
        }
    });

    function toggleCompetences(event) {
        if (!modeDeroulant) return; // Sécurité pour éviter un clic hors mode déroulant

        const categoryClass = event.currentTarget.className.replace("categorie_", ""); // Récupérer la catégorie
        const competencesAssociees = document.querySelectorAll(`main .skill > div > .${categoryClass}`);
        const titre = event.currentTarget.querySelector("h1");

        if (competencesAssociees[0].style.display === "none" || competencesAssociees[0].style.display === "") {
            competencesAssociees.forEach(comp => comp.style.display = "flex");
            if (titre) titre.innerHTML = `▲ ${titre.textContent.replace(/▲|▼/g, "").trim()} ▲`;
        } else {
            competencesAssociees.forEach(comp => comp.style.display = "none");
            if (titre) titre.innerHTML = `▼ ${titre.textContent.replace(/▲|▼/g, "").trim()} ▼`;
        }
    }
});
