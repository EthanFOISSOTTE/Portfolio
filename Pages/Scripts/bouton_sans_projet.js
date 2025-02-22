document.addEventListener("DOMContentLoaded", function () {
    const btnSansProjet = document.querySelector(".btn-sans-projet");
    const allSkills = document.querySelectorAll(".skill div > div:not(.categorie_autre, .categorie_backend, .categorie_database, .categorie_devops, .categorie_dev_mobile, .categorie_programmation, .categorie_frontend, .categorie_game_engine, .categorie_ia)");

    let isFiltered = false; // État du filtre

    btnSansProjet.addEventListener("click", function () {
        if (isFiltered) {
            // Réafficher tous les éléments
            allSkills.forEach(skill => {
                skill.style.display = "flex";
            });
            btnSansProjet.textContent = "Sans projet"; // Texte du bouton
            btnSansProjet.classList.remove("active"); // Retirer la classe active
        } else {
            // Filtrer les éléments
            allSkills.forEach(skill => {
                let SansProjet = skill.querySelector(".projet");

                if (SansProjet && SansProjet.textContent.trim() === "Projets github : Aucun") {
                    skill.style.display = "flex"; // Afficher ceux qui ont un projet
                } else {
                    skill.style.display = "none"; // Cacher ceux sans projet
                }
            });
            btnSansProjet.textContent = "Afficher tout"; // Texte du bouton
            btnSansProjet.classList.add("active"); // Ajouter la classe active
        }
        isFiltered = !isFiltered; // Inverser l'état du filtre
    });
});
