// зробити файл users.html

// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => displayUsers(users))
    .catch(error => console.error(error));


const userList = document.getElementById('users-list');

function displayUsers(users) {
    let list = '';
        
    users.forEach(user => {
        list += `<li><a href="user-details.html?id=${user.id}">${user.id} - ${user.name}</a></li>`;
    });
        
    userList.innerHTML = `<ul>${list}</ul>`;
}
  


// вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)
