console.log('hello my dear friends');

// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let   a = 'hello',
        b = 'owu',
        c = 'com',
        d = 'ua',
        e = 1,
        f = 10,
        g = -999,
        h = 123,
        i = 3.14,
        j = 2.7,
        k = 16,
        l = true,
        m = false;

console.log(`${a}\n${b}\n${c}\n${d}\n${e}\n${f}\n${g}\n${h}\n${i}\n${j}\n${k}\n${l}\n${m}`);

alert(`${a}\n${b}\n${c}\n${d}\n${e}\n${f}\n${g}\n${h}\n${i}\n${j}\n${k}\n${l}\n${m}`);

document.write(`<h1>${a} ${b} ${c} ${d} ${e} ${f} ${g} ${h} ${i} ${j} ${k} ${l} ${m}</h1>`);

// - Створити об'єкт book з наступними полями :
// назва, (тип string)
// кількість сторінок (числовий тип),
// жанр (string)
// автори (тип - масив, кожен елемент масиву - це стрінга)

const books = [
    {
        name: 'node.js для чайників',
        count: 2000,
        genre: 'idgaf',
    },

    {
        name: 'Загадки вселенної',
        count: 1608,
        genre: 'idgaf',
        authors: [
            'koncumone',
            'donel',
            'king Hill',
        ]

    },

]

const first_book  = books[0],
      second_book = books[1];


document.write(`<h1>Перша книга:</h1><h2>Назва: ${first_book.name}<br>Кількість сторінок: ${first_book.count}<br>Жанр: ${first_book.genre}</h2>`);
document.write(`<h1>Друга книга:</h1><h2>Назва: ${second_book.name}<br>Кількість сторінок: ${second_book.count}<br>Жанр: ${second_book.genre}<br>Автори: <h4>${second_book.authors[0]}, ${second_book.authors[1]}, ${second_book.authors[2]}</h4></h2>`);



// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
const firstName  = 'Данило ',
      middleName = 'Павлович',
      lastName   = 'Митко ';

const person = firstName + lastName + middleName;
console.log(person)

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let name    = prompt('Як же тебе звать?','Данило'),
    fathers = prompt('А по-батькові?','Павлович'),
    age     = prompt('А рочків скільки?', '18');

console.log(name, fathers, `${age} years`)

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;

let first = 100,
    second = '100',
    third = true;

console.log(typeof first, second, third);

