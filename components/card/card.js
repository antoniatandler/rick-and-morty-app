  export function createCharacterCard(character) {
    const card = document.createElement('li');
    card.classList.add('card');

    const imageContainer = document.createElement('div');
    imageContainer.classList.add('card__image-container');

    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = character.image;
    image.alt = character.name;

    const gradient = document.createElement('div');
    gradient.classList.add('card__image-gradient');

    imageContainer.appendChild(image);
    imageContainer.appendChild(gradient);

    const content = document.createElement('div');
    content.classList.add('card__content');

    const title = document.createElement('h2');
    title.classList.add('card__title');
    title.textContent = character.name;

    const infoList = document.createElement('dl');
    infoList.classList.add('card__info');

    const statusTitle = document.createElement('dt');
    statusTitle.classList.add('card__info-title');
    statusTitle.textContent = 'Status';

    const statusDescription = document.createElement('dd');
    statusDescription.classList.add('card__info-description');
    statusDescription.textContent = character.status;

    const typeTitle = document.createElement('dt');
    typeTitle.classList.add('card__info-title');
    typeTitle.textContent = 'Type';

    const typeDescription = document.createElement('dd');
    typeDescription.classList.add('card__info-description');
    typeDescription.textContent = character.type ? character.type : '';

    const occurrencesTitle = document.createElement('dt');
    occurrencesTitle.classList.add('card__info-title');
    occurrencesTitle.textContent = 'Occurrences';

    const occurrencesDescription = document.createElement('dd');
    occurrencesDescription.classList.add('card__info-description');
    occurrencesDescription.textContent = character.episode.length;

    infoList.appendChild(statusTitle);
    infoList.appendChild(statusDescription);
    infoList.appendChild(typeTitle);
    infoList.appendChild(typeDescription);
    infoList.appendChild(occurrencesTitle);
    infoList.appendChild(occurrencesDescription);

    content.appendChild(title);
    content.appendChild(infoList);

    card.appendChild(imageContainer);
    card.appendChild(content);

    return card;
  }


 /* export function createCharacterCard(props) {
    const characterCard = document.createElement("li");
    characterCard.classList.add("card");
    characterCard.innerHTML = `
        <div class="card__image-container">
          <img
            class="card__image"
            src=${props.image}
            alt="Rick Sanchez"
          />
          <div class="card__image-gradient"></div>
        </div>
        <div class="card__content">
          <h2 class="card__title">${props.name}</h2>
          <dl class="card__info">
            <dt class="card__info-title">Status</dt>
            <dd class="card__info-description">${props.status}</dd>
            <dt class="card__info-title">Type</dt>
            <dd class="card__info-description">${props.type}</dd>
            <dt class="card__info-title">Occurrences</dt>
            <dd class="card__info-description">${props.episode.length}</dd>
          </dl>
        </div>
      `;
    return characterCard;
  } */
