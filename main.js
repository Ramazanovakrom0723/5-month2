// 31-task

// function item(arr) {
//     let result = {};
//     arr.Each((element) => {
//       result[element] = element.length;
//     });
//     return result;
//   }
//   const input = ["text", "world", "laptop"];
//   const output = item(input);
//   console.log(output);
  









// 32-task 

// function Min_Max(sentence) {
//     const words = sentence.split(' ');
//     let min = words[0];
//     let max = words[0];
//     words.forEach((word) => {
//       if (word.length < min.length) {
//         min = word;
//       }
//       if (word.length > max.length) {
//         max = word;
//       }
//     });
//     return { minWord: min, maxWord: max };
//   }
//   const input = "ustoz 86 dan kottaroq bal qoyseyz yahshi bolardi";
//   const output = Min_Max(input);
//   console.log(output);









// 33-task 

// function getLevel(n) {
//     const result = [];
//     let item = 2;
//     for (let i = 0; i < n; i++) {
//       result.push(Math.pow(item, i));
//     }
//     return result;
//   }
//   console.log(getLevel(4)); 
//   console.log(getLevel(5)); 
  










// 34-task 

// function min_world(sentence) {
//     const words = sentence.split(' ');
//     let item = words[0];
//     words.forEach((word) => {
//       if (word.length < item.length) {
//         item = word;
//       }
//     });
  
//     return item;
//   }
  
//   console.log(min_world("ustoz 86 dan kottaroq bal qoyseyz yahshi bolardi")); 
  












// 35-task 

// function Values(obj, n) {
//     const item = {};
//     for (const key in obj) {
//       if (Object.hasOwnProperty.call(obj, key)) {
//         item[key] = obj[key] * n;
//       }
//     }
//     return item;
//   }
//   const obj = { a: 2, b: 3, c: 4 };
//   const n = 3;
//   const result = Values(obj, n);
//   console.log(result); 
  











// 36-task 

// function countNumbers(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (!isNaN(parseInt(str[i]))) {
//         count++;
//       }
//     }
//     return count;
//   }
//   const input = "ustoz 86 dan kottaroq bal qoyseyz yahshi bolardi";
//   const totalNumber = countNumbers(input);
//   console.log("Sonlar soni: ", totalNumber);
  













// 37-task 

// const item = (...numbers) => {
//     const total = numbers.reduce((acc, num) => acc + num, 0);
//     const box = Array.from(String(total), Number);
//     return box;
// };
// const numbers = [1, 22, 3];
// const result = item(...numbers);
// console.log(result);











// 38-task 

// const item = (word) => {
//     const words = word.split(' ');
//     let count = 0;
//     words.forEach(word => {
//         if (word.includes('a') || word.includes('A')) {
//             count++;
//         }
//     });
//     return count;
// };
// const text = "ustoz 86 dan kottaroq bal qoyseyz yahshi bolardi";
// const result = item(text);
// console.log(result); 











// 39-task 

const item = (n, k) => {
    let result = 1;
    for (let i = 0; i < k; i++) {
        result *= n;
    }
    return result;
};
let n = 8;
let k = 3;
let result = item(n, k);
console.log(result); 