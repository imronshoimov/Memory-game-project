// card options
const cardArray = [
    {
        name: 'cheesburger',
        img: './images/cheesburger.jpg'
    },
    {
        name: 'cheesburger',
        img: './images/cheesburger.jpg'
    },
    {
        name: 'fries',
        img: './images/fries.jpg'
    },
    {
        name: 'fries',
        img: './images/fries.jpg'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.webp'
    },
    {
        name: 'hotdog',
        img: './images/hotdog.webp'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.webp'
    },
    {
        name: 'ice-cream',
        img: './images/ice-cream.webp'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg'
    },
    {
        name: 'milkshake',
        img: './images/milkshake.jpg'
    },
    {
        name: 'pizza',
        img: './images/pizza.jpeg'
    },
    {
        name: 'pizza',
        img: './images/pizza.jpeg'
    }
]

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// create your board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++ ) {
            let card = document.createElement('img')
            card.classList.add('images-size')
            card.setAttribute('src', './images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
    }
}