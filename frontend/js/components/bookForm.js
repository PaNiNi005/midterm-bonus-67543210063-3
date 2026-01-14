// frontend/js/components/bookForm.js
function showBookForm(book = null) {
    const modal = document.getElementById('book-form-modal');
    const form = document.getElementById('book-form');

    modal.style.display = 'block';

    if (book) {
        // Edit Mode
        document.getElementById('form-title').innerText = 'Edit Book';
        form.dataset.id = book.id;

        form.title.value = book.title;
        form.author.value = book.author;
        form.isbn.value = book.isbn;
    } else {
        // Create Mode
        document.getElementById('form-title').innerText = 'Add New Book';
        form.reset();
        delete form.dataset.id;
    }
}

function hideBookForm() {
    const modal = document.getElementById('book-form-modal');
    modal.style.display = 'none';
}
