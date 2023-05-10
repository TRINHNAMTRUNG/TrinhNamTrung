let rowTable = document.querySelector(".row_table");

var API = "https://645863294eb3f674df7356af.mockapi.io/api/users";
fetch(API)
    .then(function (response) {
        return response.json();
    })
    .then(function (post) {
        function render(varialble) {
            return `
                <div class="row">
                    <div class="id">${varialble.id}</div>
                    <div class="img_author"><img src="${varialble.img}" alt=""></div>
                    <div class="author">${varialble.author}</div>
                    <div class="album">${varialble.album}</div>
                    <div class="dateAdd">${varialble.dateAdd}</div>
                    <button class="delete-button">delete</button>
                </div>
            `;
        }
        let newList = post.map(render);
        rowTable.innerHTML = newList.join("");
        const rows = document.querySelectorAll('.row');
        rows.forEach(row => {
            const deleteButton = row.querySelector('.delete-button');
            deleteButton.addEventListener('click', () => {
                const idx = row.querySelector('.id').textContent;
                console.log(idx);
                fetch(`${API}/${idx}`, {
                    method: 'DELETE',
                })
                    .then(response => {
                        if (response.ok) {
                            row.remove();
                        } else {
                            throw new Error('Failed to delete row');
                        }
                    })
                    .catch(error => console.error(error));
            });
        });
        
    });

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', event => {
    event.preventDefault();
    const infName = document.querySelector('#name').value;
    const infAlbum = document.querySelector('#name_album').value;
    const infDate = document.querySelector('#date').value;
    const infImg = document.querySelector('#img').value;
    const authorData = {
        author: infName,
        album: infAlbum,
        dateAdd: infDate,
        img: infImg,
    };
    console.log(authorData);
    fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authorData),
    })
        .then(response => response.json())
        .then(result => {
            const author1 = result;
            const row = `
                <div class="row">
                    <div class="id">${author1.id}</div>
                    <div class="img_author"><img src="${author1.img}" alt=""></div>
                    <div class="author">${author1.author}</div>
                    <div class="album">${author1.album}</div>
                    <div class="dateAdd">${author1.dateAdd}</div>
                    <button class="delete-button">delete</button>
                </div>`;
            rowTable.insertAdjacentHTML('beforeend', row);
            addForm.reset();
        })
        .catch(error => console.error(error));
});

//delete author

