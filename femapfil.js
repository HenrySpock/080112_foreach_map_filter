/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/

let dvArr1 = [1,2,3]
let dvArr2 = [5,1,2,3,10] 

function doubleValues(arr) {
    const doubledArray = [];
  
    arr.forEach((value) => {
      doubledArray.push(value * 2);
    });
  
    return doubledArray;
  }

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/

let oeArr1 = ([1, 2, 3, 4, 5, 6])
let oeArr2 = ([12, 25, 37, 48, 55, 63])

function onlyEvenValues(arr) {
    const evenValuesArray = [];
  
    arr.forEach((value) => {
      if (value % 2 === 0) {
        evenValuesArray.push(value);
      }
    });
  
    return evenValuesArray;
  }

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/

let sfal1 = ['The', 'Empire', 'Strikes', 'Back']
let sfal2 = ['Robin', 'Hood', '1938']

function showFirstAndLast(arr) {
    const firstAndLastCharsArray = [];
  
    arr.forEach((value) => {
      const firstChar = value.charAt(0);
      const lastChar = value.charAt(value.length - 1);
      const firstAndLastChars = `${firstChar}${lastChar}`;
      firstAndLastCharsArray.push(firstAndLastChars);
    });
  
    return firstAndLastCharsArray;
  }

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/

let akav1 = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
let akav2 = [{name: 'John'}, {name: 'Wesley'}, {name: 'Hardin'}]

function addKeyAndValue(arr, key, value) {
    arr.forEach((obj) => {
      obj[key] = value;
    });
  
    return arr;
  }

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const lowercaseStr = str.toLowerCase();
    const count = {};
  
    lowercaseStr.split('').forEach((char) => {
      if (vowels.includes(char)) {
        count[char] = (count[char] || 0) + 1;
      }
    });
  
    return count;
  }

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

let dvwm1 = [2, 3, 5]
let dvwm2 = [-1, 2, -3, 50, -43]

function doubleValuesWithMap(arr) {
    return arr.map((value) => {
      return value * 2;
    });
  }

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

let vti1 = [20, 18, -5, 1000, -3]
let vti2 = [-1, 2, -3, 4, -5, 6, -7, 8, -9]

function valTimesIndex(arr) {
    return arr.map((value, index) => {
      return value * index;
    });
  }

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

let ek1 = [{movie: 'Batman'}, {movie: 'Batwoman'}, {movie: 'Batboy'}, {movie: 'Batgirl'}]
let ek2 = [{song: 'Batsong'}, {song: 'Catsong'}, {song: 'Dogsong'}, {song: 'Fishsong'}]

function extractKey(arr, key) {
    return arr.map((obj) => {
      return obj[key];
    });
  }

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

let efn1 = [
    {first: 'Luke', last:"Skywalker"}, 
    {first: 'Mark', last:"Waterwalker"}, 
    {first: 'John', last:"Lavawalker"}, 
    {first: 'Ringo', last:"Drumbeater"}
]

function extractFullName(arr) {
    return arr.map((obj) => {
      return `${obj.first} ${obj.last}`;
    });
  }

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

const fbv1 = [
    {first: 'Elie', last: 'Schoppik'},
    {first: 'Tim', last: 'Garcia', isCatOwner: true},
    {first: 'Matt', last: 'Lane'},
    {first: 'Colt', last: 'Steele', isCatOwner: true},
];

function filterByValue(arr, key) {
    return arr.filter((obj) => {
      return obj[key] !== undefined;
    });
  }

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

let fArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let fArr2 = [10, 20, 30, 40, 50, 60, 70, 80, 90]

function find(arr, value) {
    const filteredArray = arr.filter((element) => {
      return element === value;
    });
  
    return filteredArray[0];
  }

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/
 
let fio1 = [
    {first: 'Elie', last: 'Schoppik', isDogOwner: true},
    {first: 'Tim', last: 'Garcia', isCatOwner: true},
    {first: 'Matt', last: 'Lane', isPizzaOwner: false},
    {first: 'Colt', last: 'Steele', isCatOwner: true},
  ] 

function findInObj(arr, key, value) {
    const filteredArray = arr.filter((obj) => {
      return obj[key] === value;
    });
  
    return filteredArray[0];
  }

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const newStrArray = str.toLowerCase().split('').filter((char) => {
      return !vowels.includes(char);
    });
  
    return newStrArray.join('');
  }

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

let don1 = [2, 3, 4, 5, 6, 77]
let don2 = [22, 33, 44, 55, 66, 7]

function doubleOddNumbers(arr) {
    const oddNumbers = arr.filter((num) => {
      return num % 2 !== 0;
    });
  
    const doubledOddNumbers = oddNumbers.map((num) => {
      return num * 2;
    });
  
    return doubledOddNumbers;
  }
