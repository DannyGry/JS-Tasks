//1
// let user = { name: 'Tom', age: 20, isMarried: false }
// Cформировать массив строк вида "имя_поля - значение_поля":
// ['name - Tom', 'age - 20', 'isMarried - false']
// Реализовать это в виде функции, которая принимает объект и возвращает массив. Использовать цикл for-in


let user = { name: 'Tom', age: 20, isMarried: false };

function createArrayFromObject(object) {
    let newArr = [];

    for (key in object){
        // arr = (`${key} - ${user.name}, ${key} - ${user.age}, ${key} - ${user.isMarried} `);
        newArr.push(`${key} - ${object[key]}`);
    }
    return newArr
    
}
console.log(createArrayFromObject(user));



//2


// Написать функцию, которая принимает два параметра и складывает их.
// Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
// Примеры результатов вызова функции:
// sum(2,4); // 6
// sum('d',4); // введенные данные не являются числами
// sum(1, [2]); // введенные данные не являются числами
// sum(1); // введите два параметра
// sum(); // введите два параметра


function newSumOf(a, b){
    let n;
    if (typeof a == 'number' && typeof b == 'number' ){
        n = a + b;
    } else if (arguments.length <= 1){
        console.log('Please, enter two parameters');
    } else{
        console.log('The input data is not a number');
    }
    return n
}
console.log(newSumOf(3));



//3
// Создать функцию "угадай число". Она принимает число от 1 до 10 (обязательно проверить, что число не больше 10 и не меньше 0). Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
// Если они совпали, то возвращает “Вы выиграли”, если нет - то “Вы не угадали, ваше число - ..,  а выпало число ...”
// Функция создания случайного числа уже была ранее в материалах, в задаче по созданию случайного цвета.
// Написать функцию в стрелочном синтаксисе.



let numberForRandom = prompt('Please, enter any number');


if (numberForRandom < 0 || numberForRandom > 10){

    console.log('The input data is invalid');

}

function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

let outputNumber = (number) => {

    if (number == getRandomInteger(0, 10)){

        console.log('You won!');

    } else {

        console.log('You did not win');

    }

}

outputNumber(numberForRandom);



//4
//Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.



let array = [4, 5, 2, 51, 312, 21, 3];

function copyArr(arr){
    let newArr = arr.map(item => item);
    return newArr
}
console.log(copyArr(array));




//5
// На странице в html задать список элементов li с числами. Джававскриптом нужно выбрать из этого списка четные числа и создать из них массив. Затем, используя метод forEach, создать из массива новый спсок элементов li и поместить эти элементы в исходный тег ul. Для обхода через querySelectorAll использовать цикл for-of (forEach  работать не будет).


let mainUl = document.querySelector('ul');

let arrWithPosNum = [];

for (let li of document.querySelectorAll('.number')) {

    if (Number(li.innerText) % 2 == 0){
        arrWithPosNum.push(li.innerText);
    }

}

arrWithPosNum.forEach((number) => {

    let newLi = document.createElement('li');

    newLi.innerText = number;
    
    mainUl.appendChild(newLi);

});

console.log(arrWithPosNum);



//6
// 1) Создать разметку формы с инпутом для текста и селектом для категории (добавить несколько option с текстом Категория 1, Категория 2, Категория 3). Опшны создайте и добавьте в select через цикл.
// 2) Под формой должны должен быть список ul. В этот список каждую секунду добавляется новый элемент li с произвольным текстом (напр. Hello). Для этого можно использовать функцию setInterval:
// Почитайте об этой функции здесь: https://learn.javascript.ru/se...
// Свою функцию (которая формирует li - например, она называется createLi) вы будете запускать внутри setInterval:
// setInterval(createLi, 1000);
// Вся разметка должна быть создана джаваскриптом. В HTML в начале body должен быть пустой.


let inputForm = document.createElement('form');

let selectList = document.createElement('select');

let inputText = document.createElement('input');

let submit = document.createElement('input');

submit.setAttribute('type', 'submit');


for (let i = 1; i <= 3; i++) {
    
    let option = document.createElement('option');
    option.innerText = 'Category ' + i;
    selectList.appendChild(option);
    
}

document.body.appendChild(inputForm);

inputForm.appendChild(inputText);

inputForm.appendChild(submit);

inputForm.appendChild(selectList);

//2 part

let ulRandomWord = document.createElement('ul');

function sayHi() {

    let liWord = document.createElement('li');
    liWord.innerText = 'Hi';
    ulRandomWord.appendChild(liWord);

}

let timerId = setInterval(() => sayHi(), 1000);

document.body.appendChild(ulRandomWord);




























