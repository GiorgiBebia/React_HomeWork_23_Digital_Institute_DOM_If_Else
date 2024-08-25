// Homework 1
const numArr = [1, 2, 3, 4, 5];

console.log(numArr);
console.log(`მასივის სიგრძე არის: `, numArr.length);

// მასივში არსებული ელემენტების რაოდენობას ეწოდება მასივის სიგრძე ?

console.log(`მასივის პირველი ელემენტი არის: `, numArr[0]);
console.log(`მასივის მესამე ელემენტი არის: `, numArr[2]);

// მასივის ბოლოში ელემენტის დამატება
numArr.push(789);

// მასივის თავში ელემენტის დამატება
numArr.unshift(700);

console.log(numArr);
console.log(`განახლებული მასივის სიგრძე არის: `, numArr.length);

// მასივიდან პირველი ელემენტის ამოშლა
numArr.shift();

//მასივიდან ბოლო ელემენტის ამოშლა
numArr.pop();

console.log(numArr);

// Homework 1

// Homework 2
const colors = [];

colors.push("green", "pink", "purple");

console.log(colors);

console.log(`მასივის პირველი ფერი: `, colors[0]);
console.log(`მასივის ბოლო/მესამე ფერი: `, colors[2]); // ერთი ვარიანტი
console.log(`მასივის ბოლო/მესამე ფერი: `, colors[colors.length - 1]); // მეორე ვარიანტი

const pElement = document.querySelector("p");

pElement.textContent = "გამარჯობა";
pElement.style.color = colors[1];
pElement.style.backgroundColor = colors[0];
// Homework 2

// Homework 3
const city = ["Poti", "Dubai", "Barcelona", "Abu Dhabi"];

const h2 = document.querySelector("h2");

h2.textContent = `My Most Favourite City is - ${city[0]}, ${city[1]}, ${city[2]}, ${city[3]}`;

// Homework 3

// Homework 4
const mixArr1 = ["First", 2, "Third", 4, true, false, null];
const mixArr2 = ["I", "am", "Giorgi", "Bebia", 1999, true, "Georgian"];

// პირველი ვარიანტი

if (mixArr1.length > mixArr2.length) {
  console.log(`mixArr1 is Longer`);
} else if (mixArr1.length < mixArr2.length) {
  console.log(`mixArr2 is Longer`);
} else if (mixArr1.length === mixArr2.length) {
  console.log(`Arrays Have Same Length`);
}

// მეორე ვარიანტი
if (mixArr1.length > mixArr2.length) console.log(`mixArr1 is Longer`);
if (mixArr1.length < mixArr2.length) console.log(`mixArr2 is Longer`);
if (mixArr1.length === mixArr2.length) console.log(`Arrays Have Same Length`);

// Homework 4
