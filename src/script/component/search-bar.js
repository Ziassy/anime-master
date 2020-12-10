class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#search-input").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
       <style>
          .box-input {
            margin-top: 10px;
        }
        
        .box-input input {
            width: 75%;
            padding: 8px 12px;
            border-radius: 8px;
            background: #fff;
            border: none;
            outline: none;
            color: #555;
            font-family: 'gm';
        }
        
        .box-input input::placeholder {
            font-size: 14px;
            color: #aaa;
        }
        #searchButton {
          width: 18%; 
          background-color: tomato;
          height: 35px;
          border-radius: 8px;
          border: none;
        }
        .result {
          margin-top: 42px;
          margin-bottom: 20px;
        }
        
        
        .result h1 {
            font-family: 'gm';
            font-size: 20px;
            margin: 0;
            text-align: left;
            color: #333;
            border-bottom: 1px solid rgb(155, 146, 146);
            width: 140px;
        }
        @media (max-width: 1024px) {
          .box-input input {
            width: 65%;
            padding: 8px 12px;
            border-radius: 8px;
            background: #fff;
            border: none;
            outline: none;
            color: #555;
            font-family: 'gm';
        }
  
           .box-input {
            display: block;
          
          .box-input h2 {
              font-family: 'gm';
              font-size: 18px;
              color: #333;
          }
          #searchButton {
            width: 16%;
            background-color: tomato;
            height: 45px;
            border-radius: 8px;
          }
  
  
      }
    
       </style>
       <div class="box-input">
       <h2>Find Anime</h2>
       <input type="text" placeholder="Search..." id="search-input" >
       <button id="searchButton">Search</button>
     </div>
     <div class="result">
        <h1 id="hero-title">Result of Anime</h1>
      </div>
       `;

    this.shadowDOM
      .querySelector("#searchButton")
      .addEventListener("click", this._clickEvent);
  }
}

customElements.define("search-bar", SearchBar);
