const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function decode(expr) {
  const charactersArray = expr.match(/.{10}/g);
  const words = charactersArray
    .map((character) => {
      const deleteEmptyCharacters = parseInt(character).toString();
      const splitCharacters = deleteEmptyCharacters.match(/.{2}/g);
      const characterMorseCode = splitCharacters
        .map((el) => {
          switch (el) {
            case "10":
              return `.`;
            case "11":
              return `-`;
            case "Na":
              return ` `;
          }
        })
        .join("");
      const convertCharacter = MORSE_TABLE[characterMorseCode] || " ";
      return convertCharacter;
    })
    .join("");
  return words;
}

module.exports = {
  decode,
};
