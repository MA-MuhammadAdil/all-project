// 🎯 Set your birthday date here:
const birthdayDate = new Date("July 20, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    document.getElementById("countdown").innerHTML = "🎉 It's Today!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, "0");
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// 🎉 Celebration animation
function launchCelebration() {
  const confettiContainer = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    confettiContainer.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}




 
