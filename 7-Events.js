//1 
//Описать в html тег input и тег ul. По нажатию на клавишу в инпуте в список ul должен добавляться элемент li.Содержимое li - нажатая клавиша.



const input = document.querySelector('input');

input.addEventListener('keydown', function(event) {

    console.log(event.key);
    let liElement = document.createElement('li');
    liElement.innerText = (event.key);
    document.body.appendChild(liElement);
    
});



//2
// Вставить в html теги input и div (просто предусмотреть в разметке).
// Обрабатывая событие keyup на теге input, выводить в консоль введенный текст каждый раз, как только клиент вписывает // любой символ в поле (или стирает любой символ из поля). Вам понадобится считывать значение поля, это input.value



const input = document.querySelector('input')
input.addEventListener('keyup', function(value) {

     console.log(input.value);

});



//3
//Создать в html форму с инпутом и кнопкой. Также добавить в html тег ul. Когда форма отправляется, добавлять в список тег li. Его содержимое - введенный текст (input.value). После отправки формы инпут должен быть очищен (проставить пустую строку в value).



const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    
    event.preventDefault();
    const input = form.querySelector('.string');
    console.log(input.value);
    let liElement = document.createElement('li');
    liElement.innerText = (input.value);
    document.body.appendChild(liElement);
    input.value = '';

});



//4
// Калькулятор. 
// Создать в html форму с текстовым input, тегом select, вторым текстовым input и кнопкой. Добавить в html div. Опции select - арифметические знаки. В оба инпута пользователь вводит число. Когда пользователь отправляет форму, над двумя числами выполняется действие, выбранное в select. Результат отображается в div.



const form = document.querySelector('form')

form.addEventListener('submit', (event) => {

    event.preventDefault();
    let number1 = document.getElementById('firstNumber');
    let number2 = document.getElementById('secondNumber');
    let action = document.getElementById('action');

    
    if (action.value == '+'){
        console.log(Number(number1.value) + Number(number2.value));
    } else if (action.value == '-'){
        console.log(Number(number1.value) - Number(number2.value));
    } else if (action.value == '*'){
        console.log(Number(number1.value) * Number(number2.value));
    } else{
        console.log(Number(number1.value) / Number(number2.value));
    };


    console.log(eval(number1.value + action.value + number2.value));

});



//5
// Вставить в разметку html тег button без js (просто предусмотреть в разметке). При наведении на кнопку изменять ее // цвет каждый раз рандомным цветом. При выведении мышки за пределы кнопки, поворачивать кнопку на рандомный угол от // -180 до 180 градусов. Использовать обработку событий mouseenter, mouseleave на этой кнопке.



let button = document.querySelector('button');

function getRandomInteger(min, max) {

    return Math.floor(Math.random() * (max - min)) + min;
    
}

function getRandomRGB(){

    color = (`rgb(${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)}, ${getRandomInteger(0, 255)})`);
    return color

}

button.addEventListener('mouseenter', (event) => {

    button.style.backgroundColor = getRandomRGB();

});

button.addEventListener('mouseleave', (event) => {

    angle = (`rotate(${getRandomInteger(-180, 180)}deg)`);
    button.style.transform = angle;

});























