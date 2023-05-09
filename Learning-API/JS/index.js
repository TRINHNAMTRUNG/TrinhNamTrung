let rowTable = document.querySelector(".row_table");
var API = "https://645863294eb3f674df7356af.mockapi.io/api/users";
fetch(API)
    .then(function(response) {
        return response.json();
    })
    .then(function(post) {
        function render(varialble) {
            return `
                <div class="row">
                    <div class="id">${varialble.id}</div>
                    <div class="img_author"><img src="${varialble.img}" alt=""></div>
                    <div class="author">${varialble.author}</div>
                    <div class="album">${varialble.album}</div>
                    <div class="dateAdd">${varialble.dateAdd}</div>
                </div>
            `;
        }
        let newList = post.map(render);
        rowTable.innerHTML = newList.join("");
    })