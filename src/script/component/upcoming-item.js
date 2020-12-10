class UpcomingItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set upcoming(upcoming) {
        this._upcoming = upcoming;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
           <style>
          
        img {
            width:100px;
            float:left;
            margin-right: 5px;

        }
        .card-body {
            background-color: #9850F6;
            border: none;
            margin-bottom: 70px;
            
        }
        
         .subdata h6 {
            font-family: 'rr';
            font-size: 14px;
            color: #f0f0f0;
            padding-top:10px;
            margin-bottom:10px;
        }
        
         .subdata p {
            font-size: 12px;
            color: #ddd;
            margin: 0;
        }
        
         .subdata p span {
            font-size: 12px;
            color: #eee;
            margin: 0;
            margin-bottom:30px;
        }
        @media (max-width: 1024px) {
            h3 {
                font-size: 18px;
                color: #fafafa;
            }
            .subdata p {
                font-size: 14px;
                color: #f0f0f0;
            }
            .subdata p span {
                color: #fafafa;
            }
        }
      
           </style>
        <div class="row">
        <div div class="top-content" id="anime-upcoming">
            <div class="row box-content">
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${this._upcoming.image_url}" class="card-img">
              </div>
              <div class="col-md-8 subdata">
                <div class="card-body">
                  <h6 class="card-subtitle mb-2 ">${this._upcoming.title}</h6>
                  <p>${this._upcoming.type} :<span> ${this._upcoming.episodes} </span></p>
                  <p> Members : <span> ${this._upcoming.members}</span> </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
        `;
    }
}

customElements.define("upcoming-item", UpcomingItem);
