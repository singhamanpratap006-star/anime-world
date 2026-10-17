// ANIME WORLD — HOMEPAGE INTERACTIONS

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("animeSearch");
    const animeCards = document.querySelectorAll(".anime-card");
    const noResults = document.getElementById("noResults");

    // Search anime by name
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value
                .trim()
                .toLowerCase();

            let visibleCount = 0;

            animeCards.forEach(function (card) {
                const animeName = card.dataset.name.toLowerCase();
                const matches = animeName.includes(searchText);

                card.hidden = !matches;

                if (matches) {
                    visibleCount++;
                }
            });

            if (noResults) {
                noResults.hidden = visibleCount !== 0;
            }
        });
    }

    console.log("Anime World is ready!");
});
