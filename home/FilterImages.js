import Component from '../Component.js';

class FilterImage extends Component {

    onRender(dom) {
        const onFilter = this.props.onFilter;
        const select = dom.querySelector('#filter');

        select.addEventListener('change', () => {
            onFilter(select.value);
        });
    }

    renderHTML() {
        let html = /*html*/`
            <div>
                <label for="filter">Filter:</label>
                <select id="filter" name="filter">
                    <option value="all" selected>All</option>
                    <option value="markhor">Markhor</option>
                    <option value="chameleon">Chameleon</option>
                    <option value="dragon">Dragon</option>
                    <option value="lizard">Lizard</option>
                    <option value="mouflon">Mouflon</option>
                    <option value="addax">Addax</option>
                    <option value="unicorn">Unicorn</option>
                    <option value="rhino">Rhino</option>
                    <option value="narwhal">Narwhal</option>
                    <option value="triceratops">Triceratops</option>
                    <option value="unilego">Unilego</option>
                </select>
            </div>
        `;
        return html;
    }
}

export default FilterImage;