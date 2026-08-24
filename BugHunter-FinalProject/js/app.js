/*
    Bug Hunter - Phase 1
    Handles:
    - Player data
    - Difficulty selection
    - Category selection
    - Mission setup
    - Basic stats
*/

// ==============================
// PLAYER OBJECT
// ==============================

const player = {
    xp: 0,
    streak: 0,
    level: 1,
    bugsFixed: 0,
    correctAnswers: 0,
    totalAnswers: 0,
    bestStreak: 0,
    completedChallenges: [],
    selectedCategory: null,
    selectedDifficulty: "easy"
};
// ==============================
// SAVE PLAYER PROGRESS
// ==============================

function savePlayerProgress() {

    const saveData = {
        xp: player.xp,
        streak: player.streak,
        level: player.level,
        bugsFixed: player.bugsFixed,
        correctAnswers: player.correctAnswers,
        totalAnswers: player.totalAnswers,
        bestStreak: player.bestStreak,
        completedChallenges: player.completedChallenges
    };

    localStorage.setItem(
        "bugHunterProgress",
        JSON.stringify(saveData)
    );
}


// ==============================
// LOAD PLAYER PROGRESS
// ==============================

function loadPlayerProgress() {

    const savedData =
        localStorage.getItem("bugHunterProgress");

    if (!savedData) {
        return;
    }

    const progress =
        JSON.parse(savedData);

    player.xp =
        progress.xp || 0;

    player.streak =
        progress.streak || 0;

    player.level =
        progress.level || 1;

    player.bugsFixed =
        progress.bugsFixed || 0;

    player.correctAnswers =
        progress.correctAnswers || 0;

    player.totalAnswers =
        progress.totalAnswers || 0;

    player.bestStreak =
        progress.bestStreak || 0;
        player.completedChallenges =
    progress.completedChallenges || [];
}

// ==============================
// PAGE ELEMENTS
// ==============================

const difficultyButtons =
    document.querySelectorAll(".difficulty-button");

const categoryCards =
    document.querySelectorAll(".category-card");

const selectedDifficulty =
    document.getElementById("selectedDifficulty");

const missionDifficulty =
    document.getElementById("missionDifficulty");

const selectedCategory =
    document.getElementById("selectedCategory");

const missionButton =
    document.getElementById("missionButton");

const startButton =
    document.getElementById("startButton");


// ==============================
// DIFFICULTY SELECTION
// ==============================

function selectDifficulty(button) {

    difficultyButtons.forEach(function(item) {
        item.classList.remove("active");
    });

    button.classList.add("active");

    player.selectedDifficulty =
        button.dataset.difficulty;

    selectedDifficulty.textContent =
        capitalize(player.selectedDifficulty);

    missionDifficulty.textContent =
        capitalize(player.selectedDifficulty);
}


// ==============================
// CATEGORY SELECTION
// ==============================

function selectCategory(card) {

    categoryCards.forEach(function(item) {
        item.classList.remove("selected");
    });

    card.classList.add("selected");

    player.selectedCategory =
        card.dataset.category;

    selectedCategory.textContent =
        getCategoryName(player.selectedCategory);

    missionButton.disabled = false;
}


// ==============================
// PLAYER STATS
// ==============================

function updatePlayerStats() {

    document.getElementById("xpDisplay").textContent =
        player.xp;

    document.getElementById("streakDisplay").textContent =
        player.streak;

    document.getElementById("levelDisplay").textContent =
        player.level;

    document.getElementById("progressXP").textContent =
        player.xp;

    document.getElementById("bestStreak").textContent =
        player.bestStreak;

    document.getElementById("bugsFixed").textContent =
        player.bugsFixed;
document.getElementById("completedCount")
    .textContent =
    player.completedChallenges.length + " / " +
    challenges.length;
    updateAccuracy();
}


// ==============================
// ACCURACY
// ==============================

function updateAccuracy() {

    let accuracy = 0;

    if (player.totalAnswers > 0) {
        accuracy = Math.round(
            (player.correctAnswers / player.totalAnswers) * 100
        );
    }

    document.getElementById("accuracy").textContent =
        accuracy + "%";
}


// ==============================
// HELPER FUNCTIONS
// ==============================

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function getCategoryName(category) {

    const categoryNames = {
        syntax: "Syntax Errors",
        variables: "Variables",
        functions: "Functions",
        arrays: "Arrays",
        objects: "Objects",
        dom: "DOM Bugs"
    };

    return categoryNames[category];
}


let currentChallenge = null;
let selectedAnswer = null;
let answerSubmitted = false;

// ==============================
// START MISSION
// ==============================

