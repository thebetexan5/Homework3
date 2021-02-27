// Each collection maintains their own state
const specialChars = {
  selected: false,
  content: [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    ".",
  ],
};
const numericChars = {
  selected: true,
  content: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
};
const lowerChars = {
  selected: true,
  content: [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ],
};
const upperChars = {
  selected: false,
  content: [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ],
};

const passwordConfig = {
  passwordLength: 15,
  selectionValid: true,
  configuredCollection: [],
  configureCollection: function configuredCollection() {
    // This function configures the character collection based on selections

    const collections = [specialChars, numericChars, lowerChars, upperChars]; // Array of collections needed to iterate through

    var updatedCollection = [];
    collections.forEach((collection) => {
      if (collection.selected === true) {
        updatedCollection.push(collection);
      }
    });
    this.configuredCollection = updatedCollection;
  },
  checkValidity: function checkValidity() {
    // We need to ensure that at least one collection is selected
    if (
      specialChars.selected === false &&
      numericChars.selected === false &&
      lowerChars.selected === false &&
      upperChars.selected === false
    ) {
      passwordConfig.selectionValid = false;
      console.error("No selection has been made!");
      return false;
    } else {
      passwordConfig.selectionValid = true;
      return true;
    }
  },
};

// Random number generator
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.ceil(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Run Durstenfeld shuffle algorithm on array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

// The following function is used to generate a password
const generatePassword = () => {
  // Collection needs to be configured based on collection selection
  passwordConfig.configureCollection();

  const generatedPasswordString = [];
  let currentCollection = 0;

  // Generate characters that will be in password based on collection
  while (generatedPasswordString.length < passwordConfig.passwordLength) {
    // Alternate through each configured collection during each iteration
    const rand = getRandomInt(
      0,
      passwordConfig.configuredCollection[currentCollection].content.length - 1
    );
    generatedPasswordString.push(
      passwordConfig.configuredCollection[currentCollection].content[rand]
    );

    // Move on to the next collection
    if (currentCollection < passwordConfig.configuredCollection.length - 1) {
      currentCollection++;
    } else {
      currentCollection = 0;
    }
  }

  // Run shuffling algorithm on generatedPasswordString
  shuffleArray(generatedPasswordString);

  // Return generated password array as a string
  return generatedPasswordString.join("");
};