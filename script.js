const nameInput = document.querySelector('.product-name');
const priceInput = document.querySelector('.product-price');
const imageInput = document.querySelector('.product-image');
const addButton = document.querySelector('.add-btn');
const productList = document.querySelector('.product-list');

let products = [];

addButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    const price = priceInput.value.trim();
    const image = imageInput.value.trim();

    if(!name || !price || !image){
        alert("Будь ласка, заповніть усі поля!");
        return;
    }

    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = image;

    const title = document.createElement('h3');
    title.textContent = name;

    const priceTag = document.createElement('p');
    priceTag.textContent = `Ціна: ${price} грн`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(priceTag);

    productList.appendChild(card);

    products.push({name, price, image});
    saveProducts();

    nameInput.value = '';
    priceInput.value = '';
    imageInput.value = '';
});

function saveProducts(){
    const json = JSON.stringify(products);
    localStorage.setItem('products', json);
}

function loadProducts(){
    const stored = localStorage.getItem('products');
    if(stored){
        products = JSON.parse(stored);
        products.forEach(p => addProductFromStorage(p));
    }
}

function addProductFromStorage(product){
    const card = document.createElement('div');
    card.classList.add('product-card');

    const img = document.createElement('img');
    img.src = product.image;

    const title = document.createElement('h3');
    title.textContent = product.name;

    const priceTag = document.createElement('p');
    priceTag.textContent = `Ціна: ${product.price} грн`;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(priceTag);

    productList.appendChild(card);
}

loadProducts();