function beginMission() {

    if (!player.selectedCategory) {
        alert("Please select a category first.");
        return;
    }

    loadChallenge();
}
// ==============================
// LOAD CHALLENGE
// ==============================

function loadChallenge() {

    const availableChallenges = challenges.filter(
        function(challenge) {

            return (
                challenge.category ===
                    player.selectedCategory &&
                challenge.difficulty ===
                    player.selectedDifficulty
            );

        }
    );


    if (availableChallenges.length === 0) {

        alert("No challenges were found.");

        return;
    }


    let unusedChallenges = availableChallenges.filter(
        function(challenge) {

            return !player.completedChallenges.includes(
                challenge.id
            );

        }
    );


    // If all matching challenges have been completed,
    // allow them to cycle again.
    if (unusedChallenges.length === 0) {

        unusedChallenges = availableChallenges;

    }


    let randomChallenge;


    do {

        const randomIndex =
            Math.floor(
                Math.random() *
                unusedChallenges.length
            );


        randomChallenge =
            unusedChallenges[randomIndex];


    } while (
        currentChallenge &&
        unusedChallenges.length > 1 &&
        randomChallenge.id === currentChallenge.id
    );


    currentChallenge = randomChallenge;

    selectedAnswer = null;
answerSubmitted = false;

    displayChallenge(currentChallenge);
}


// ==============================
// DISPLAY CHALLENGE
// ==============================

function displayChallenge(challenge) {

    const challengeArea =
        document.getElementById("challengeArea");


    challengeArea.classList.remove("hidden");


    document.getElementById("challengeTitle")
        .textContent = challenge.title;


    document.getElementById("challengeCategory")
        .textContent =
        getCategoryName(challenge.category);


    document.getElementById("challengeDifficulty")
        .textContent =
        capitalize(challenge.difficulty);


    document.getElementById("challengeXP")
        .textContent =
        challenge.xpReward;


    document.getElementById("challengeCode")
        .textContent =
        challenge.code;


    document.getElementById("challengeQuestion")
        .textContent =
        challenge.question;


    createAnswerButtons(challenge.answers);
updateMissionStatus();

    document.getElementById("feedbackBox")
        .classList.add("hidden");


    document.getElementById("submitAnswer")
        .disabled = true;


    challengeArea.scrollIntoView({
        behavior: "smooth"
    });
}


// ==============================
// CREATE ANSWER BUTTONS
// ==============================

function createAnswerButtons(answers) {

    const container =
        document.getElementById("answerContainer");


    container.innerHTML = "";


    answers.forEach(
        function(answer, index) {

            const button =
                document.createElement("button");


            button.textContent = answer;

            button.classList.add(
                "answer-option"
            );


            button.addEventListener(
                "click",
                function() {

                    selectAnswer(
                        button,
                        index
                    );

                }
            );


            container.appendChild(button);

        }
    );
}


// ==============================
// SELECT ANSWER
// ==============================

function selectAnswer(button, index) {

    const answerButtons =
        document.querySelectorAll(
            ".answer-option"
        );


    answerButtons.forEach(
        function(item) {

            item.classList.remove(
                "selected"
            );

        }
    );


    button.classList.add("selected");


    selectedAnswer = index;


    document.getElementById(
        "submitAnswer"
    ).disabled = false;
}


// ==============================
// CHECK ANSWER
// ==============================

function checkAnswer() {

    if (
        selectedAnswer === null ||
        answerSubmitted
    ) {
        return;
    }

    answerSubmitted = true;

    player.totalAnswers++;

    const correct =
        selectedAnswer ===
        currentChallenge.correctAnswer;


    if (correct) {

        player.correctAnswers++;

        player.bugsFixed++;

        if (
            !player.completedChallenges.includes(
                currentChallenge.id
            )
        ) {

            player.completedChallenges.push(
                currentChallenge.id
            );

        }

        player.streak++;

        if (
            player.streak >
            player.bestStreak
        ) {

            player.bestStreak =
                player.streak;

        }

        player.xp +=
            currentChallenge.xpReward;

        calculateLevel();

        showFeedback(
            true,
            currentChallenge.explanation
        );

    } else {

        player.streak = 0;

        showFeedback(
            false,
            currentChallenge.explanation
        );

    }


    lockAnswerButtons();

    updatePlayerStats();

    updateAchievements();

    savePlayerProgress();
updateMissionStatus();
    document.getElementById(
        "submitAnswer"
    ).disabled = true;
}
// ==============================
// FEEDBACK
// ==============================

