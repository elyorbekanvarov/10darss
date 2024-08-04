// String metodlariga oid masalalar

// 2 - masala

// function getLastThreeChars(str) {
//   if (str.length < 3) {
//     return str;
//   }
//   return str.slice(-3);
// }
// const exampleString = "JavaScript";
// console.log(getLastThreeChars(exampleString));

// 3 - masala

// let str = 'salom bolalar yaxshimisizlar';
// let resArr = str.split(' ');
// let res = resArr.map(function(value) {
//     return value[0].toUpperCase() + value.slice(1);
// })
// console.log(res.join(' '));

// 4 - masala

// function probelOlibTashla(str) {
//     return str.trim();
// }
// let test = " salom ";
// console.log(probelOlibTashla(test));

// 5 - masala

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// const exampleString = "JavaScript";
// console.log(reverseString(exampleString));

// 6 - masala

// function countCharacters(str) {
//     return str.length;
// }
// const exampleString = "JavaScript";
// console.log(countCharacters(exampleString));

// 7 - masala

// function repeatStr(str) {
//     return str.repeat(3)
// }
// let test = "salom ";
// console.log(repeatStr(test));

// 8 - masala

// function sonlarniOl(str) {
//     return str.slice(0,3);
// }
// let test = "012salom";
// console.log(sonlarniOl(test));

// 9 - masala

// function birinchiSozniQaytar(str) {
//     return str.substr(0,5)
// }
// let test = "salom dunyo"
// console.log(birinchiSozniQaytar(test));

// 10 - masala

// function findStr(str) {
//     return str.includes('js');
// }
// let test = "js javascript";
// console.log(findStr(test));

// Massivlarga oid masalalar

// 1 - masala

// function maxReturn(arg) {
//     let max = arr[0];
//     arg.filter(function(value) {
//         if (value > max) {
//             max = value
//         }
//     })
//     return max;
// }
// let arr = [1,2,3,4,5,6,7];
// console.log(maxReturn(arr));

// 2 - masala

// function juftSonAjrat(arr) {
//     return arr.filter(num => num % 2 == 0);
// }
// let numbers = [1,2,3,4,5,6,7,8,9];
// console.log(juftSonAjrat(numbers));

// 3 - masala

// function yigindiHisobla(arg) {
//     let sum = 0;
//     for (const iterator of arg) {
//         sum += iterator;
//     }
//     return sum;
// }
// let arr = [1,2,3,4];
// console.log(yigindiHisobla(arr));

// 4 - masala

// function doubleArrayElements(arr) {
//   return arr.map((num) => num * 2);
// }
// const numbersArray = [1, 2, 3, 4, 5];
// console.log(doubleArrayElements(numbersArray));

// 5 - masala

// function removeNegativeNumbers(arr) {
//   return arr.filter((num) => num >= 0);
// }
// const numbersArray = [-10, 5, -3, 8, -1, 0];
// console.log(removeNegativeNumbers(numbersArray));

// 7 - masala

// function massivBirlashtir(arg) {
//     for (const iterator of arg) {
//         newArr.push(iterator)
//     }
//     return arr1.concat(arr2)
// }
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let newArr = [];
// console.log(massivBirlashtir(newArr));

// 8 - masala

// function reverseArr(arg) {
//     return arg.reverse()
// }
// let arr = [1,2,3,4];
// console.log(reverseArr(arr));

// 9 - masala

// function getOddIndexElements(arr) {
//   const result = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// const numbersArray = [10, 20, 30, 40, 50, 60, 70];
// console.log(getOddIndexElements(numbersArray));

// Obyekt va Massivlarga oid masalalar

// 1 - masala

// function getOldestPersonName(people) {
//   let oldestAge = -1;
//   let oldestName = "";
//   for (let i = 0; i < people.length; i++) {
//     if (people[i].age > oldestAge) {
//       oldestAge = people[i].age;
//       oldestName = people[i].name;
//     }
//   }
//   return oldestName;
// }
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// console.log(getOldestPersonName(people));

// 4 - masala

// function sumAges(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i].age;
//   }
//   return total;
// }
// const peopleArray = [
//   { name: "Alice", age: 30 },
//   { name: "Bob", age: 25 },
//   { name: "Charlie", age: 35 },
// ];
// console.log(sumAges(peopleArray));

// 8 - masala

// function incrementAges(people) {
//   return people.map((person) => ({
//     name: person.name,
//     age: person.age + 1,
//   }));
// }
// const people = [
//   { name: "Ali", age: 25 },
//   { name: "Vali", age: 30 },
//   { name: "Hasan", age: 28 },
// ];
// console.log(incrementAges(people));