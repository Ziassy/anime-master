import "./upcoming-item.js";

class UpcomingList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set upcomings(upcomings) {
        this._upcomings = upcomings;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        h2 {
            font-family: 'gm';
            font-size: 24px;
            color: #fafafa;
            margin-bottom: 12px;
            margin-top: 42px;
        }
        
        </style>
        <h2>Top Upcoming</h2>
        `;
        this._upcomings.forEach((upcoming) => {
            const upcomingItemElement = document.createElement("upcoming-item");
            upcomingItemElement.upcoming = upcoming;
            this.shadowDOM.appendChild(upcomingItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
             .placeholder {
                   font-weight: lighter;
                   color: rgba(0,0,0,0.5);
                   -webkit-user-select: none;
                   -moz-user-select: none;
                   -ms-user-select: none;
                   user-select: none;
               }
               .alert {
                 color:red;
               }
           </style>`;
        this.shadowDOM.innerHTML += `<h2 class="alert">${message}</h2>`;
    }
}

customElements.define("upcoming-list", UpcomingList);
