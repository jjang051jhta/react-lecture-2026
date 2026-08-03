let num01 = 10;
const pi = 3.14;
console.log(num01, "/", pi);
console.log(num01 === "10");
const nums = [10, 20, 30, 40];
console.log(nums[0]);
const nums02 = nums;
nums02[4] = 50;
console.log(nums02[4], "/", nums[4]);
//nums02 = [1, 2, 3, 4, 5];
//...을 spread 연산자
const nums03 = [...nums];
console.log(nums03);
nums03[5] = 100;
console.log(nums, "/", nums03);
const member = { name: "홍길동" };
const newMember = { ...member };
newMember.age = 30;
console.log(member, "/", newMember);
const myName = "장성호";
console.log("나의 이름은 " + myName + " 입니다.");
console.log(`나의 이름은 ${myName} 입니다.`);
const { name, age } = newMember;
//const name = "홍길동";
//const age = 30;
console.log(name, "/", age);
const { name: userName, age: userAge } = newMember;
console.log(userName, "/", userAge);
const animals = ["호랑이", "사자", "곰"];
const [animal01, animal02] = animals;
console.log(animal01, "/", animal02);
import { say as mySay } from "./say.js";
//commonjs 에서는 .js 생략 가능
//es module 방식에서는 js 생략 불가능
mySay();
