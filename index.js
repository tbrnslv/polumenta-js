const letters = require("./letters");

const getRandomInt = max => {
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - 0));
};

const getPolumenta = (script, gender) => {
  const choosenScript = script || "latin";
  const choosenGender = gender || "male";
  let currentPolumenta = "";
  currentPolumenta +=
    letters[choosenScript].a[getRandomInt(letters[choosenScript].a.length)];
  currentPolumenta +=
    letters[choosenScript].b[getRandomInt(letters[choosenScript].b.length)];
  currentPolumenta +=
    letters[choosenScript].c[getRandomInt(letters[choosenScript].c.length)];
  return (currentPolumenta +=
    choosenGender === "male"
      ? letters[choosenScript].d[0]
      : letters[choosenScript].d[1]);
};

module.exports = getPolumenta;
