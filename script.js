const quotes= [
    "Believe in yourself! 💪",
    "Push through the pain. 💥",
    "You’re doing amazing! 🌟",
    "Never give up. 🚀",
    "Great things take time. ⏳",
    "You're becoming unstoppable. 🔥",
    "One day or day one — you decide. 🧠"
  ];
function generateQuote(){
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerText=quotes[randomIndex];
}
