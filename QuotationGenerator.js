// Arrays containig quotation parts

const subject = ['I', 'You', 'He', 'She', 'Donald Trump', 'Barrack Obama', 'Queen Victoria', 'Vladimir Putin', 'Mr. Bean', 'Ed Sheeran', 'Justin Bieber', 'Ariana Grande', 'Cristiano Ronaldo', 'Dwayne Johnson', 'Taylor Swift'];
const verb = ['like', "don't like", 'know', "don't know", 'eat', 'tried', 'never tried', "can't stand", 'dream about', 'know how to prepare', 'eat gravy with', 'eat cheese sauce with', 'eat guacamole with', 'made song about', 'wrote poem about', 'like grilled', 'like roasted'];
const object = ['milk', 'potatoes', 'pasta', 'pineapples', 'bananas', 'bread', 'haggis', 'it', 'caviar', 'glass of coca-cola', 'chips', 'broccoli', 'steak', 'cotton candy', 'carrot', 'chicken drummstick'];

// Function picking random quotation element from array

function randomElement (array) {
    return Math.floor(Math.random()*array.length);
}

// Logging the random quotation to console

console.log(subject[randomElement(subject)] + ' ' + verb[randomElement(verb)] + ' ' + object[randomElement(object)]);
