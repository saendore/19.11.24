// const book = {
//     title: "Война и Мир",
//     author: "Лев Толстой",
//     pages: 1274,
//     isFinished: true,
//     userReading: [1946, 1293, 7743]
// }

// const book1 = {
//     title: "Интерстеллар. Наука за кадром",
//     author: "Кип Торн",
//     pages: 336,
//     isFinished: true,
//     userReading: [1324, 5697, 9579]
// }

// const book2 = {
//     title: "Ночная сменя",
//     author: "Стивен Кинг",
//     pages: 480,
//     isFinished: true,
//     userReading: [2145, 5963, 2156]
// }

// let books = [book, book1, book2]
// book.userReading = undefined
// book['isFinished']

// const languages = ["Java", "TypeScript", "Julia", "C#", "JavaScript", "Node.js"]
// const jlanguages = languages.filter(function (language) {
//     return language.startsWith("J")
// })

// var arr = ["Яблоко", "Апельсин", "Груша"]
// arr.forEach(function(item) {
//     console.log(item)
// });

1;
function sumObjs(Objs) {
  let sum = 0;
  for (let Obj of Object.values(Objs)) {
    sum += Obj;
  }

  return sum;
}

let Objs = {
  price1: 100,
  price2: 150,
  price3: 200,
  price4: 100,
  price5: 150,
};

alert(sumObjs(Objs));

2;
let array = [
  { id: 1, name: "apple" },
  { id: 2, name: "watermelon" },
  { id: 3, name: "qiwi" },
  { id: 4, name: "lemon" },
];

let result = array.map((obj) => Object.values(obj));

console.log(result);
/// iuhiuhiuhiuiu
3;
function logString(...args) {
  const result = args.join(" ") + " "; //replaceAll
  console.log(result);
}

logString("Hello", "my", "world!");

4
// console.log(сheckObj({id: 1, particle: 10}))
// console.log(сheckObj({id: 2: name: "tag"}))

function checkbook(book) {
  return "bookAuthor" in book;
}

console.log(checkbook({id: 5, bookAuthor: "tttttt"}));
console.log(checkbook({id: 1, bookAuthor: "Vova"})); 
console.log(checkbook({id: 2, test: "tttttt"}));

5


