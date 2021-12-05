//1
alert('Сейчас будет 1 задание !');


let user = prompt('Как вас зовут ?');

alert('Привет, '+ user + '!');



//2
alert('Сейчас будет 2 задание !');


let num1 = prompt('Напишите число');

let num2 = prompt('Напишите степень, в которую хотите возвесть число ');

console.log(num1 ** num2);



//3
alert('Сейчас будет 3 задание !');


let num4 = Number(prompt('Напишите первое число'));

let num5 = Number(prompt('Напишите второе число'));

if (num4 > num5) {

    console.log('Большее число: ' + num4);

} else if (num4 < num5) {

    console.log('Большее число: ' + num5);

} else if (num4 == num5){

    console.log('Оба числа одинаковые !');

};



//4
alert('Сейчас будет 4 задание !');


let num6 = prompt('Напишите 1-e число');

let num7 = prompt('Напишите 2-e число');

if ( (num6 % num7) ==  0 ){

    console.log('Число ' + num6 + ' кратно числу ' + num7)

} else {

    console.log('Число ' + num6 + ' не кратно числу ' + num7)

}



//5
alert('Сейчас будет 5 задание !');


let a = 10;

for (let i = 0; i <= 10; i++){

    console.log(a + i);

}



//6
alert('Сейчас будет 6 задание !');


for (let i = 0; i <= 10; i = i + 2){

    b = prompt('Введите число');

    if (b == 10){

        alert('Равно 10');

    } else {

        alert('Не равно 10');

    }

}



//7
alert('Сейчас будет 7 задание !');


let p;

p = prompt('Сколько чисел нужно возвести в квадрат ?');

for (let i = 0; i <= (p-1); i++){

    console.log(i ** 2);

}



//8
alert('Сейчас будет 8 задание !');

for (let i = 1; i <= 100; i++) {

    if ((i % 5 == 0) && (i % 3 == 0)) {

        console.log('FizzBuzz');

    } else if (i % 3 == 0) {

        console.log('Fizz');

    } else if (i % 5 == 0) {

        console.log('Buzz');

    }

    else {

        console.log(i);

    }

}