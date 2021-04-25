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

// check for matches

function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]) {
        alert("You found a match")
        cards[optionOneId].setAttribute('src', './images/white.jpg')
        cards[optionTwoId].setAttribute('src', './images/white.jpg')
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src', './images/blank.jpg')
        cards[optionTwoId].setAttribute('src', './images/blank.jpg')
        alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
    }
}