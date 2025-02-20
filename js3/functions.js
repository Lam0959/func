function removeUser() {
}
function createPost() {
}
function addItem() {
}
function readFile() {
}
function getElements() {
}
function createParentElement() {
}
function startGame() {
}
function sendMessage() {
}



function openDoor(door) {
}
function openWindow(window) {
}
function takePen(pen) {
}
function takeBook(book) {
}
function takeKeys(keys) {
}
function giveMe(me) {
}
function displayInfo(info) {
}
function saveSettings(settings) {
}
function getName(userName) {
}
function keepHitting(hitting) {
}




function my_f(num) {
  return num + 10;
}

function calculateNumber() {
let x = 5;
x = x + 100;
x = x / 5;

return x;
}
const result = calculateNumber()


function sum(a, b) {
const sum = 1 + 2;
  return sum;
}

function sum(a, b) {
  return a + b;
}

let results = sum(1, 2);



function multiplyByTwo1(num) {
  return num * 2;
}


function multiplyByTwo2(num) {
  return num * 2;
}


function multiplyByTwo3(num) {
  return num * 2;
}


function multiplyByTwo4(num) {
  return num * 2;
}


function multiplyByTwo5(num) {
  return num * 2;
}


console.log(multiplyByTwo1(5)); 
console.log(multiplyByTwo2(10)); 
console.log(multiplyByTwo3(15)); 
console.log(multiplyByTwo4(20)); 
console.log(multiplyByTwo5(25)); 



function getFirstElement(arr) {
  return arr[0];
}


const exampleArray = [10, 20, 30, 40, 50];


console.log(getFirstElement(exampleArray));



function getLastElement(number) {
  return number[4];
}


const Arr = [10,20, 30, 40, 50];


console.log(getLastElement(Arr));



// Объявление функции printMyFullName, принимающей два параметра: firstname и secondname
function printMyFullName(firstname, secondname) {
  // Создание переменной fullname, содержащей полное имя, сформированное из firstname и secondname
  const fullname = `${firstname} ${secondname}`;
  
  // Возвращение значения переменной fullname
  return fullname;
}

// Вывод в консоль результата вызова функции printMyFullName с аргументами 'into' и 'code'
console.log(printMyFullName('into', 'code'));

// Объявление функции getSumOfFirstAndLastElement, принимающей массив arr в качестве параметра
function getSumOfFirstAndLastElement(arr) {
  // Проверка: если длина массива меньше 2
  if(arr.length < 2) {
    // Возвращение строки с сообщением о необходимости наличия минимум двух элементов
    return 'леее, минимум два элемента нужно жи есть';
  } else {
    // Создание переменной lastIndex, равной индексу последнего элемента массива
    const lastIndex = arr.length - 1;
    
    // Возвращение суммы первого и последнего элементов массива
    return arr[0] + arr[lastIndex];
  }
}

// Вызов функции getSumOfFirstAndLastElement с пустым массивом и вывод результата в консоль
console.log(getSumOfFirstAndLastElement([]));

// Вызов функции getSumOfFirstAndLastElement с массивом и вывод результата в консоль
console.log(getSumOfFirstAndLastElement([3, 7, 12, 8]));



let text = "css";

function testVariableScope() {
  // Внутри функции создается новая переменная text, инициализированная со значением "html"
  // Эта переменная 'text' имеет блочную видимость (scope) и не связана с глобальной переменной text
  let text = "html";
  
  // Функция возвращает значение переменной text, которая была определена внутри функции,
  // следовательно, будет возвращено "html", а не "css".
  return text;
}


console.log(testVariableScope());


console.log(addToNumbers(4, 8))

function addToNumbers(x, y) {
  return x + y;
}


// В этом коде функция addToNumbers вызывается перед ее фактическим определением, но он все равно выполняется успешно. Это происходит из-за механизма, известного как "подъем" (hoisting) в JavaScript.
// Что такое "подъем" (hoisting)?
// Определение функции: В JavaScript, объявления функций поднимаются (или "поднимаются") в начало их области видимости. Это значит, что функции становятся доступными для вызова до того, как они фактически встречаются в коде. 
// При этом поведение: Когда интерпретатор JavaScript начинает выполнять код, он сначала обрабатывает объявления функций и переменные. Все функции, объявленные с помощью function, поднимаются в верхнюю часть их области видимости.Таким образом, функция addToNumbers становится доступной для вызова, даже если вызов происходит до фактического определения функции.