// let someFruit = [
//   "mangoes",
//   "peaches",
//   "apples",
//   "blueberries",
//   "aubergine",
//   "secret banana",
//   "papayas",
//   "banana",
//   "durian",
//   "tomatoes",
//   "rambutan",
//   "mulberries",
//   "kiwis",
//   "jackfruit",
//   "watermelon",
//   "zach fruit",
//   "grape",
//   "coconut",
// ];

// Process someFruit and build an array of li tags
// let fruitList = someFruit.map(((fruit, index) => {
//   return <li key={fruit} fancynumber={index}>{fruit}</li>;
// }));

// Functions MUST return JSX, if you wanna use it in HTML
// a.k.a. in place of inline JSX:
export default function FruitList(props) {
  return props.listToShow.map(fruit => {
    return <li key={fruit}>
      {fruit}
    </li>
  });
}

// module.exports = FruitList;
// module.exports = {
//     FruitList
// }
