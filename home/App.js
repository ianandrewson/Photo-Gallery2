import images from '../data/images.js';
import Component from '../Component.js';
import Header from './Header.js';
import ImageList from './ImageList.js';
import FilterImage from './FilterImages.js';

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
        let displayArea = dom.querySelector('#card-section');
        displayArea.appendChild(imageListDom);

        const filterImageProps = {
            images: images,

            onFilter: (filterSelector) => {
                let filteredImages;
                if (filterSelector === 'all'){
                    filteredImages = images;
                } else {
                    filteredImages = images.filter(image => {
                        return image.keyword === filterSelector;
                    });
                }
                let updatedImageList = { images: filteredImages };
                imageList.update(updatedImageList);
            }
        };

        let filterBar = new FilterImage(filterImageProps);
        const filterBarDom = filterBar.renderDOM();
        let filterRenderArea = dom.querySelector('#filter-bar');
        filterRenderArea.appendChild(filterBarDom);

        

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