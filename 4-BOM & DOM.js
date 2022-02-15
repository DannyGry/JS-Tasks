//1
alert('Now will be the 1st task!');
// Просмотрите в консоли браузера объект navigator. Найдите информацию о своем браузере, системе.
// Просмотрите в консоли браузера объект location. Найдите в этом объекте текущий url, где вы находитесь.
// Выведите в консоль строку:
// С помощью браузера ... я открыл страничку ... 
// (необходимые значения добавьте с помощью BOM)


console.log(`With a help of ${navigator.userAgent} browser, I have opened ${location.href}`);



//2
alert('Now will be the 2nd task!');
// В файле html есть разметка:
// <ul id="list">
// <li>Джон</li>
// <li>Пит</li>
// <li>Джессика</li>
// <li>Сара</li>
// </ul>
// Вывести в консоль каждое из имен (содержимое каждого li).

for (let li of document.querySelectorAll('li')) {

    console.log(li.innerText);

}



//3
alert('Now will be the 3rd task!');
// Поменять имена в списке выше на числа от 0 по порядку (0, 1, 2 и т.д.)


document.body.querySelector('li').innerText = '0';




//4
alert('Now will be the 4th task!');
// Написать функцию, которая принимает на вход 3 параметра: название тега, название цвета, содержимое.
// Функция должна сформировать необходимый тег, добавить необходимый стиль с цветом и внести содержимое.
// Вывести несколько таких сгенерированных тегов в консоль, затем отправить их на страницу.


function newTag(tagName, color, content){

    let tag = document.createElement(tagName);

    document.body.appendChild(tag);

    tag.innerText = content;

    tag.style.color = color;

}

newTag('h2', 'red', '4343');



//5
alert('Now will be the 5th task!');
// Создать с помощью js абзац (тег p). 
// Добавить в него контент. 
// Добавить к нему стили: размер 36px, жирный шрифт. Добавить абзац с текстом на страницу.


let tag2 = document.createElement('p');

tag2.innerText = 'prevet))';

tag2.style.fontWeight = '900';

tag2.style.fontSize = '36px';

document.body.appendChild(tag2);



//6
alert('Now will be the 6th task!');
// Вставить в страницу (в html документ) тег <select>. 
// С помощью js добавить в этот select опции (option) под годы от 1960 по 2020.


let select = document.querySelector('select');

for (let i = 1960; i <= 2020; i++) {

    let option = document.createElement('option');
    option.innerText = i;
    select.appendChild(option);

}



//7
alert('Now will be the 7th task!');
// Вставить в страницу (в html документ) ul.
// Предусмотреть в коде следующий массив:

// [{
// name: "Женя",
// order: true
// },
// {
// name: "Кристина",
// order: true
// },
// {
// name: "Павел",
// order: false
// },
// {
// name: "Виолетта",
// order: false
// },
// {
// name: "Костя",
// order: true
// }];

// Перебирать массив, для каждой ячейки массива создать li, наполнить li текстом:
// - Клиент Женя оплатил заказ
// - Клиент Павел отменил заказ
// ... остальные li с контентом

// Маска получается такой: "Клиент ИМЯ СТАТУС заказ", где имя - свойство объекта (а объект здесь - это текущая ячейка // массива), статус зависит от от свойства order: если true – то оплатил, если false – то отменил.


let people = [{name: "Zhenya", order: true}, {name: "Kristina", order: true}, {name: "Paul", order: false}, {name: "Violet", order: false}, {name: "Kostya", order: true}];

for (let person of people){

    let li = document.createElement('li');
    let status;

    if (person.order == true){
        status = 'paid for the';
    } 

    else {
        status = 'canceled the';
    }

    li.innerText = (`Client ${person.name} ${status} order`);

    document.getElementById('list2').appendChild(li);
}



//8
alert('Now will be the 8th task!');
// Есть массив ссылок:
// let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/','https://yandex.ru/'];
// Вам нужно:
// 1) при помощи JS создать DIV, задать ему css стили (фон, паддинги)
// 2) при помощи цикла пройтись по массиву 'linksArr', для каждого из элементов массива сформировать ссылку (тег
// c атрибутом href и текстом из массива) и добавить эту ссылку в созданный DIV из пункта 1
// При нажатии на ссылки адреса должны открываться в новой вкладке (атрибут target="_blank")
// ПОДСКАЗКА Для создания атрибута используется js метод setAttribute:
// element.setAttribute(name, value) - где name - сам атрибут, который нужно добавить, value - его значение.
// Вкладывать ссылки в див нужно с помощью метода appendChild или append.
// 3) Добавить DIV из пункта 1 (со ссылками внутри ) в BODY


let linksArr = ['https://www.onliner.by/', 'https://www.youtube.com/', 'https://vk.com/', 'https://www.google.com/','https://yandex.ru/'];

let divLinks = document.createElement('div');

divLinks.style.backgroundColor = 'lightblue';

divLinks.style.width = '240px';

divLinks.style.height = '170px';

divLinks.style.display = 'flex';

divLinks.style.flexDirection = 'column';

for (let link of linksArr){

    let href = document.createElement('a');
    href.setAttribute('target', '_blank');
    href.innerText = link;
    href.style.display = 'flex';
    href.style.margin = '8px ';
    href.style.justifyContent = 'center';
    divLinks.appendChild(href);
    
}

document.body.appendChild(divLinks);



//9
alert('Now will be the 9th task!');
// Добавить к нескольким тегам на странице класс "forRemove". Далее написать JS код, который найдет в HTML все элементы с классом "forRemove" и удалит их.
// ПОДСКАЗКА Для удаления DOM-элементов можно использовать метод element.remove()


let elems = document.getElementsByClassName('forRemove');

for (let elemRemove of elems){
    
    elemRemove.remove();
    
}