function showFeedback(correct, explanation) {

    const box =
        document.getElementById("feedbackBox");

    const title =
        document.getElementById("feedbackTitle");

    const text =
        document.getElementById("feedbackText");


    box.classList.remove(
        "hidden",
        "correct",
        "incorrect"
    );


    if (correct) {

        box.classList.add("correct");

        title.textContent =
            "✅ Bug Fixed!";

    } else {

        box.classList.add("incorrect");

        title.textContent =
            "❌ Bug Still Active";

    }


    text.textContent = explanation;
}
// ==============================
// LOCK ANSWERS AFTER SUBMISSION
// ==============================

function lockAnswerButtons() {

    const answerButtons =
        document.querySelectorAll(
            ".answer-option"
        );

    answerButtons.forEach(
        function(button, index) {

            button.disabled = true;

            if (
                index ===
                currentChallenge.correctAnswer
            ) {

                button.classList.add(
                    "correct-answer"
                );

            }

            if (
                index === selectedAnswer &&
                index !==
                currentChallenge.correctAnswer
            ) {

                button.classList.add(
                    "wrong-answer"
                );

            }

        }
    );
}

// ==============================
// LEVEL SYSTEM
// ==============================

function calculateLevel() {

    player.level =
        Math.floor(player.xp / 100) + 1;
}


// ==============================
// NEXT CHALLENGE
// ==============================

function nextChallenge() {

    loadChallenge();
}

// ==============================
// SCROLL TO CHALLENGES
// ==============================

function scrollToChallenges() {

    document.getElementById("categories")
        .scrollIntoView({
            behavior: "smooth"
        });
}

// ==============================
// RESET PLAYER PROGRESS
// ==============================

function resetProgress() {

    const confirmReset =
        confirm(
            "Are you sure you want to reset all Bug Hunter progress?"
        );

    if (!confirmReset) {
        return;
    }

    player.xp = 0;
    player.streak = 0;
    player.level = 1;
    player.bugsFixed = 0;
    player.correctAnswers = 0;
    player.totalAnswers = 0;
    player.bestStreak = 0;
player.completedChallenges = [];
    localStorage.removeItem(
        "bugHunterProgress"
    );

    updatePlayerStats();
updateAchievements();
    alert("Progress has been reset.");
}
// ==============================
// ACHIEVEMENT SYSTEM
// ==============================

function updateAchievements() {

    const firstFix =
        document.getElementById("badgeFirstFix");

    const bugCrusher =
        document.getElementById("badgeBugCrusher");

    const hotStreak =
        document.getElementById("badgeHotStreak");

    const xpHunter =
        document.getElementById("badgeXPHunter");


    if (player.bugsFixed >= 1) {
        firstFix.classList.remove("locked");
    } else {
        firstFix.classList.add("locked");
    }


    if (player.bugsFixed >= 5) {
        bugCrusher.classList.remove("locked");
    } else {
        bugCrusher.classList.add("locked");
    }


    if (player.bestStreak >= 3) {
        hotStreak.classList.remove("locked");
    } else {
        hotStreak.classList.add("locked");
    }


    if (player.xp >= 100) {
        xpHunter.classList.remove("locked");
    } else {
        xpHunter.classList.add("locked");
    }
}
// ==============================
// UPDATE MISSION STATUS
// ==============================

function updateMissionStatus() {

    const matchingChallenges = challenges.filter(
        function(challenge) {
            return (
                challenge.category ===
                    player.selectedCategory &&
                challenge.difficulty ===
                    player.selectedDifficulty
            );
        }
    );

    const completedMatching =
        matchingChallenges.filter(
            function(challenge) {
                return player.completedChallenges.includes(
                    challenge.id
                );
            }
        );

    document.getElementById("missionCompleted")
        .textContent =
        completedMatching.length;

    document.getElementById("missionAvailable")
        .textContent =
        matchingChallenges.length;
}
// ==============================
// EVENT LISTENERS
// ==============================

difficultyButtons.forEach(function(button) {

    button.addEventListener("click", function() {
        selectDifficulty(button);
    });

});


categoryCards.forEach(function(card) {

    const button =
        card.querySelector(".category-button");

    button.addEventListener("click", function() {
        selectCategory(card);
    });

});


missionButton.addEventListener(
    "click",
    beginMission
);


startButton.addEventListener(
    "click",
    scrollToChallenges
);
document.getElementById("submitAnswer")
    .addEventListener(
        "click",
        checkAnswer
    );


document.getElementById("nextChallenge")
    .addEventListener(
        "click",
        nextChallenge
    );
document.getElementById("resetProgress")
    .addEventListener(
        "click",
        resetProgress
    );
// ==============================
// INITIAL PAGE SETUP
// ==============================

loadPlayerProgress();

updatePlayerStats();

updateAchievements();