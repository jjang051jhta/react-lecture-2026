const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce(function (accumulator, currentValue) {
  accumulator += currentValue;
  console.log(accumulator, "/", currentValue);
  return accumulator;
}, 0);
const sum02 = numbers.reduce((acc, curr) => (acc += curr), 0);
console.log(sum02);
const cart = [
  { name: "사과", price: 1000 },
  { name: "복숭아", price: 3000 },
  { name: "배", price: 5000 },
];
const sum03 = cart.reduce((acc, curr) => acc + curr.price, 0);
console.log("cart총합 : ", sum03);

const fruits = ["사과", "배", "사과", "복숭아", "복숭아", "딸기", "사과"];
const result = fruits.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
//1===>acc["사과"] = 1
//2===>acc["배"] = 1
//3===>acc["사과"] = 2
console.log(result);
{"사과":1,"배:1"}
const dummy = {
  사과: 1,
  복숭아: 1,
};
console.log(dummy["사과"]);
// {
//   사과:3,
//   복숭아:2,
//   딸기:1,
//   배:1
// }
