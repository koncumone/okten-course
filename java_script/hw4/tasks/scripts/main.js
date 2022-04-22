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

const Array = (arr) =>  {

    for (const arrElement of arr) {

        console.log(arrElement);
        
    }
}

Array([1, 2, 3, 'test', 'koncumone', false])




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

const idk = () => {
    return console.log('i dont know');
    
}

idk();




// - створити функцію яка повертає найменьше число з масиву


const minElement = (array) => {

    let min = array[0];

    for (const number of array) {

        if (number < min) {
            min = number;
        }      
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