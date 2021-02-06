let a = 5;

const str_a = `This is a string with ${a} chars.`

// methods


const title = 'Dark Knight';
const author = 'Ben';

// template stings
let html1 = `
    <h2>${title}</h2>
    <p>By ${author}</p>
`;

// array
let arr = ['Hi', 5, '6']; // push : py-append, concat : py-extend, pop

ele = 5;
b = arr.includes(ele)

a2 = arr.join('-');

// != str会转成number类型， !==才是考虑类型的严格相等


// console.log(arr);

const calcCircleArea = (pi, r) => {
    return pi * r ** 2;
}

a1 = calcCircleArea(3.14, 3);


// callback function: function as a parameter for another function

let l1 = [1,2,3,4,5];
// l1.forEach(element => {
//     console.log(element);
// });

// l1.forEach(function(element){
//     console.log(element ** 2);
// });

l1.forEach( (element, index) => {
    console.log(element, index);
});


// reg

const pattern = /[a-z]{6,}/; 
let index = s.search(pattern);