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
      return;
    }
    const characters = await req.json();
    lastPage = characters.info.pages;
    actualPage.innerHTML = `${accPage} from ${lastPage}`;
    charsWrapper.innerHTML = "";
    characters.results.forEach(({ name, status, species, image }) => {
      const card = document.createElement("div");
      const img = document.createElement("img");
      const nameHeader = document.createElement("h4");
      const charInfo = document.createElement("div");
      const charStatus = document.createElement("span");
      const charSpecies = document.createElement("span");

      card.className = "card";
      img.src = image;
      img.alt = name;
      nameHeader.innerHTML = name;
      charInfo.className = "char-info";
      charStatus.innerHTML = `Status: ${status}`;
      charSpecies.innerHTML = `Species: ${species}`;

      charInfo.append(charStatus, charSpecies);
      card.append(img, nameHeader, charInfo);
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

document.addEventListener("DOMContentLoaded", () => {
  loadCharacters();
  document.getElementById("input-name").addEventListener("input", () => {
    accPage = 1;
    loadCharacters();
  });
  document.getElementById("radio-alive").addEventListener("change", loadCharacters);
  document.getElementById("radio-dead").addEventListener("change", loadCharacters);
  document.getElementById("radio-unknown").addEventListener("change", loadCharacters);
  document.getElementById("first-page-btn").addEventListener("click", firstPage);
  document.getElementById("prev-page-btn").addEventListener("click", prevPage);
  document.getElementById("next-page-btn").addEventListener("click", nextPage);
  document.getElementById("last-page-btn").addEventListener("click", lastsPage);
});
