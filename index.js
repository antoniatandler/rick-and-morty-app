console.clear();

import { createCharacterCard } from "./components/card/card.js";

// import { currentPage } from "./components/nav-pagination/nav-pagination.js";
// import {
//   prevButtonClick,
//   nextButtonClick,
// } from "./components/nav-button/nav-button.js";

const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]',
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
let maxPage = 1;
let page = 1;
let searchQuery = '';

async function fetchCharacters(page) {
  // Fetch character data from API
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  const characterList = data.results;
  // Clear existing cards
  cardContainer.innerHTML = "";

  // Create cards for each character
  characterList.forEach((character) => {
    const card = createCharacterCard(character);
    cardContainer.append(card);
  });

  // Update max page count
  maxPage = data.info.pages;

  // Update pagination display
  pagination.textContent = `${page} / ${maxPage}`;
  console.log("characterList:", characterList);
  return data;
}

fetchCharacters(page);

fetch('https://rickandmortyapi.com/api/character')
  .then(response => response.json())
  .then(data => {
    console.log(data.info.pages); // Output: 42
    maxPage = data.info.pages;
    console.log(maxPage);
  });

prevButton.addEventListener("click", () => {
  if (page > 1) {
    page--;
    fetchCharacters(page);
  }
});

nextButton.addEventListener("click", () => {
  if (page < maxPage) {
    page++;
    fetchCharacters(page);
  }
});
