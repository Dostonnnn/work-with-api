const list = document.querySelector('.list');
const card = document.querySelector('.card');
const request = new XMLHttpRequest();
const basket = document.querySelector('.basket');
request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        render(data);
    }
})

function render(data) {
    list.innerHTML = '';
    data.forEach(item => {
        if (item.title.length > 20) {
            item.title = item.title.slice(0, 20) + '...';
        }
        list.innerHTML += `
        <div class="list-item">
            <h3 class="title">${item.title}</h3>
            <p class="number">${item.id}</p>
            <p class="mes">${item.completed}</p>
            <button class="add">Add</button>
        </div>
        `;
        addButton(data);

    })
}


function addButton(data) {
    const add = document.querySelectorAll('.add');
    add.forEach((item, id) => {
        item.addEventListener('click', () => {
            const product = data[id];
            const comp = String(product.id).padStart(3, '0');
            card.innerHTML += `
                <div class="remove-div">
                    <p class="basket-number">${comp}</p>
                    <p class="basket-number">${product.completed}</p>
                    <button class="remove">Remove</button>
                </div>
            `;

            removeButton(data);

        });
    });


}

function removeButton(data) {
    const remove = document.querySelectorAll('.remove');
    remove.forEach((item) => {
        item.addEventListener('click', () => {
            const product = item.parentElement;
            product.innerHTML = '';
            product.style.display = 'none';
        })
    })
}

request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
request.send();