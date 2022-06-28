function getLetter(type) {
    let letterCheck = prompt(`Enter the first letter of the ${type}`);
    let notLetter = onlyEngLetters(letterCheck) === false || letterCheck.length > 1;

    while (notLetter) {
        alert('This is not an English letter, enter English letters only (only one letter)!');
        letterCheck = prompt(`Enter the first letter of the ${type}`);
        notLetter = onlyEngLetters(letterCheck) === false || letterCheck.length > 1;
    }

    return letterCheck;
}

function onlyEngLetters(str) {
    return /^[a-zA-Z]+$/.test(str);
}

function getGender() {
    let genderCheck = prompt('Enter the gender please, \'male\' or \'female\'');

    while (genderCheck != 'male' && genderCheck != 'female') {
        alert('Enter \'male\' or \'female\' only!');
        genderCheck = prompt('Enter the gender please, \'male\' or \'female\'');
    }

    return genderCheck;
}

nameFirstLetter = getLetter('name');
nameFirstLetter = nameFirstLetter.toUpperCase();
surnameFirstLetter = getLetter('surname');
surnameFirstLetter = surnameFirstLetter.toUpperCase();



chosenGender = getGender();



function getRandomName(letter1, letter2, gender) {
    let givenName = '';
    let randomIndex = 0;

    if (gender === 'male') {
        randomIndex = getRandomIndex(maleNames[letter1]);
        givenName = maleNames[letter1][randomIndex];
    } else {
        randomIndex = getRandomIndex(femaleNames[letter1]);
        givenName = femaleNames[letter1][randomIndex];
    }

    randomIndex = getRandomIndex(surnames[letter2]);
    let givenSurname = surnames[letter2][randomIndex];


    return (givenName + ' ' + givenSurname);

}

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}



const maleNames = {
    'A': ['Adam','Alex','Arnold','Alan'],
    'B': ['Benjamin','Brendon','Bruce','Bryan'],
    'C': ['Carl','Charles','Chris','Carlos'],
    'D': ['Dereck','Daniel','Dwayne','Diego'],
    'E': ['Ethan','Elijah','Eliot','Erick'],
    'F': ['Fred','Finn','Franklin','Felix'],
    'G': ['George','Graham','Gabriel','Gary'],
    'H': ['Henry','Harvey','Harry','Houson'],
    'I': ['Isaac','Ibrahim','Iker','Ismael'],
    'J': ['Jeff','Jerome','James','Joshua'],
    'K': ['Keith','Keanu','Kendrick','Kurt'],
    'L': ['Luke','Lee','Liam','Lloyd'],
    'M': ['Max','Michael','Marcellus','Milton'],
    'N': ['Nick','Nathan','Noah','Norman'],
    'O': ['Oliver','Oscar','Ozzy','Orlando'],
    'P': ['Paul','Peter','Preston','Phillip'],
    'Q': ['Quentin','Quinn','Quincy'],
    'R': ['Ron','Ryan','Ray','Richard'],
    'S': ['Sean','Simon','Scott','Stephen'],
    'T': ['Thomas','Terrence','Tim','Tucker'],
    'U': ['Ulysses','Uriah','Uziel'],
    'V': ['Vance','Victor','Vince','Virgil'],
    'W': ['William','Wayne','Winston','Walter'],
    'X': ['Xavier','Xaiden','Xander'],
    'Y': ['Yousef','Yahir','Yeshua','Yunus'],
    'Z': ['Zack','Zayn','Zaiden']
}

const femaleNames = {
    'A': ['Ariana','Alice','Anabelle','Aubrie'],
    'B': ['Bella','Bonnie','Breanna','Brigitte'],
    'C': ['Cara', 'Candace','Camella','Cindy'],
    'D': ['Daisy','Danielle','Dora','Dixie'],
    'E': ['Erica','Elisabeth','Ellen','Elsa'],
    'F': ['Faith','Flora','Fiona','Felicity'],
    'G': ['Grace','Giovanna','Grace','Gwen'],
    'H': ['Holly','Hailey','Heidy','Helen'],
    'I': ['Irene','Ingrid','Isabelle','Ivy'],
    'J': ['Julia','Jacquelyn','Jade','Janett'],
    'K': ['Kylie','Kaia','Kamila','Kate'],
    'L': ['Layla','Lara','Lena','Lexa'],
    'M': ['Martha','Maia','Mariah','May'],
    'N': ['Nelly','Nancy','Nataly','Norah'],
    'O': ['Olivia','Octavia','Odette','Oakley'],
    'P': ['Penelopy','Prudence','Petra','Phoebe'],
    'Q': ['Quinncy','Queen','Quinn'],
    'R': ['Rebecca','Reagan','Renata','Rita'],
    'S': ['Sofia','Sandra','Sarah','Selena'],
    'T': ['Theresa','Taylor','Tiffany','Tina'],
    'U': ['Ursula','Uma','Unique'],
    'V': ['Victoria','Venice','Valerie','Violett'],
    'W': ['Wendy','Whitney','Wynter'],
    'X': ['Xandra','Xena','Ximena'],
    'Y': ['Yara','Yasmine','Yuliana','Yuna'],
    'Z': ['Zoey','Zia','Zella','Zelda']
}

const surnames = {
    'A': ['Allister','Ackerman','Anders','Anderson'],
    'B': ['Boyd','Briscoe','Boone','Barton'],
    'C': ['Crenshaw', 'Crocker','Cutting','Crawford','Cassidy'],
    'D': ['Dornan','Dallian','De Armas','Dorsia'],
    'E': ['Erwin','Erfinder','Erder','Ehrmann'],
    'F': ['Frenzal','Farkas','Friedman','Felicity'],
    'G': ['Gannon','Garret','Grant','Gunderson'],
    'H': ['Hostetler','Hardin','Horowitz','Hughes','House'],
    'I': ['Irwing','Innerberg','Ingram','Illinois'],
    'J': ['Johnson','Jamison','Jackson','Jacobs'],
    'K': ['Kimball','Kowalski','Kieran','Krueger'],
    'L': ['Lewis','Lawson','Lineholm','Lancer'],
    'M': ['McLafferty','Morales','Martimer','Moore'],
    'N': ['Nash','Noonan','Notch','Nattler'],
    'O': ['Ortal','Orwell','Overson','O\'Brien'],
    'P': ['Parry','Parker','Phebus','Powell'],
    'Q': ['Quade','Quarry','Quarterman','Quello'],
    'R': ['Ronte','Rivas','Robinson','Rogers'],
    'S': ['Straus','Smith','Schuler','Stone'],
    'T': ['Thorn','Torini','Thomson','Turner'],
    'U': ['Ulrich','Ulmer','Upchurch','Underhill'],
    'V': ['Valentine','Vargas','Velasco','Venido'],
    'W': ['Whitman','Weathers','Wilkins','Watson'],
    'X': ['Xenakis','Xinos','Xanthos'],
    'Y': ['Yates','York','Yeager','Youngs'],
    'Z': ['Zappa','Zoeller','Ziegler','Zimmer']
}

let randomName = getRandomName(nameFirstLetter,surnameFirstLetter,chosenGender);
alert (randomName);
