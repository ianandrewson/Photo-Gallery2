import Component from '../Component.js';

class ImageItem extends Component {
    renderHTML(){
        const animal = this.props.animal;
        console.log(animal);

        return /*html*/`
            <article class="card ${animal.keyword}">
                <h2 class="card-title">${animal.title}</h2>
                <img class="card-image" src='${animal.url}' alt="">
                <section>
                    <h3>Description:</h3>
                    <p>${animal.description}</p>
                    <aside>${animal.horns}</aside>
                </section>
            </article>
        `;
    }
}

export default ImageItem;