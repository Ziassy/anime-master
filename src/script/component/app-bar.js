
class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
       <style>
        section.web-left  {
        display: inline-block;
        position: fixed;
        }
        section.web-left {
          width: 11%;
          height: 100vh;
          background-color: #FAFAFA;
          padding: 0 16px;
      }
      
      section.web-left .col-4 {
          padding: 0;
          margin: 0 4px;
      }
      
      section.web-left .genre h2 {
          font-family: 'gsm';
          font-size: 20px;
          color: #333;
          margin-top: 32px;
          margin-bottom: 12px;
      }
      .genre .btn-genre {
        display: inline-block;
        padding: 8px 24px;
        border-radius: 24px;
        font-size: 14px;
        color: #623BFF;
        border: 1px solid #623BFF;
        text-decoration: none;
        margin: 6px 0;
        transition: .2s ease-in;
    }
    
    .btn-genre:hover {
        background-color: #623BFF;
        color: #FAFAFA !important;
        cursor: pointer;
    }
    
    .btn-genre-active {
        display: inline-block;
        padding: 8px 24px;
        border-radius: 24px;
        font-size: 14px;
        background-color: #623BFF;
        color: #FAFAFA !important;
        text-decoration: none;
    }
    
    .genre .btn-thx {
        width: 42px;
        height: 42px;
        text-align: center;
        line-height: 36px;
        margin-top: 42px;
        display: inline-block;
        border-radius: 50%;
        border: 1px solid #623BFF;
        transition: .3s ease-in;
    }
  
      @media (max-width: 1024px) {
        section.web-left {
          position: static;
      }
      section.web-left {
          width: 100%;
          height: 100%;
          background-color: #FAFAFA;
          padding: 20px 16px;
          margin: 0 0 32px 0;
      }
      section.web-left .genre div {
          text-align: center;
      }
      section.web-left .genre h2 {
          text-align: center;
      }
      .col-6 {
        -ms-flex: 0 0 50%;
        flex: 0 0 50%;
        max-width: 50%;
        
    }
  
       </style>
       <section class="web-left">
       <div class="row genre">
         <div class="col-md-12">
           <h2>Top Genre</h2>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="action">Action</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="adventure">Adventure</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="comedy">Comedy</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="school">School</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="thriller">Thriller</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="horror">Horror</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="romance">Romance</span>
         </div>
         <div class="col-md-12 col-6">
           <span class="btn-genre" id="vampire">Vampire</span>
         </div>
       </div>
     </section>`;
  }
}

customElements.define("app-bar", AppBar);  