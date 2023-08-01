// script.js

document.addEventListener("DOMContentLoaded", function () {
    const challengeForm = document.getElementById("challengeForm");
    const challengeDateInput = document.getElementById("challengeDate");
    const challenges = [];

    challengeForm.addEventListener("submit", function (event) {
        event.preventDefault();
        saveChallenges();
    });

    function saveChallenges() {
        const challengeDate = challengeDateInput.value;
        challenges.length = 0; // Clear the array before adding new challenges

        for (let i = 1; i <= 5; i++) {
            const challengeInput = document.getElementById(`challenge${i}`);
            const challengeText = challengeInput.value.trim();
            challenges.push(challengeText);
        }

        displaySavedChallenges(challengeDate);
    }

    function displaySavedChallenges(date) {
        const savedChallengesSection = document.getElementById("savedChallenges");
        const savedChallengesDiv = document.createElement("div");
        savedChallengesDiv.classList.add("saved-challenge");
        savedChallengesDiv.innerHTML = `
            <h3>${date}</h3>
            <ul>
                ${challenges.map((challenge) => `<li>${challenge || "- No Challenge -"}</li>`).join("")}
            </ul>
        `;
        savedChallengesSection.appendChild(savedChallengesDiv);
        challengeForm.reset();
    }
});
