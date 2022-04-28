// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

const arithmetic = (array) => {

    let index = 0;

    for (const arrayElement of array) {

        index += arrayElement;

    }

    return index / array.length
}


console.log(arithmetic([1, 3, 5, 2, 4]));




// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

function retNumber() {
    
    let min = arguments[0],
        max = arguments[0];

    for (const number of arguments) {

        if (number > max) 
            max = number;

        if (number < min ) 
            max = number;
        
    }

    console.log(`Максимальне число: ${max}`);
    
    return min

}

console.log(`Мінімальне число:  ${retNumber(1, 2, 3, 4, 5, 6, 7, 8, 9)}`);




// - створити функцію яка заповнює масив рандомними числами

const randomNumbers = (numbers) => {
    
    let array = [];

    for (let i = 0; i < 10; i++) {
       
        array.push(Math.floor(Math.random() * numbers));
        
    }

    return array
}

console.log(randomNumbers(100));




// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

const randomArray = (value, limit) => {
    
    let array = [];

    for (let i = 0; i < value; i++) {
       
        array.push(Math.floor(Math.random() * limit));
        
    }

    return array
}

console.log(randomArray(10, 15));




// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

const reverseArray = (array) => {
    return array.reverse()
}

console.log(reverseArray([2, 5, 6, 3]));




// Переробити на стрілочні функції з попереднього дp
console.log('-------------------------------------')





// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (a, b) => {
    return a * b
}

console.log(`Площа прямокутника: ${square(3, 4)}`);




// - створити функцію яка обчислює та повертає площу кола з радіусом r

const round = (r) => {
    return Math.PI * Math.pow(r, 2)
}

console.log(`Площа кола: ${Math.floor(round(5))}`);




// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const cylinder = (r, h) => {
    return 2 * Math.PI * r * (h + r)
}

console.log(`Площа циліндру: ${Math.floor(cylinder(2, 4))}`);




// - створити функцію яка приймає масив та виводить кожен його елемент

const array = (arr) =>  {

    for (const arrElement of arr) {

        console.log(arrElement);
        
    }
}

array([1, 2, 3, 'test', 'koncumone', false])




// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (input) => {
    return document.write(`<p>${input}</p>`)
} 

createParagraph('something')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const createUl = (input) => {

    document.write('<ul>');
    
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${input}</li>`)  
    }

    document.write('</ul>');
}

createUl('okten')




// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createUll = (input, count) => {

    document.write('<ul>');
    
    for (let i = 0; i < count; i++) {
        document.write(`<li>${input}</li>`)  
    }

    document.write('</ul>');
}

createUll('koncumone', 10)




// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const createList = (array) => {

    document.write('<ul>List');

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        
        document.write(`<li>${element}</li>`)
    }


    document.write('</ul>');
    
}

createList([1, 2, 3, 4, 5, 'text', 'owu', true, false])




// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


const objArray = (array) => {
    
    for (const arrayElement of array) {
        
        document.write(`<div>${arrayElement.id} ${arrayElement.name} ${arrayElement.age}</div>`)

    }
}

objArray([{id: 1, name: 'donel', age: 18}, {id: 2, name: 'koncumone', age: 19}])




// - створити функцію яка повертає найменьше число з масиву


const minElement = (array) => {

    let min = array[0];

    for (const number of array) {

        if (number < min)
            min = number;    

    }

    return min

}

console.log(minElement([1000, 132, 3432, 4324]))




// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

const sumArray = (array) => {

    let index = 0;

    for (const arrayElement of array) {

        index += arrayElement;

    }

    return index
};

console.log(sumArray([1, 2, 10]));




// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.

const shaffleArray = (array) => {
    
    if (array.length > 2 || array.length < 2) 
        return console.log('Массив повинен містити 2 об\'єкти')


    console.log(array.reverse());
}


shaffleArray([5]);
shaffleArray([5, 6, 7]);
shaffleArray([{id: 1, name: 'donel', age: 18}, {id: 2, name: 'koncumone', age: 19}]);