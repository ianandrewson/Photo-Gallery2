import images from '../data/images.js';
import Component from '../Component.js';
import Header from '../home/Header.js';
import ImageList from './ImageList.js';

class App extends Component {
    onRender() {
        let props = {
            images: images
        };

        const header = new Header();
        const headerDom = header.renderDOM();
        //dom.prepend(headerDom);

        let imageList = new ImageList(props);
        const imageListDom = imageList.renderDOM();
        //document.getElementById('display-area').appendChild(imageListDom);

    }

    renderHTML(){
        let html = '';
        return html;
    }
}

export default App;