window.onload = () => {
  let word = "javascript";
  let Allwords = ["car", "food", "window", "yellow", "police"];
  let arr = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let alf = document.getElementById("alf");

  for (let i = 0; i < arr.length; i++) {
    alf.innerHTML += `<button class="letter" id=${arr[i]} > ${arr[i]}</button>`;
  }

  let game = document.getElementById("game");
  for (let i = 0; i < word.length; i++) {
    game.innerHTML += `<span class="game-letter">_</span> `;
  }

  const span = document.getElementsByClassName("letter");
  const score = document.getElementById("score");
  const start = document.getElementById("start");
  start.addEventListener("click", () => {
    score.innerText = 3;

    for (let i = 0; i < game.children.length; i++) {
      game.children[i].innerText = "_";
    }
    word = Allwords[Math.floor(Math.random() * Allwords.length)];
    game.innerHTML = "";
    for (let i = 0; i < word.length; i++) {
      game.innerHTML += `<span class="game-letter">_</span> `;
    }
  });

  let getLetter = (event) => {
    let letter = event.target.innerText.toLowerCase();
    if (word.indexOf(letter) === -1) {
      score.innerText -= 1;
    } else {
      for (let i = 0; i < word.length; i++) {
        if (word[i] === letter) {
          game.children[i].innerText = letter.toUpperCase();
        }
      }
    }
    if ([...game.children].some((item) => item.innerText === "_") === false) {
      alert("YOU WON!");
    }

    if (score.innerText == 0) {
      alert("You lost!");
    }
  };

  for (let i = 0; i < span.length; i++) {
    span[i].addEventListener("click", getLetter);
  }
};
