//1
alert('Now will be the 1st task!');
// Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` ); }

let i = 0;

while (i < 3) {

    alert( `number ${i}!` )

    i += 1;

}



//2
alert('Now will be the 2nd task!');
// Перепишите код с использованием тернарного оператора
// let male = true;
// let gender;
// if (male) {
// gender = 'man';
// } else{
// gender = 'woman'
// }


let male = true;

let gender = male ? "You are man" : "You are woman"

alert(gender);



//3
alert('Now will be the 3rd task!');
// Задать массив логических значений (true/false). Каждое значение обозначает мужчина (true) или женщина (false).
// Из этого массива сформировать массив объектов такой же длины, как и заданный массив.
// У каждого объекта должно быть одно поле, gender, которое равно man, если значение в заданном массиве - true, и woman, если значение в заданном массиве - false.
// Т.е. из
// [true, false]
// должно получиться
// [{ gender: 'man' }, { gender: 'woman' }]

let ppl = [true, false, true, false, true]

let pplNew = [];

for (let i = 0; i < ppl.length; i++){

    let genderValue = ppl[i] ? "male" : "female";

    pplNew.push({ gender: genderValue });

    console.log(ppl[i]);
    console.log(genderValue);

}
console.log(pplNew);



//4
alert('Now will be the 4th task!');
// Создайте функцию findPositiveNumbers()
// 1) Внутри функции должен определяться массив, например let arr = [5, 4, 3, -3, -10, -1, 8, -20, 0] .
// Функция должна вывести в консоль все положительные числа по одному.
// 2) Функция должна не выводить числа в консоль, а составить из них новый массив. В самом конце тела функции - вывести новый массив в консоль.
// 3) Функция должна не выводить массив в консоль, а вернуть новый массив из положительных элементов arr.
// 4) Изначальный массив arr должен не описываться внутри функции, а поступать в нее как параметр.



function findPositiveNumbers(arr){

    let arrNew = [];


    for (let i = 0; i < arr.length; i++){

        if (arr[i] > 0) {

        arrNew.push(arr[i]);

        }

    }

    console.log(arrNew);

    return arrNew;

}

findPositiveNumbers([5, 4, 3, -3, -10, -1, 8, -20, 0]);



//5
alert('Now will be the 5th task!');
// Напишите функцию, которая принимает два параметра: значение и количество элементов. Функция создает новый массив и заполняет его этим значением в указанном количестве.
// Например: из переданных значений ('a', 3) получаем массив ['a', 'a', 'a']


function addLetters(letter, number){

    let nlNew = [];

    for (let i = 0; i < number; i++){

        nlNew.push(letter);

    }

    console.log(nlNew);

    return nlNew;

}

addLetters('fdfd', 6);



//6
alert('Now will be the 6th task!');
// Определите массив, например let arr = [5, 4, 3, 8, 0].
// Создайте функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться  элементы, которые больше или равны (>=) значению переменной a.
// Например, запуск функции filterFor(arr, 5) дает результат [5,8]
// а запуск функции filterFor(arr, 10) дает результат []
// а запуск функции filterFor(arr, 3.11) дает результат [4,5,8]


let arr2 = [5, 4, 3, 8, 0];

function filterFor(arr2, a){

    let arrNew2 = [];


    for (let i = 0; i < arr2.length; i++){

        if (arr2[i] >= a) {

        arrNew2.push(arr2[i]);

        }

    }

    console.log(arrNew2);

    return arrNew2;

}

filterFor(arr2, 3.11);



//7
alert('Now will be the 7th task!');
// Написать функцию вывода в консоль случайного цвета. Это будет строка вида "rgb(10,55,250)"
// Здесь у вас будет две функции: одна ваша - getRandomRGB, а вторая - функция получения случайного числа в диапазоне // min - max. Вот эта функция (просто скопируйте, она уже готова):
// function getRandomInteger(min, max) {
// return Math.floor(Math.random() * (max - min)) + min;
// }
// Подсказка:
// Каждый цвет - 3 числа, каждое число лежит в диапазоне от 0 до 255.
// Одна функция может вызывать другую функцию


function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;

}

function getRandomRGB(){

    console.log(`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`);

}

getRandomRGB();



//8
alert('Now will be the 8th task!');
// Написать функцию pow(x, n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает  результат (!!! решить без оператора **)



function squareNumbers(x, n){

let t = x;

    for (let i = 0; i < n-1; i++){

        t = t * x;

    }

    console.log(t);

}

squareNumbers(3, 5);



//9
alert('Now will be the 9th task!');
// Написать функцию isInteger(x), которая определяет, является ли число целым, и возвращает true либо false.


function isInteger(x){

let y;

y = x % 1;

    if (y == 0){

        return true;

    } else{

        return false;

    }

}
console.log(isInteger(5.2));



//10
alert('Now will be the 10th task!');
// Написать функцию, которая принимает целое число n.
// Внутри функции запустить цикл от 1 до n с шагом 0,5. На каждой итерации цикла выводить в консоль текущее число (i)и информацию о том, целое ли оно.
// Пример, при запуске функции с параметром 3:
// "1 integer"
// "1.5 decimal"
// "2 integer"
// "2.5 decimal"

function integerDecimal(n){

let p ;

    for (let i = 0; i < n; i += 0.5){

        p = [i] % 1;

        if (p == 0){

            console.log( i + ' integer');

        } else{

            console.log( i + ' decimal');

        }

    }

}

integerDecimal(10);