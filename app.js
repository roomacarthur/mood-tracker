document.addEventListener("DOMContentLoaded", function () {

  const moodButtons = document.querySelectorAll(".mood-btn");
  const moodResult = document.getElementById("mood-result");
  const moodMessages = {
    happy: "Great to hear you're happy! 😊 Keep spreading positivity!",
    okay: "It's okay to feel just okay. Take it easy today. 😌",
    sad: "Sorry you're feeling down. Tomorrow is a new day. ❤️",
  };

  function showMoodMessage(mood) {
    if (mood === "happy") {
      moodResult.className = "p-4 rounded bg-success text-white"; // Green background
    } else if (mood === "okay") {
      moodResult.className = "p-4 rounded bg-warning text-dark"; // Yellow background
    } else if (mood === "sad") {
      moodResult.className = "p-4 rounded bg-danger text-white"; // Red background
    }
    moodResult.innerHTML = `<p>${moodMessages[mood]}</p>`;
  }

  moodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const selectedMood = button.getAttribute("data-mood");

      showMoodMessage(selectedMood);
    });
  });
});
