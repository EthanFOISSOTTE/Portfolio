document.addEventListener('DOMContentLoaded', function () {
    const btnTri = document.querySelector(".tri_connaissance");
    const allSkills = document.querySelectorAll(".skill div > div:not(.categorie_autre, .categorie_backend, .categorie_database, .categorie_devops, .categorie_dev_mobile, .categorie_programmation, .categorie_frontend, .categorie_game_engine, .categorie_ia)");

    let niveau = ["Tout", "Débutant", "Intermédiaire", "Avancé"];
    let index = 0;

    btnTri.addEventListener("click", function () {
        index = (index + 1) % niveau.length;
        let niveauSelectionne = niveau[index];
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