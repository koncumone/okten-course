// - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let a = 0; // 1, 0, -3

if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Не вірно');
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

const time = + prompt('Введіть число від 0 до 59'),
      day  = + prompt('Введіть день від 1 до 31');


    if (time >= 0 && time <= 15) {
        console.log('1 четверть');
    } else if (time >= 16 && time <= 30) {
        console.log('2 четверть');
    } else if (time >= 31 && time <= 45) {
        console.log('3 четверть');
    } else if (time >= 46 && time <= 59) {
        console.log('4 четверть');
    } else {
        console.log('Не вірне значення');
    }

    if (day >= 1 && day <= 10) {
        console.log('перша декада місяця');
    } else if (day >= 11 && day <= 20) {
        console.log('друга декада місяця');
    } else if (day >= 21 && day <= 31) {
        console.log('третя декада місяця');
    } else {
        console.log('Не вірне значення')
    }

// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


const schedule = {
    monday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    tuesday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    wednesday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    thursday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    friday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    saturday: {morning: 'sleep', day: 'eat', evening: 'chill'},
    sunday: {morning: 'sleep', day: 'eat', evening: 'chill'},
}
let getSchedule    = + prompt('Введіть день тиждня за номером. Понеділок: 1...'),
    scheduleValues = Object.values(schedule);

    // з for воно бвиглядало краще, але то таке)
    switch (getSchedule) {
        case 1:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 2:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 3:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 4:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 5:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 6:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        case 7:
            console.log(`Ранок: ${scheduleValues[0].morning}\nОбід: ${scheduleValues[0].day}\nВечір: ${scheduleValues[0].evening}\n`);
            break;
        default:
            console.log('Не вірне значення');
    }

// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let first  = + prompt('Введіть перше число'),
    second = + prompt('Введіть друге число');

    if (first !== second) {
        console.log(`Максимальне число: ${Math.max(first, second)}`);
    } else if (first === second) {
        console.log('Введені числа рівні');
    } else {
        console.log('error');
    }
