// export function prevButtonClick() {
//     prevButton.addEventListener("click", () => {
//       var pageIndex = page - 1;
  
//       if ((pageIndex = 1)) {
//         fetchCharacters(`https://rickandmortyapi.com/api/character/avatar/?page`);
//       } else if (pageIndex > 1) {
//         const pageURL = `https://rickandmortyapi.com/api/character/avatar/?page=${pageIndex}`;
//         fetchCharacters(pageURL);
//       }
//     });
//   }
  
//   export function nextButtonClick() {
//     nextButton.addEventListener("click", () => {
//       var pageIndex = currentPage + 1;
  
//       if (pageIndex <= maxPage) {
//         const pageURL = `https://rickandmortyapi.com/api/character/avatar/?page=${pageIndex}`;
//         fetchCharacters(pageURL);
//       }
//     });
//   }