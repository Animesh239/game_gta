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

export const generateWordFromJSON = async () => {
  let wordArr;
  let todaysWord;
  // await fetch(wordBank)
  //   .then((response) => response.json())
  //   .then((result) => {
  //     console.log(result)
  //     const wordArr = result.words;
  //     todaysWord = wordArr[Math.floor(Math.random() * wordArr.length)];
  //     console.log(wordArr)
  //   });

  const response = await fetch(wordBank);
  console.log(response)
  // const resultString = await response.stringify();
  // const result = JSON.parse(resultString);
  // console.log(result)
  return { wordArr, todaysWord };
}


// let jsonString = JSON.stringify(jsonFilePath);
// let jsonData = JSON.parse(jsonString);