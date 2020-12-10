class SeasonBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
         <style>
         
         #title-season {
          font-family: 'gm';
          font-size: 28px;
          color: #333;
        }
        .season {
          margin: 0;
      }
      
      
      
     .link-season {
          text-decoration: none;
          margin-right: 42px;
          margin-top: 6px;
          font-size: 16px;
          color: #999;
          transition: .2s ease-in;
      }
      
      .link-season hr {
          width: 10px;
          border-radius: 20px;
          margin: 6px auto;
          background: transparent;
          border: 1.6px solid #232323;
      }
      
      
      .link-season:hover {
          color: tomato !important;
          font-weight: 600;
          cursor: pointer;
      }
      
      .link-season-active {
          color: tomato !important;
          font-weight: 600;
          /* font-family: 'gm'; */
      }
    
        @media (max-width: 1024px) {
         .season {
            margin-top: 20px;
        }
          
        
      
      }
    
         </style>
         <h2 id="title-season">Anime Season 2020</h2>
      <div class="row season">
        <span class="link-season" id="summer">Summer</span>
        <span class="link-season" id="spring">Spring</span>
        <span class="link-season" id="fall">Fall</span>
        <span class="link-season" id="winter">Winter</span>
      </div>`;
    }
}

customElements.define("season-bar", SeasonBar);
