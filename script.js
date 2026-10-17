// ============================================
// ANIME WORLD — COMPLETE WEBSITE JAVASCRIPT
// Homepage + Anime Details + Characters
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

            const searchText = searchInput.value.trim().toLowerCase();
            let visibleCount = 0;

            animeCards.forEach(function (card) {
                const animeName = (card.dataset.name || "").toLowerCase();
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
    // PART 2: ANIME INFORMATION
    // ========================================

    const animeData = {

        "one-piece": {
            name: "ONE PIECE",
            character: "Monkey D. Luffy",
            famousFor: "Pirates, adventure, friendship and the search for the legendary One Piece treasure.",
            description: "Join Luffy and his crew as they explore dangerous seas, discover mysterious islands and pursue their dreams.",
            characters: [
                {
                    name: "Monkey D. Luffy",
                    symbol: "麦",
                    color: "#ff365e",
                    abilities: ["Gum-Gum Powers", "Gear Fifth", "Advanced Haki"],
                    description: "The determined captain of the Straw Hat Pirates who dreams of becoming the Pirate King."
                },
                {
                    name: "Roronoa Zoro",
                    symbol: "刀",
                    color: "#20c997",
                    abilities: ["Three-Sword Style", "King of Hell", "Armament Haki"],
                    description: "A powerful swordsman whose ambition is to become the world's greatest swordsman."
                },
                {
                    name: "Sanji",
                    symbol: "炎",
                    color: "#ffc857",
                    abilities: ["Diable Jambe", "Ifrit Jambe", "Sky Walk"],
                    description: "The Straw Hats' cook, known for his extraordinary kicking techniques and speed."
                },
                {
                    name: "Trafalgar Law",
                    symbol: "ROOM",
                    color: "#a78bfa",
                    abilities: ["Ope Ope no Mi", "ROOM", "Gamma Knife"],
                    description: "A strategic pirate captain who uses his Devil Fruit to manipulate space within his ROOM."
                },
                {
                    name: "Shanks",
                    symbol: "赤",
                    color: "#d93636",
                    abilities: ["Conqueror's Haki", "Swordsmanship", "Observation Haki"],
                    description: "A legendary pirate whose strength and influence command respect across the seas."
                }
            ]
        },

        "naruto": {
            name: "NARUTO",
            character: "Naruto Uzumaki",
            famousFor: "Ninja battles, determination, friendship and never giving up.",
            description: "Follow Naruto's journey from an underestimated young ninja to a respected leader.",
            characters: [
                {
                    name: "Naruto Uzumaki",
                    symbol: "火",
                    color: "#ff9f1c",
                    abilities: ["Rasengan", "Shadow Clones", "Sage Mode"],
                    description: "A determined ninja who refuses to abandon his dream of becoming Hokage."
                },
                {
                    name: "Sasuke Uchiha",
                    symbol: "写",
                    color: "#7b68ee",
                    abilities: ["Sharingan", "Chidori", "Rinnegan"],
                    description: "An exceptionally talented shinobi whose journey is shaped by revenge, ambition and redemption."
                },
                {
                    name: "Kakashi Hatake",
                    symbol: "忍",
                    color: "#9ca3af",
                    abilities: ["Chidori", "Copy Ninja Skills", "Lightning Blade"],
                    description: "A highly skilled ninja known for his intelligence, calm attitude and tactical abilities."
                },
                {
                    name: "Itachi Uchiha",
                    symbol: "暁",
                    color: "#e63946",
                    abilities: ["Tsukuyomi", "Amaterasu", "Susanoo"],
                    description: "A gifted shinobi whose mysterious decisions conceal a complicated and tragic past."
                },
                {
                    name: "Madara Uchiha",
                    symbol: "影",
                    color: "#b91c1c",
                    abilities: ["Sharingan", "Perfect Susanoo", "Wood Release"],
                    description: "One of the most formidable shinobi in history, driven by his vision of a different world."
                }
            ]
        },

        "jujutsu-kaisen": {
            name: "JUJUTSU KAISEN",
            character: "Satoru Gojo",
            famousFor: "Cursed energy, supernatural battles and powerful sorcerers.",
            description: "Enter a dangerous world where jujutsu sorcerers fight cursed spirits.",
            characters: [
                {
                    name: "Satoru Gojo",
                    symbol: "無",
                    color: "#42a5ff",
                    abilities: ["Limitless", "Six Eyes", "Unlimited Void"],
                    description: "An exceptionally powerful sorcerer whose techniques make him one of the strongest characters in the series."
                },
                {
                    name: "Yuji Itadori",
                    symbol: "虎",
                    color: "#ff6b35",
                    abilities: ["Superhuman Strength", "Divergent Fist", "Black Flash"],
                    description: "A compassionate fighter who enters the world of jujutsu after swallowing a dangerous cursed object."
                },
                {
                    name: "Megumi Fushiguro",
                    symbol: "影",
                    color: "#6474ff",
                    abilities: ["Ten Shadows Technique", "Divine Dogs", "Chimera Shadow Garden"],
                    description: "A talented sorcerer who uses shadow-based techniques to summon powerful shikigami."
                },
                {
                    name: "Nobara Kugisaki",
                    symbol: "釘",
                    color: "#ff5577",
                    abilities: ["Resonance", "Straw Doll Technique", "Hairpin"],
                    description: "A confident sorcerer who combines a hammer, nails and cursed energy in battle."
                },
                {
                    name: "Ryomen Sukuna",
                    symbol: "呪",
                    color: "#c62828",
                    abilities: ["Dismantle", "Cleave", "Malevolent Shrine"],
                    description: "A terrifyingly powerful curse known for his ruthless nature and devastating techniques."
                }
            ]
        },

        "attack-on-titan": {
            name: "ATTACK ON TITAN",
            character: "Eren Yeager",
            famousFor: "Titan battles, mysteries, intense storytelling and shocking revelations.",
            description: "Humanity fights for survival while uncovering the secrets behind the Titans and their world.",
            characters: [
                {
                    name: "Eren Yeager",
                    symbol: "進",
                    color: "#b52a32",
                    abilities: ["Attack Titan", "Founding Titan", "War Hammer Titan"],
                    description: "A determined young man whose pursuit of freedom changes the fate of the world."
                },
                {
                    name: "Mikasa Ackerman",
                    symbol: "刃",
                    color: "#c44e72",
                    abilities: ["ODM Combat", "Swordsmanship", "Ackerman Strength"],
                    description: "An exceptionally skilled soldier who protects the people she cares about."
                },
                {
                    name: "Levi Ackerman",
                    symbol: "兵",
                    color: "#a8b5c8",
                    abilities: ["Precision Combat", "ODM Mastery", "Exceptional Reflexes"],
                    description: "Humanity's strongest soldier, renowned for his speed, discipline and lethal combat skills."
                },
                {
                    name: "Armin Arlert",
                    symbol: "知",
                    color: "#e8c878",
                    abilities: ["Strategic Planning", "Colossal Titan", "Tactical Analysis"],
                    description: "A brilliant strategist whose intelligence helps humanity survive seemingly impossible situations."
                },
                {
                    name: "Reiner Braun",
                    symbol: "鎧",
                    color: "#b88a58",
                    abilities: ["Armored Titan", "Titan Regeneration", "Close Combat"],
                    description: "A powerful warrior whose physical strength is matched by a deeply conflicted inner life."
                }
            ]
        },

        "demon-slayer": {
            name: "DEMON SLAYER",
            character: "Tanjiro Kamado",
            famousFor: "Beautiful animation, sword fights, breathing techniques and emotional storytelling.",
            description: "Tanjiro joins the Demon Slayer Corps to fight demons and help his sister Nezuko.",
            characters: [
                {
                    name: "Tanjiro Kamado",
                    symbol: "水",
                    color: "#40c9b0",
                    abilities: ["Water Breathing", "Hinokami Kagura", "Enhanced Smell"],
                    description: "A compassionate swordsman who fights demons while searching for a cure for his sister."
                },
                {
                    name: "Nezuko Kamado",
                    symbol: "鬼",
                    color: "#ff75a0",
                    abilities: ["Blood Demon Art", "Explosive Blood", "Demon Regeneration"],
                    description: "Tanjiro's sister, who retains her affection for humans despite becoming a demon."
                },
                {
                    name: "Zenitsu Agatsuma",
                    symbol: "雷",
                    color: "#ffd43b",
                    abilities: ["Thunder Breathing", "First Form", "Extreme Speed"],
                    description: "A nervous but talented swordsman capable of extraordinary speed when his abilities emerge."
                },
                {
                    name: "Inosuke Hashibira",
                    symbol: "猪",
                    color: "#70b7d8",
                    abilities: ["Beast Breathing", "Dual Nichirin Swords", "Flexible Body"],
                    description: "An aggressive and unpredictable fighter who developed his own breathing style."
                },
                {
                    name: "Giyu Tomioka",
                    symbol: "凪",
                    color: "#4682b4",
                    abilities: ["Water Breathing", "Eleventh Form: Dead Calm", "Swordsmanship"],
                    description: "The Water Hashira, known for his quiet personality and exceptional swordsmanship."
                }
            ]
        },

        "death-note": {
            name: "DEATH NOTE",
            character: "Light Yagami",
            famousFor: "Psychological warfare, mind games and strategic battles of intelligence.",
            description: "A student discovers a supernatural notebook that can kill anyone whose name is written in it.",
            characters: [
                {
                    name: "Light Yagami",
                    symbol: "死",
                    color: "#b52b35",
                    abilities: ["Strategic Planning", "Manipulation", "Deductive Reasoning"],
                    description: "A brilliant student who uses the Death Note to pursue his own vision of justice."
                },
                {
                    name: "L Lawliet",
                    symbol: "L",
                    color: "#d1d5db",
                    abilities: ["Deduction", "Criminal Profiling", "Psychological Analysis"],
                    description: "An eccentric detective whose exceptional reasoning skills make him a formidable opponent."
                },
                {
                    name: "Ryuk",
                    symbol: "死神",
                    color: "#9a7bd1",
                    abilities: ["Shinigami Eyes", "Supernatural Longevity", "Death Note"],
                    description: "A Shinigami whose boredom leads him to drop a Death Note into the human world."
                },
                {
                    name: "Misa Amane",
                    symbol: "愛",
                    color: "#ff6fae",
                    abilities: ["Shinigami Eyes", "Death Note", "Investigation"],
                    description: "A famous model whose possession of a Death Note draws her into Light's plans."
                },
                {
                    name: "Near",
                    symbol: "N",
                    color: "#e5e7eb",
                    abilities: ["Logical Reasoning", "Investigation", "Strategic Analysis"],
                    description: "A highly intelligent investigator who works to uncover the identity of Kira."
                }
            ]
        },

        "classroom-of-the-elite": {
            name: "CLASSROOM OF THE ELITE",
            character: "Kiyotaka Ayanokoji",
            famousFor: "Psychological manipulation, strategic thinking and intense competition.",
            description: "Students compete in an elite school where intelligence, influence and strategy shape their futures.",
            characters: [
                {
                    name: "Kiyotaka Ayanokoji",
                    symbol: "心",
                    color: "#a8b5c8",
                    abilities: ["Strategic Planning", "Psychological Analysis", "Hand-to-Hand Combat"],
                    description: "A reserved student who conceals his extraordinary abilities behind an ordinary appearance."
                },
                {
                    name: "Kikyo Kushida",
                    symbol: "笑",
                    color: "#ff8fb1",
                    abilities: ["Social Intelligence", "Information Gathering", "Manipulation"],
                    description: "A socially skilled student whose friendly public personality hides a more complicated side."
                },
                {
                    name: "Suzune Horikita",
                    symbol: "学",
                    color: "#8c9eff",
                    abilities: ["Analytical Thinking", "Leadership", "Academic Excellence"],
                    description: "An ambitious student determined to prove her abilities and improve her class standing."
                },
                {
                    name: "Arisu Sakayanagi",
                    symbol: "王",
                    color: "#bd8cff",
                    abilities: ["Strategic Thinking", "Psychological Games", "Academic Intelligence"],
                    description: "A highly intelligent student who enjoys testing herself against formidable opponents."
                },
                {
                    name: "Kakeru Ryuen",
                    symbol: "龍",
                    color: "#d9534f",
                    abilities: ["Intimidation", "Manipulation", "Tactical Planning"],
                    description: "A ruthless class leader who uses pressure and unconventional strategies to gain an advantage."
                }
            ]
        },

        "dragon-ball": {
            name: "DRAGON BALL",
            character: "Goku",
            famousFor: "Martial arts, transformations, legendary battles and continuous self-improvement.",
            description: "Goku and his friends face powerful enemies while continually pushing beyond their limits.",
            characters: [
                {
                    name: "Goku",
                    symbol: "悟",
                    color: "#ff9f1c",
                    abilities: ["Kamehameha", "Ultra Instinct", "Instant Transmission"],
                    description: "A Saiyan warrior who constantly trains to become stronger and protect his friends."
                },
                {
                    name: "Vegeta",
                    symbol: "王",
                    color: "#4d8dff",
                    abilities: ["Final Flash", "Final Explosion", "Ultra Ego"],
                    description: "The proud Saiyan prince whose fierce rivalry with Goku drives his pursuit of strength."
                },
                {
                    name: "Gohan",
                    symbol: "飯",
                    color: "#a78bfa",
                    abilities: ["Masenko", "Special Beam Cannon", "Beast Form"],
                    description: "Goku's son, whose enormous potential combines with his desire to protect those he loves."
                },
                {
                    name: "Piccolo",
                    symbol: "魔",
                    color: "#42c98a",
                    abilities: ["Special Beam Cannon", "Regeneration", "Orange Piccolo"],
                    description: "A strategic Namekian warrior who becomes one of Earth's most important defenders."
                },
                {
                    name: "Frieza",
                    symbol: "帝",
                    color: "#d9a5ff",
                    abilities: ["Death Beam", "Death Ball", "Golden Form"],
                    description: "A ruthless galactic tyrant known for his immense power and devastating transformations."
                }
            ]
        },

        "solo-leveling": {
            name: "SOLO LEVELING",
            character: "Sung Jinwoo",
            famousFor: "Leveling up, dungeon battles, shadow soldiers and an underdog's rise to power.",
            description: "A hunter receives a mysterious system that allows him to grow stronger beyond ordinary limits.",
            characters: [
                {
                    name: "Sung Jinwoo",
                    symbol: "影",
                    color: "#875bff",
                    abilities: ["Shadow Extraction", "Shadow Exchange", "Monarch's Domain"],
                    description: "Once known as the weakest hunter, he gains extraordinary powers through a mysterious system."
                },
                {
                    name: "Cha Hae-In",
                    symbol: "劍",
                    color: "#f5cf6b",
                    abilities: ["Swordsmanship", "Exceptional Speed", "Mana Detection"],
                    description: "An elite hunter whose exceptional combat ability makes her one of Korea's strongest."
                },
                {
                    name: "Igris",
                    symbol: "騎",
                    color: "#b5a1ff",
                    abilities: ["Sword Combat", "Armored Defense", "Shadow Soldier Powers"],
                    description: "A powerful knight who becomes one of Jinwoo's most recognizable shadow solders."
