document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;

    addBookToList(title, author);

    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
});

function addBookToList(title, author) {
    const bookList = document.getElementById('book-list');
    const li = document.createElement('li');
    li.innerHTML = `${title} by ${author} <button onclick="removeBook(this)">Remove</button>`;
    bookList.appendChild(li);
}

function removeBook(button) {
    const li = button.parentElement;
    li.remove();
}