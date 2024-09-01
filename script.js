BASE_URL = `https://rickandmortyapi.com/api/character`;
let lastPage;
let accPage = 1;

async function loadCharacters() {
  const inputName = document.getElementById("input-name");
  const charsWrapper = document.getElementById("character-wrapper");
  const statusRadio = document.querySelector("input:checked");
  const actualPage = document.getElementById("acc-page");
  const _page = `&page=${accPage}`;
  const _status = `&status=${statusRadio.value}`;

  let _name = "";

  if (inputName.value !== "") {
    _name = `&name=${inputName.value}`;
  }
  try {
    const req = await fetch(`${BASE_URL}?${_name}${_status}${_page}`);

    if (!req.ok) {
      charsWrapper.innerHTML = "No items to display";
      accPage = 1;
      lastPage = 1;
      actualPage.innerHTML = `${accPage} from ${lastPage}`;
      loadCharacters();
      return;
    }

    const characters = await req.json();
    lastPage = characters.info.pages;
    actualPage.innerHTML = `${accPage} from ${lastPage}`;
    charsWrapper.innerHTML = "";
    characters.results.forEach(({ name, status, species, image }) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML += `
        <img src="${image}" alt="${name}"/>
        <h4>${name}</h4>
        <div class="char-info">
        <span>Status: ${status}</span>
        <span>Species: ${species}</span></div>`;
      charsWrapper.append(card);
    });
  } catch (err) {
    console.error("ERROR: ", err);
  }
}
function nextPage() {
  if (accPage === lastPage) {
    return;
  }
  ++accPage;
  loadCharacters();
}
function prevPage() {
  if (accPage === 1) {
    return;
  }
  --accPage;
  loadCharacters();
}
function firstPage() {
  if (accPage === 1) {
    return;
  }
  accPage = 1;
  loadCharacters();
}
function lastsPage() {
  if (accPage === lastPage) {
    return;
  }
  accPage = lastPage;
  loadCharacters();
}

document.addEventListener("DOMContentLoaded", loadCharacters);
