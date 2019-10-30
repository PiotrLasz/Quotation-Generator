// Arrays containig quotation parts

const subject1 = ['I', 'You', 'He', 'She', 'Donald Trump', 'Barrack Obama', 'Queen Victoria', 'Vladimir Putin', 'Mr. Bean', 'Ed Sheeran', 'Justin Bieber', 'Ariana Grande', 'Cristiano Ronaldo', 'Dwayne Johnson', 'Taylor Swift'];
const verb1 = ['like', "don't like", 'like the smell of roasted', "wish to know how to cook", 'eat', 'tried', 'never tried', "can't stand", 'dream about', 'know how to prepare', 'eat gravy with', 'eat cheese sauce with', 'eat guacamole with', 'made song about', 'wrote poem about', 'like grilled', 'like roasted'];
const object1 = ['milk', 'potatoes', 'pasta', 'pineapples', 'bananas', 'bread', 'haggis', 'tin of tuna', 'caviar', 'glass of coca-cola', 'chips', 'broccoli', 'steak', 'cotton candy', 'carrot', 'chicken drummstick'];

const subject2 = ['I', 'You', 'He', 'She', 'Hilary Clinton', 'Your neighbour', 'Elon Musk', 'Britney Spears', 'My dog', 'Your pet', 'Bob Sinclar', 'Indiana Jones', 'Katy Parry', 'Harry Potter', 'Your friends cat', 'John Lenon', 'My school friend', 'The Royal Family', 'Bill Gates', 'Mayor of your city', 'Napoleon Bonaparte', 'Chingis Khan', 'Your favorite Hollywood actor', 'Alice', 'The white rabbit', 'My friend', 'Your friend', 'My favorite singer', 'Army of Sauron', 'A fellowship of the ring'];
const verb2 = ['like to travel to', "don't like to travel to", 'visited', "never been to", 'live in', 'want to visit', 'like to party in', "played quidditch in", 'use a public transport in', 'search for a crystal skull in', 'had a concert in', 'spend holidays in', 'was born in', 'rent a room in', 'was teleported to', 'played Monopoly in', 'is lost in the jungle that grows in', 'was kidnapped by wild tribes of', 'met me in', 'invites you to', 'go hiking in', 'fell into the rabbit hole and landed in'];
const object2 = ['my house', 'your kitchen', 'Costa Rica', 'International Space Station', 'Tenerife', 'Maldives', 'French Polynesia', 'your wardrobe', 'London', 'house of Bill Gates', 'virtual reality', 'The City of New York', 'Nostromo starship', 'my friends backyard', 'Hogwart school of magic', 'the temple of doom', 'South Africa', 'Poland', 'grasslands of Mongolia', 'Russian Ural Montains', 'peak of Kilimanjaro', 'Area 51', 'Roswell', 'Wonderland'];

// Variable containing number of generated quotes, and variable picking between 2 sets of quote arrays.

let selectNumberOfQuotes = 1;
let selectQuote = 1;

// Function picking random quotation element from array

function randomElement (array) {
    return Math.floor(Math.random()*array.length);
}

// Function logging the random quotation to console

function displayQuote (subject, verb, object){
console.log(subject[randomElement(subject)] + ' ' + verb[randomElement(verb)] + ' ' + object[randomElement(object)]);
}

// Function checking picked number of quotes and picked set of quote elements to display the content accordingly 

function pickAndDisplay () {
    if (selectNumberOfQuotes > 0 && selectNumberOfQuotes <= 5 && selectQuote == 1) {
        for (let i = 1; i <= selectNumberOfQuotes; i++) {
            displayQuote(subject1, verb1, object1);
        };
    } else if (selectNumberOfQuotes > 0 && selectNumberOfQuotes <= 5 && selectQuote == 2) {
        for (let i = 1; i <= selectNumberOfQuotes; i++) {
            displayQuote(subject2, verb2, object2);
        };
    } else {
        console.log('please pick number of quotes between 1 - 5 and select quote between 1 - 2');
    };
};

pickAndDisplay();
