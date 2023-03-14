const urlParams = new URLSearchParams(window.location.search);
const userId = urlParams.get('id');

fetch(`http://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.json())
    .then(user =>  {
        displayUserInfo(user) 
        console.log(user)}
    )
    .catch(error => console.error(error));

    
const userDetails = document.getElementById('user-details');

function displayUserInfo(user) {

    const {id, name, username, email, address, phone, website, company} = user;

    const idItem        = createElementWithContent('li', `id: ${id}`);
    const nameItem      = createElementWithContent('li', `Name: ${name}`);
    const usernameItem  = createElementWithContent('li', `Username: ${username}`);
    const emailItem     = createElementWithContent('li', `Email: ${email}`);
    const adressItems   = createElementWithContent('li', 'Address:');
    const phoneItem     = createElementWithContent('li', `Phone: ${phone}`);
    const websiteItem   = createElementWithContent('li', `Website: ${website}`);
    const companyItem   = createElementWithContent('li', `Company:`);
    const addressInfo   = createAddressList(address);
    const companyInfo   = createCompanyList(company);

    userDetails.append(
        idItem, 
        nameItem, 
        usernameItem, 
        emailItem, 
        adressItems, 
        addressInfo, 
        phoneItem, 
        websiteItem,
        companyItem,
        companyInfo
    );
}

function createElementWithContent(tag, content) {
    const element = document.createElement(tag);
    element.textContent = content;

    return element;
}

function createCompanyList(company) {
    const companyInfo = document.createElement('ul'); 

    const nameLi = createElementWithContent('li', `Name: ${company.name}`);
    companyInfo.appendChild(nameLi);

    const bsLi = createElementWithContent('li', `Bs: ${company.bs}`);
    companyInfo.appendChild(bsLi);

    const catchPhraseLi = createElementWithContent('li', `CatchPhrase: ${company.catchPhrase}`);
    companyInfo.appendChild(catchPhraseLi);

    return companyInfo

}

function createAddressList(address) {
    const addressInfo = document.createElement('ul');
    
    const cityLi = createElementWithContent('li', `City: ${address.city}`);
    addressInfo.appendChild(cityLi);

    const geoLi = createElementWithContent('li', `Geo: lat: ${address.geo.lat} | ing: ${address.geo.lng}`);
    addressInfo.appendChild(geoLi);
    
    const streetLi = createElementWithContent('li', `Street: ${address.street}`);
    addressInfo.appendChild(streetLi);
    
    const suiteLi = createElementWithContent('li', `Suite: ${address.suite}`);
    addressInfo.appendChild(suiteLi);
    
    const zipcodeLi = createElementWithContent('li', `Zipcode: ${address.zipcode}`);
    addressInfo.appendChild(zipcodeLi);

    return addressInfo;
}

