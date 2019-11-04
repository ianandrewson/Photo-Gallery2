import ImageItem from '../home/ImageItem.js';

const test = QUnit.test;

test('should render an Item in html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const expected = /*html*/`
    <article class="card dragon">
        <h2 class="card-title">Smaug</h2>
        <img class="card-image" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg' alt="">
        <section>
            <h3>Description:</h3>
            <p>Fan illustration of Smaug from 'The Hobbit'</p>
            <aside>100</aside>
        </section>
    </article>
    `;

    let dragon = {
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
        title: 'Smaug',
        description: 'Fan illustration of Smaug from \'The Hobbit\'',
        keyword: 'dragon',
        horns: 100
    };


    //Act 
    // Call the function you're testing and set the result to a const
    const props = { animal: dragon };
    const imageItem = new ImageItem(props);
    const html = imageItem.renderHTML();
    const result = html;
    //Assert
    // Make assertions about what is expected valid result
    assert.htmlEqual(result, expected);
});
