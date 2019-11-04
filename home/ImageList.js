import Component from '../Component.js';
import ImageItem from './ImageItem.js';

class ImageList extends Component {
    onRender(dom) {
        const items = this.props.images;

        items.forEach(element => {
            const props = { animal: element };
            const animal = new ImageItem(props);
            const animalDOM = animal.renderDOM();
            dom.appendChild(animalDOM);

        });
    }

    renderHTML() {
        let html = /*html*/`
        <div id="display-area">
        </div>
        `;
        return html;
    }
}

export default ImageList;