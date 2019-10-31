const letters = require("./letters");

const getRandomInt = max => {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - 0));
};

const getGenderEnding = (gender, choosenScript) => {
  switch (gender) {
    case "male":
      return letters[choosenScript].d[0];
    case "neutral":
      return letters[choosenScript].d[1];
    case "female":
      return letters[choosenScript].d[2];
    default:
      return letters[choosenScript].d[0];
  }
};

const getPolumenta = (script, gender) => {
  const choosenScript = script || "latin";
  const choosenGender = gender || "male";
  let currentPolumenta = "";
  currentPolumenta += letters[choosenScript].a[getRandomInt(letters[choosenScript].a.length)];
  currentPolumenta += letters[choosenScript].b[getRandomInt(letters[choosenScript].b.length)];
  currentPolumenta += letters[choosenScript].c[getRandomInt(letters[choosenScript].c.length)];
  return (currentPolumenta += getGenderEnding(choosenGender, choosenScript));
};

/**
 * Generate Polumenta
 * @param {string} script Script - 'latin' or 'cyrilic', default is 'latin' (this parameter changes script of Polumenta's name)
 * @param {string} gender Gender - 'male', 'neutral' or 'female', default is 'male' (this parameter changes last letter of Polumenta's name)
 * @return {string}
 */
module.exports = (script, gender) => {
  return getPolumenta(script, gender);
};
