document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".Search");
    const allSkills = document.querySelectorAll(".skill div > div");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.trim().toLowerCase();

        allSkills.forEach(skill => {
            const skillName = skill.querySelector("h3")?.textContent.toLowerCase();
            const categoryName = skill.className.toLowerCase();

            if (searchText === "" || (skillName && skillName.includes(searchText)) || categoryName.includes(searchText)) {
                skill.style.visibility = "visible"; // Garde l'espace réservé
                skill.style.height = "100px"; // Assure que la hauteur est conservée
                skill.style.margin = "10px"; // Garde l'espacement
            } else {
                skill.style.visibility = "hidden"; // Cache mais garde l'espace
                skill.style.height = "0"; // Réduit la hauteur pour éviter de voir des espaces vides
                skill.style.margin = "0"; // Supprime les marges pour éviter les trous
            }
        });
    });
});
