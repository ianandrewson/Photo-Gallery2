import images from '../data/images.js';
import Component from '../Component.js';
import Header from '../home/Header.js';
import ImageList from './ImageList.js';

class App extends Component {
    onRender(dom) {
        let props = {
            images: images
        };

        const header = new Header();
        const headerDom = header.renderDOM();
        dom.prepend(headerDom);

        let imageList = new ImageList(props);
        const imageListDom = imageList.renderDOM();
        console.log(dom);
        let displayArea = dom.querySelector('#card-section');
        displayArea.appendChild(imageListDom);

    }

    renderHTML(){
        let html = /*html*/`
            <main>
                <div id="filter-bar">
                </div>
                <div id="card-section">
                </div>
            </main>`;
        return html;
    }
}

export default App;