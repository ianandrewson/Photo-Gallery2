import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        let html = /*html*/`
        <header>
            <img class="logo" src="./data/imagene.png" alt="">
            <h1 id="imagene">IMAGENE</h1>
        </header>
        `;
        return html;
    }
}

export default Header;