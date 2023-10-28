import wordBank from "./wordle-bank.json";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

// export const generateWordSet = async () => {
//   let wordSet;
//   let array ;
//   let todaysWord;
//   await fetch(wordBank)
//     .then((response) => response.text())
//     .then((result) => {
//       const wordArr = result.split("\n") ;
//       console.log(wordArr)
//       todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
//       wordSet = new Set(wordArr);
//       array = wordArr ;
//     });
//     console.log(todaysWord, wordSet)
//   return { wordSet, todaysWord, array };
// };

// const sampleData = [
//   "SCOWL",
//   "WAGER",
//   "TYING",
//   "SWARM",
//   "SHADY",
//   "LYING",
//   "HEADY",
//   "FLUKE",
//   "BLAND",
// ];

// export const generateWordFromJSON = async () => {
//   let wordArr;
//   let todaysWord;
  // await fetch(wordBank)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result)
  //     const wordArr = result.words;
  //     todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  //     console.log(wordArr)
  //   });
//   return { wordArr, todaysWord };
// };

// let jsonString = JSON.stringify(jsonFilePath);
// let jsonData = JSON.parse(jsonString);


export const generateWordFromJSON = async () => {
  const wordList = wordBank.data ;
  const todaysWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(wordList , todaysWord)
  return { wordList, todaysWord };
}
