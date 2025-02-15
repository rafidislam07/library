
const booksModule = (function() {
    function Book(title, author, pages, bookStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.bookStatus = bookStatus;
    }
    let books =  [];
    let el, modal, openModalBtn, addBookModalBtn, booksDisplay, cancelBtn;
        const cacheDom = () => {
        el = document.getElementById("booksModule");
        modal = el.querySelector("#add-book-modal");
        openModalBtn = el.querySelector("#openModalBtn");
        addBookModalBtn = el.querySelector(".addBookModalBtn");
        booksDisplay = el.querySelector("#booksDisplay");
        cancelBtn = el.querySelector("#cancelBtn"); // Get the cancel button
    }
    const bindEvents = () => {
        openModalBtn.addEventListener("click", () => {
            modal.showModal();
        })
        addBookModalBtn.addEventListener("click", addBooks);
        booksDisplay.addEventListener("click", deleteBook);
        cancelBtn.addEventListener("click", () => {
            modal.close(); // Close the modal
        });
    }

    const render = () => {
        booksDisplay.innerHTML = ""; // Clear list before re-rendering
    
        books.forEach((book, index) => {
            // Create a new card div for each book
            const bookCard = document.createElement("div");
            bookCard.classList.add("book-card");
    
            // Add the book's details inside the card
            bookCard.innerHTML = `
                <h3>${book.title}</h3>
                <p><strong>Author:</strong> ${book.author}</p>
                <p><strong>Pages:</strong> ${book.pages}</p>
                <p><strong>Status:</strong> ${book.bookStatus}</p>
                <button class="remove-btn" data-index="${index}">Remove</button>
            `;
    
            // Add the card to the books display area
            booksDisplay.appendChild(bookCard);
        });
    };
    
    
    function addBooks() {
        title = el.querySelector("#title").value;
        author = el.querySelector("#author").value;
        pages = el.querySelector("#pages").value;
        bookStatus = el.querySelector("#status").value;
        books.push(new Book(title, author, pages, bookStatus));
        el.querySelector("#title").value = '';
        el.querySelector("#author").value = '';
        el.querySelector("#pages").value = '';
        el.querySelector("#status").value = 'unread';
        render(); 
        modal.close();
        console.log(books);
    }

    const deleteBook = (event) => {
        if (event.target.classList.contains('remove-btn')) {
            const index = event.target.getAttribute('data-index');
            books.splice(index, 1); // Remove from array
            render(); // Re-render UI
        }
    };

    const init = () => {
        cacheDom();
        bindEvents();
        render();
    }
    return {
        init
    }

})();

document.addEventListener("DOMContentLoaded", () => {
    booksModule.init();
});

