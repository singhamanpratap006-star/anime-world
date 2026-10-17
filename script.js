// ============================================
// ANIME WORLD — WEBSITE JAVASCRIPT
// Homepage Search + Anime Details
// ============================================

document.addEventListener("DOMContentLoaded", function () {

    // ========================================
    // PART 1: HOMEPAGE SEARCH
    // ========================================

    const searchInput = document.getElementById("animeSearch");
    const animeCards = document.querySelectorAll(".anime-card");
    const noResults = document.getElementById("noResults");

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


    // ========================================
    // PART 2: ANIME DETAILS PAGE
    // ========================================

    const animeTitle = document.getElementById("animeTitle");
    const mainCharacter = document.getElementById("mainCharacter");
    const animeFamousFor = document.getElementById("animeFamousFor");
    const animeDescription = document.getElementById("animeDescription");
    const exploreCharacters = document.getElementById("exploreCharacters");

    // Information for all 10 anime
    const animeData = {

        "one-piece": {
            name: "ONE PIECE",
            character: "Monkey D. Luffy",
            famousFor: "Adventure, friendship, pirates, and the search for the legendary One Piece treasure.",
            description: "Join Luffy and his crew as they sail across dangerous seas, discover mysterious islands, and pursue their dreams of freedom and adventure."
        },

        "naruto": {
            name: "NARUTO",
            character: "Naruto Uzumaki",
            famousFor: "Ninja battles, determination, friendship, and never giving up.",
            description: "Follow Naruto's journey from an underestimated young ninja to someone determined to earn the respect of his village and become Hokage."
        },

        "jujutsu-kaisen": {
            name: "JUJUTSU KAISEN",
            character: "Satoru Gojo",
            famousFor: "Cursed energy, supernatural battles, powerful sorcerers, and spectacular fight scenes.",
            description: "Enter a dangerous world where sorcerers fight cursed spirits. Yuji Itadori becomes involved in a conflict that challenges his strength, values, and determination."
        },

        "attack-on-titan": {
            name: "ATTACK ON TITAN",
            character: "Eren Yeager",
            famousFor: "Titan battles, mysteries, intense storytelling, and shocking revelations.",
            description: "Humanity struggles to survive behind enormous walls while uncovering disturbing truths about the Titans and the world beyond their home."
        },

        "demon-slayer": {
            name: "DEMON SLAYER",
            character: "Tanjiro Kamado",
            famousFor: "Beautiful animation, sword fights, breathing techniques, and emotional storytelling.",
            description: "Tanjiro joins the Demon Slayer Corps after tragedy strikes his family. He fights demons while searching for a way to help his sister Nezuko."
        },

        "death-note": {
            name: "DEATH NOTE",
            character: "Light Yagami",
            famousFor: "Psychological warfare, mind games, moral dilemmas, and strategic battles of intelligence.",
            description: "A brilliant student discovers a notebook with the power to kill anyone whose name is written in it, beginning a dangerous battle of intelligence and justice."
        },

        "classroom-of-the-elite": {
            name: "CLASSROOM OF THE ELITE",
            character: "Kiyotaka Ayanokoji",
            famousFor: "Psychological manipulation, strategic thinking, competition, and hidden abilities.",
            description: "At an elite school where students compete for status and privileges, Kiyotaka Ayanokoji carefully navigates a system built around competition and deception."
        },

        "dragon-ball": {
            name: "DRAGON BALL",
            character: "Goku",
            famousFor: "Powerful transformations, martial arts, legendary battles, and continuous self-improvement.",
            description: "Follow Goku and his friends as they face powerful opponents, protect their world, and continually push beyond their limits."
        },

        "solo-leveling": {
            name: "SOLO LEVELING",
            character: "Sung Jinwoo",
            famousFor: "Leveling up, dungeon battles, shadow soldiers, and an underdog's rise to power.",
            description: "After a mysterious system gives him the ability to grow stronger, Sung Jinwoo begins a remarkable journey from a weak hunter toward overwhelming power."
        },

        "bleach": {
            name: "BLEACH",
            character: "Ichigo Kurosaki",
            famousFor: "Soul Reapers, spiritual powers, sword battles, and powerful transformations.",
            description: "Ichigo Kurosaki gains the powers of a Soul Reaper and becomes involved in dangerous battles to protect humans and the spiritual world."
        }

    };


    // Read the selected anime from the page URL
    const urlParameters = new URLSearchParams(window.location.search);
    const animeKey = urlParameters.get("anime");

    // Find the matching anime information
    if (animeTitle) {

        const anime = animeData[animeKey];

        if (anime) {

            animeTitle.textContent = anime.name;
            mainCharacter.textContent = anime.character;
            animeFamousFor.textContent = anime.famousFor;
            animeDescription.textContent = anime.description;

            // Send the selected anime to the Characters page
            if (exploreCharacters) {
                exploreCharacters.href =
                    "characters.html?anime=" + encodeURIComponent(animeKey);
            }

            // Update the browser tab title
            document.title = anime.name + " | Anime World";

        } else {

            animeTitle.textContent = "ANIME NOT FOUND";
            mainCharacter.textContent = "No information available.";
            animeFamousFor.textContent = "Please select an anime from the homepage.";
            animeDescription.textContent =
                "Return to the anime list and select an anime to explore its details.";

            if (exploreCharacters) {
                exploreCharacters.hidden = true;
            }

        }

    }

    console.log("Anime World is ready!");

});
