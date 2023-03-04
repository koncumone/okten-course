// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
    }

let usersList = [];

usersList.push(
    user1 = new User(1, 'John', 'Doe', 'john@example.com', '1234567890'),
    user2 = new User(2, 'Jane', 'Doe', 'jane@example.com', '0987654321'),
    user3 = new User(3, 'Jack', 'Smith', 'jack@example.com', '1234567890'),
    user4 = new User(4, 'Jill', 'Smith', 'jill@example.com', '0987654321'),
    user5 = new User(5, 'Bob', 'Johnson', 'bob@example.com', '1234567890'),
    user6 = new User(6, 'Alice', 'Johnson', 'alice@example.com','0987654321'),
    user7 = new User(7, 'Tommy','Williams','tommy@example.com','1234567890'),
    user8 = new User(8,'Sally','Williams','sally@example .com','0987654321'),
    user9 = new User(9 ,'Harry' ,'Brown' ,'harry@example.com' ,'1234567890'),
    user10 = new User(10 ,'Molly' ,'Brown' ,'molly@example.com' ,'0987654321')
)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

const filteredUsers = usersList.filter(user => user.id % 2 === 0);
console.log(filteredUsers);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

const growthUsers = usersList.sort((a, b) => a.id - b.id)
console.log(growthUsers);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
  
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let clientsArray = [];

clientsArray.push(
    client1 = new Client(1, 'John', 'Smith', 'john@example.com', '123456789', ['Shirt', 'Pants']), 
    client2 = new Client(2, 'Jane', 'Doe', 'jane@example.com', '987654321', ['Hat']),
    client3 = new Client(3, 'Jack', 'White', 'jack@example.com', '123789456', ['Jacket']),
    client4 = new Client(4, 'Alice', 'Brown','alice@example.com','456123789', ['Gloves']), 
    client5 = new Client(5, 'Bob','Black','bob@example.com','789456123', ['Socks']), 
    client6 = new Client(6, 'Max','Grey','max@example.com','321654987', ['Shoes']), 
    client7 = new Client(7, 'Ann','Pink','ann@example.com','741852963', ['Scarf']),
    client8 = new Client(8, 'Tom','Green','tom@example.com', '963852741', ['T-shirt']),
    client9 = new Client(9, 'Den','Green','test@example.com', '43543543', ['T-Pants', 'Pants']),
   client10 = new Client(10, 'Odel','Pink','tost@example.com', '43543435', ['Gloves']),
)										  	  	  	  	  	  	  	  

const sortedClients = clientsArray .sort((a, b) => a.order.length - b.order.length );
console.log(sortedClients);



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 

function firstCar(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    //додати в об'єкт функції:

//     -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`) 
    }

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    this.info = function() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engine}`);
    };

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    this.increaseMaxSpeed = function(newSpeed) {
        return this.maxSpeed = newSpeed
    }

//     -- changeYear (newValue) - змінює рік випуску на значення newValue

    this.changeYear = function (newValue) {
        return this.year = newValue;
    };
 
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    
    this.addDriver = function (driver) {
        return this.drivers.push(driver);
    } 
}




// - (Те саме, тільки через клас)

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

class secondCar {
    constructor(model, manufacturer, year, maxSpeed, engine) {
      this.model = model;
      this.manufacturer = manufacturer;
      this.year = year;
      this.maxSpeed = maxSpeed;
      this.engine = engine;
    }

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }

//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

    info() {
        console.log(`модель - ${this.model}, виробник - ${this.manufacturer}, рік випуску - ${this.year}, максимальна швидкість - ${this.maxSpeed}, об'єм двигуна - ${this.engine}`);
    }

//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

//     -- changeYear (newValue) - змінює рік випуску на значення newValue

    changeYear(newValue) {
        this.year = newValue;    
    }

//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

    addDriver(driver) {
        this.driver = driver;    
    }  											  
}




// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

class Princess {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const princesssArray = [
    new Princess('Lily', 5, 16), 
    new Princess('Mia', 7, 17), 
    new Princess('Emily', 8, 18), 
    new Princess('Sophia', 10, 19), 
    new Princess('Olivia', 11, 20), 
    new Princess('Ava', 12, 21), 
    new Princess('Isabella', 13, 22), 
    new Princess('Chloe', 14, 23), 
    new Princess('Grace', 15, 24), 
    new Princess('Ella', 16, 25)
];
  
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }

    findPrincess() {
        const princess = princesssArray.find(princess => princess.footSize === this.foundShoeSize);

        console.log(`The prince ${this.name} found his princess ${princess.name}`);
    } 
} 

// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

const prince = new Prince('John', 18, 20); 
prince.findPrincess();


  
