console.log('hello everyone');

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let index = 0; index < 10; index++) {
    document.write(`<div>somethink</div>`)
    
}

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


for (let index = 0; index < 10; index++) {
    
    document.write(`<div>somethink: ${index}</div>`)

}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

{
    let index = 0;

    while (index < 20) {
        document.write(`<h1>somethink of while</h1>`)

        index++
    }
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

{
    let index = 0;

    while (index < 20) {
        document.write(`<h1>somethink of while: ${index}</h1>`)

        index++
    }
}


// - Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];


document.write('<ul>');

for (let i = 0; i < listOfItems.length; i++) {
    const element = listOfItems[i];

    document.write(`<li>${element}</li>`)  
}

document.write('</ul>');


// Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону  Зробити адекватну стилізацію Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон


let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },

    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },

    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },

    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },

];




for (const product of products) {

    document.write('<div class="product-card">')
    document.write(`<h3 class="product-title">${product.title} - ${product.price} UAH</h3>`)
    document.write(`<img src="${product.image}" alt="" class="product-image">`)
    document.write('</div>')
    
}

