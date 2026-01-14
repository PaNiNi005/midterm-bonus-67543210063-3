// frontend/js/app.js

// Global state
let currentFilter = 'all';

// Initialize app
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Library Management System - Client');

    setupEventListeners();
    await loadBooks();
});

// Setup event listeners
function setupEventListeners() {

    // Filter buttons
    document.getElementById('filter-all').addEventListener('click', () => {
        currentFilter = 'all';
        loadBooks();
    });

    document.getElementById('filter-available').addEventListener('click', () => {
        currentFilter = 'available';
        loadBooks('available');
    });

    document.getElementById('filter-borrowed').addEventListener('click', () => {
        currentFilter = 'borrowed';
        loadBooks('borrowed');
    });

    // Add book button
    document.getElementById('add-book-btn').addEventListener('click', () => {
        showBookForm();
    });

    // Form submit
    document
        .getElementById('book-form')
        .addEventListener('submit', handleFormSubmit);
}

// Load books
async function loadBooks(status = null) {
    try {
        showLoading();

        const result = await api.getAllBooks(status);

        // Render list via component
        renderBookList(result.data || result.books || []);

        // Update statistics (ถ้ามี)
        if (result.statistics) {
            updateStatistics(result.statistics);
        }

        hideLoading();
    } catch (error) {
        console.error('Error loading books:', error);
        alert('Failed to load books. Please try again.');
        hideLoading();
    }
}

// Borrow book
async function borrowBook(id) {
    try {
        if (!confirm('Borrow this book?')) return;

        await api.borrowBook(id);
        alert('Book borrowed successfully!');
        await loadBooks(currentFilter === 'all' ? null : currentFilter);
    } catch (error) {
        alert('Failed to borrow book.');
    }
}

// Return book
async function returnBook(id) {
    try {
        if (!confirm('Return this book?')) return;

        await api.returnBook(id);
        alert('Book returned successfully!');
        await loadBooks(currentFilter === 'all' ? null : currentFilter);
    } catch (error) {
        alert('Failed to return book.');
    }
}

// Delete book
async function deleteBook(id) {
    try {
        if (!confirm('Delete this book?')) return;

        await api.deleteBook(id);
        alert('Book deleted successfully!');
        await loadBooks(currentFilter === 'all' ? null : currentFilter);
    } catch (error) {
        alert('Failed to delete book.');
    }
}

// Edit book
async function editBook(id) {
    try {
        const result = await api.getBookById(id);
        const book = result.data || result;
        showBookForm(book);
    } catch (error) {
        alert('Failed to load book.');
    }
}

// Handle form submit (Create / Edit)
async function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const id = form.dataset.id;

    const bookData = {
        title: form.title.value,
        author: form.author.value,
        isbn: form.isbn.value
    };

    try {
        if (id) {
            await api.updateBook(id, bookData);
            alert('Book updated successfully!');
        } else {
            await api.createBook(bookData);
            alert('Book added successfully!');
        }

        hideBookForm();
        await loadBooks(currentFilter === 'all' ? null : currentFilter);

    } catch (error) {
        alert('Failed to save book.');
    }
}

// Update statistics
function updateStatistics(stats) {
    if (document.getElementById('stat-total')) {
        document.getElementById('stat-total').textContent = stats.total;
        document.getElementById('stat-available').textContent = stats.available;
        document.getElementById('stat-borrowed').textContent = stats.borrowed;
    }
}

// Loading state
function showLoading() {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'block';
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) loading.style.display = 'none';
}
