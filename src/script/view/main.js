import "../component/anime-list.js";
import "../component/search-bar.js";
import "../component/app-bar.js";
import "../component/season-bar.js";
import DataSource from "../data/data-source.js";


const main = () => {
  const searchElement = document.querySelector("search-bar");
  const animeListElement = document.querySelector("anime-list");
  const summerClick = document.querySelector("#summer");
  const springClick = document.querySelector("#spring");
  const fallClick = document.querySelector("#fall");
  const winterClick = document.querySelector("#winter");
  // const currentClicked = document.querySelectorAll(".btn-genre");
  const actionClick = document.querySelector("#action");
  const adventureClick = document.querySelector("#adventure");
  const comedyClick = document.querySelector("#comedy");
  const schoolClick = document.querySelector("#school");
  const thrillerClick = document.querySelector("#thriller");
  const horrorClick = document.querySelector("#horror");
  const romanceClick = document.querySelector("#romance");
  const vampireClick = document.querySelector("#vampire");



  // Event saat elemt button di klik, menggunakan asyncronus
  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchAnime(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  // const viewSession = async () => {
  //   const currentClicked = event.target.innerText;
  //   try {
  //     const result = await DataSource.showBySession(currentClicked.toLowerCase);
  //     renderResult(result);
  //   }
  //   catch (message) {
  //     fallbackResult(message)
  //   }
  // }

  const viewSummer = async () => {
    try {
      const result = await DataSource.showSummer(summerClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewSpring = async () => {
    try {
      const result = await DataSource.showSpring(springClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewFall = async () => {
    try {
      const result = await DataSource.showFall(fallClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewWinter = async () => {
    try {
      const result = await DataSource.showWinter(winterClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewAction = async () => {
    try {
      const result = await DataSource.genreAction(actionClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewAdventure = async () => {
    try {
      const result = await DataSource.genreAdventure(adventureClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewComedy = async () => {
    try {
      const result = await DataSource.genreComedy(comedyClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewSchool = async () => {
    try {
      const result = await DataSource.genreSchool(schoolClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewThriller = async () => {
    try {
      const result = await DataSource.genreThriller(thrillerClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewHorror = async () => {
    try {
      const result = await DataSource.genreHorror(horrorClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewRomance = async () => {
    try {
      const result = await DataSource.genreRomance(romanceClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const viewVampire = async () => {
    try {
      const result = await DataSource.genreVampire(vampireClick);
      renderResult(result);
    }
    catch (message) {
      fallbackResult(message)
    }
  }

  const renderResult = (results) => {
    animeListElement.clubs = results;
  };

  const fallbackResult = (message) => {
    animeListElement.renderError(message);
  };


  searchElement.clickEvent = onButtonSearchClicked;
  summerClick.addEventListener("click", viewSummer);
  springClick.addEventListener("click", viewSpring);
  fallClick.addEventListener("click", viewFall);
  winterClick.addEventListener("click", viewWinter);
  // currentClicked.addEventListener("click", viewSession);
  actionClick.addEventListener("click", viewAction);
  adventureClick.addEventListener("click", viewAdventure);
  comedyClick.addEventListener("click", viewComedy);
  schoolClick.addEventListener("click", viewSchool);
  thrillerClick.addEventListener("click", viewThriller);
  horrorClick.addEventListener("click", viewHorror);
  romanceClick.addEventListener("click", viewRomance);
  vampireClick.addEventListener("click", viewVampire);

};
export default main;
