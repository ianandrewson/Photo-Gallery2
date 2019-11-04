import Component from '../Component.js';
import { generateKeywords } from '../util/generateKeywords.js';

class FilterImage extends Component {

    onRender(dom) {
        const onFilter = this.props.onFilter;
        const images = this.props.images;
        
        dom.appendChild(generateKeywords(images));
        
        let select = dom.querySelector('#filter');

        select.addEventListener('change', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        let html = /*html*/`
            <div id="filter-choices">
                <label for="filter">Filter:</label>
            </div>
        `;
        return html;
    }
}

export default FilterImage;