let quote = document.getElementById('quote');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

const url = 'https://api.quotable.io/random';

let getQuote = () => {
    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        quote.textContent = data.content;
        author.textContent = data.author;
    })
    .catch((err) => console.log(err));

    }

btn.addEventListener('click', getQuote);

getQuote();
    



    