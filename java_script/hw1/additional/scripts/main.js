// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.

let height = 23, width = 10;

function square(a, h) {
    return (a * h) / 2
}

console.log(`1.Площа прямокутника: ${square(height, width)}`)

let s = square(height, width);
console.log(`2.Площа прямокутника: ${s}`)

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
console.log('------------------------------------')

let heightC = 10, dC = 4;

function getRadius(radius) {
    return radius / 2
}

function volume(r, h) {
    let rC = getRadius(r)
    return Math.PI * Math.pow(rC, 2) * h;
}

console.log(`1.Об'єм циліндра: ${volume(dC, heightC)}`);

let v = volume(dC, heightC);
console.log(`2.Об'єм циліндра: ${v}`);

console.log(`3.Об'єм циліндра: ${Math.floor(volume(dC, heightC))}`);


// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
// або оператор зведення в ступінь **).
console.log('------------------------------------')


const n = 3,
      m = 4;

function getGipotenuse(a, b) {
    return Math.sqrt(Math.pow(a,2) + Math.pow(b,2))
}

console.log(`1.Гіпотенуза: ${getGipotenuse(n, m)}`);

let k = getGipotenuse(n, m)
console.log(`1.Гіпотенуза: ${k}`);


// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
console.log('------------------------------------')


const first = [5 < 6, 5 > 6, 5 === 6, 5 >= 6],
    second  = [10 === 10, 10 >= 10, 10 !== 10, 10 > 10, 10 < 10],
    third   = [123 === '123', 123 !== '123'];


console.log(`5 < 6 = ${first[0]}\n5 > 6 = ${first[1]}\n5 === 6 = ${first[2]}\n------------------------------------\n`)
console.log(`10 === 10 = ${second[0]}\n10 >= 10 = ${second[1]}\n10 !== 10 = ${second[2]}\n10 > 10 = ${second[3]}\n10 < 10 = ${second[4]}\n------------------------------------\n`)
console.log(`123 === '123' = ${third[0]}\n123 !== '123' = ${third[1]}\n------------------------------------\n`)
