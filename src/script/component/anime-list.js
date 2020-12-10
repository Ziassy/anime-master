import "./anime-item.js";

class AnimeList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set clubs(clubs) {
    this._clubs = clubs;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._clubs.forEach((anime) => {
      const animeItemElement = document.createElement("anime-item");
      animeItemElement.anime = anime;
      this.shadowDOM.appendChild(animeItemElement);
    });
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
          .alert {
             color:red;
           }
        </style>`;
    this.shadowDOM.innerHTML += `<h2 class="alert">${message}</h2>`;
  }
}

customElements.define("anime-list", AnimeList);
