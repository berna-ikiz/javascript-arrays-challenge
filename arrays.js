/* 1. map() Challenge */
let numbers = [1, 2, 3];
const mappedNumbers = numbers.map((item) => item * 2);
console.log(mappedNumbers);

/*  2. forEach() Challenge */
let fruits = ["🍎", "🍌", "🍓"];
fruits.forEach((fruit) => console.log("This is", fruit));

/* 3. filter() Challenge */
numbers = [5, 12, 8, 21];
const filteredNumbers = numbers.filter((value) => value > 10);
console.log(filteredNumbers);

/* 4. find() Challenge */
fruits.push("🍍");
const banana = fruits.find((fruit) => fruit === "🍌");
console.log(banana);

/* 5. includes() Challenge */
const isIncludeApple = fruits.includes("🍎");
console.log(isIncludeApple);

/* 6. slice() Challenge */
numbers = [1, 2, 3, 4, 5];
const slicedNumbers = numbers.slice(0, 2);
console.log(slicedNumbers);

/* 7. push() Challenge */
fruits = ["🍎", "🍌"];
fruits.push("🍉");
console.log(fruits);

/* 8. pop() Challenge */
fruits.pop();
console.log(fruits);
