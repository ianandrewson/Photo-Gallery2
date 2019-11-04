export const generateKeywords = (images) => {
    let keywords = [];
    images.forEach(image => {
        if (! keywords.includes(image.keyword)){
            keywords.push(image.keyword);
        }
    });
    
    let keywordDOM = document.createElement('select');
    keywordDOM.for = 'filter';
    keywordDOM.id = 'filter';


    keywords.forEach(keyword => {
        const option = document.createElement('option');
        option.value = keyword;
        option.textContent = keyword;
        
        keywordDOM.appendChild(option);
    });
    return keywordDOM;
};