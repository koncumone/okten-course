
function createObject() { 
    let firstName = document.getElementById('name').value;
    let lastName = document.getElementById('surname').value;
    let age = document.getElementById('age').value; 
  
    let person = {firstName, lastName, age};
  
    let outputDiv = document.getElementById('output');
  
    outputDiv.innerHTML = JSON.stringify(person); 
  }

  
// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let counter = 0;

if (localStorage.getItem('counter')) {
  counter = Number(localStorage.getItem('counter'));
}

document.getElementById('counter').innerHTML = counter;

counter++;
localStorage.setItem('counter', counter);


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


const getDate = () => {
    const now = new Date();
    const day = ("0" + now.getDate()).slice(-2);
    const month = ("0" + (now.getMonth() + 1)).slice(-2);
    const year = now.getFullYear();
    const hours = ("0" + now.getHours()).slice(-2);
    const minutes = ("0" + now.getMinutes()).slice(-2);
    const seconds = ("0" + now.getSeconds()).slice(-2);

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};



const getClick = document.getElementById("sessions-button");

getClick.addEventListener("click", function() {
    window.location.href = "sessions.html";
});

let sessions = JSON.parse(localStorage.getItem("sessions"));

if (!sessions) {
    sessions = [];
}

sessions.push(getDate());
localStorage.setItem("sessions", JSON.stringify(sessions))



// зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
// При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let objectsPerPage = 10; 
let currentPage = 0;

let data = generateArray(100);


showData(data, currentPage);


document.getElementById("prevBtn").addEventListener("click", function() {

    if (currentPage > 0) {
        currentPage--;
        showData(data, currentPage);
    }

});


document.getElementById("nextBtn").addEventListener("click", function() {

    if (currentPage < Math.ceil(data.length / objectsPerPage) - 1) {
        currentPage++;
        showData(data, currentPage);
    }

});

function generateArray(size) {
    let result = [];

    for (let i = 0; i < size; i++) {
        let obj = {id: i + 1, name: `Name ${i + 1}`};
        result.push(obj);
    }

    return result;
}

function showData(data, page) {
    
    let header = document.getElementById("header");
    header.textContent = `Page ${page + 1}`;

    let outputDiv = document.getElementById("outputs");
    outputDiv.innerHTML = "";

    let start = page * objectsPerPage;
    let end = start + objectsPerPage;

    let objectsToShow = data.slice(start, end);

    for (let i = 0; i < objectsToShow.length; i++) {
        let obj = objectsToShow[i];
        let div = document.createElement("div");

        div.textContent = `ID: ${obj.id} Name: ${obj.name}`;
        outputDiv.appendChild(div);
            
    }

    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    if (page == 0) {
        prevBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
    }

    if (page == Math.ceil(data.length / objectsPerPage) - 1) {
        nextBtn.disabled = true;
    } else {
        nextBtn.disabled = false;
    }
}