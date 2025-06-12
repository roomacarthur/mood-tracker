// Wait until the entire HTML document has been fully loaded and parsed
document.addEventListener("DOMContentLoaded", function () {
  // Step 1: Select all elements with the class "mood-btn"
  // These will be the buttons users click to select a mood
  const moodButtons = document.querySelectorAll(".mood-btn");

  // Step 2: Get the element with the ID "mood-result"
  // This is where we'll display the mood message
  const moodResult = document.getElementById("mood-result");

  // Step 3: Create an object to store messages for each mood
  // Each mood (happy, okay, sad) has a custom message we want to show
  const moodMessages = {
    happy: "Great to hear you're happy! 😊 Keep spreading positivity!",
    okay: "It's okay to feel just okay. Take it easy today. 😌",
    sad: "Sorry you're feeling down. Tomorrow is a new day. ❤️",
  };

  // Step 4: Define a function that shows the message based on selected mood
  function showMoodMessage(mood) {
    // First, update the CSS class of the result box to change its appearance
    // This uses Bootstrap classes for background color and text style
    if (mood === "happy") {
      moodResult.className = "p-4 rounded bg-success text-white"; // Green background
    } else if (mood === "okay") {
      moodResult.className = "p-4 rounded bg-warning text-dark"; // Yellow background
    } else if (mood === "sad") {
      moodResult.className = "p-4 rounded bg-danger text-white"; // Red background
    }

    // Then update the inner HTML content of the result box to show the message
    moodResult.innerHTML = `<p>${moodMessages[mood]}</p>`;
  }

  // Step 5: Loop through each mood button and attach a click event listener
  // When the button is clicked, we determine which mood was selected
  moodButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the value of the "data-mood" attribute (e.g., "happy", "okay", or "sad")
      const selectedMood = button.getAttribute("data-mood");

      // Call the function to show the message for that mood
      showMoodMessage(selectedMood);
    });
  });
});
