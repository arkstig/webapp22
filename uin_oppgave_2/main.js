const wordList = [
  "Huske",
  "Trene",
  "Danse",
  "Hoppe",
  "Sykle",
  "Gå",
  "Rulle",
  "Trille",
  "Kjøre",
  "Løpe",
  "Springe",
  "Hinke",
  "Sparke",
  "Sprinte",
  "Forflytte",
  "Trimme",
  "Løfte",
  "Snurre",
  "Svinge",
  "Svømme",
  "Flyte",
  "Fly",
  "Sveve",
  "Ake",
  "Dra",
];

//Hente ut alle elementer vi trenger
const test = document.getElementById("test")
const spans = document.querySelectorAll("span")
let inputs = document.querySelectorAll("input")

//lag en funksjon for å hente random tall i wordlist
const random = () => {
  return Math.floor(Math.random() * wordList.length);
};


const addWords = () => {
  [...spans].forEach((span) => (span.innerHTML = wordList[random()]));
};

