document.addEventListener("DOMContentLoaded", function () {
    const btnTri = document.querySelector(".minecraft-btn2");
    const allSkills = document.querySelectorAll(".skill div > div:not(.categorie_programmation, .categorie_frontend, .categorie_backend, .categorie_dev_mobile, .categorie_ia, .categorie_database, .categorie_devops, .categorie_game_engine, .categorie_autre)");

    let niveaux = ["Tout", "Débutant", "Intermédiaire", "Avancé"];
    let index = 0;

    btnTri.addEventListener("click", function () {
        index = (index + 1) % niveaux.length;
        let niveauSelectionne = niveaux[index];
        btnTri.textContent = `Connaissance : ${niveauSelectionne}`;

        allSkills.forEach(skill => {
            let niveau = skill.querySelector(".niveau")?.textContent;

            if (niveauSelectionne === "Tout" || (niveau && niveau.includes(niveauSelectionne))) {
                skill.style.display = "flex";
            } else {
                skill.style.display = "none";
            }
        });
    });
});
