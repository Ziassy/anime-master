class AnimeItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set anime(anime) {
        this._anime = anime;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
          .poster {
            width: 180px;
            height:330px;
            margin: 10px;
            float: left;
            border-radius: 10px 10px 0 0;
            overflow:hidden;
            box-sizing: box-border;
        }
        
        img {
            width: 100%;
            height: 270px;
            border-radius: 10px;
            cursor: pointer;
        }
        
        .poster h3 {
            font-size: 18px;
            margin: 5px 0 0;
            color: rgb(68, 65, 65);

        }
        @media (max-width: 1024px) {
          .poster {
            width: 170px;
            margin: 10px;
            ;
            float: left;
        }
        img {
            width: 100%;
            height: 230px;
        }
        .poster h3 {
            margin: 5px 0 0;
        }
        }

        @media (max-width: 414px) {
          .content .poster {
              width: 170px;
              height:280px;
              margin: 10px;
              float: left;
          }
          img {
              width: 100%;
              height: 220px;
          }
          .content .poster h3 {
              margin: 5px 0 0;
          }
      }
      
      @media (max-width: 375px) {
          .content .poster {
              width: 100px;
              margin: 10px;
              float: left;
          }
          img {
              width: 100%;
              height: 190px;
          }
          .content .poster h3 {
              margin: 5px 0 0;
          }
      }
      
      @media (max-width: 411px) {
          .content .poster {
              width: 150px;
              margin: 10px;
              ;
              float: left;
          }
          img {
              width: 100%;
              height: 190px;
          }
          .content .poster h3 {
              margin: 5px 0 0;
          }
      }
      @media (max-width: 360px) {
          .content .poster {
              width: 130px;
              margin: 10px;
              float: left;
          }
          img {
              width: 100%;
              height: 180px;
          }
          .content .poster h3 {
              margin: 5px 0 0;
          }
      }
      
      @media (max-width: 320px) {
          .content .poster {
              width: 120px;
              margin: 10px;
              
          }
          img {
              width: 100%;
              height: 180px;
          }
          .content .poster h3 {
              margin: 5px 0 0;
          }
      }
      
           </style>
           <div class="row content" id="middle-content">
           <div class="poster">
            <img src="${this._anime.image_url}" class="img-poster" alt="${this._anime.title}">
            <h3>${this._anime.title}</h3>
            </div>
        `;
    }
}

customElements.define("anime-item", AnimeItem);
