
const booksModule = (function() {
    function Book(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
    let title, author, pages, status;
    let books =  [];
    let el, modal, openModalBtn, closeModalBtn, booksDisplay;
        const cacheDom = () => {
        el = document.getElementById("booksModule");
        modal = document.getElementById("add-book-modal");
        openModalBtn = el.querySelector("#openModalBtn");
        closeModalBtn = el.querySelector(".closeModalBtn");
        booksDisplay = el.querySelector("booksDisplay");
    }
    const bindEvents = () => {
        openModalBtn.addEventListener("click", () => {
            modal.showModal();
        })
        closeModalBtn.addEventListener("click", () => {
            closeModal();
        })
    }
    
    function closeModal() {
        title = el.querySelector("#title").value;
        author = el.querySelector("#author").value;
        pages = el.querySelector("#pages").value;
        status = el.querySelector("#status").value;
        books.push(new Book(title, author, pages, status));
        modal.close();
        console.log(books);
    }

    const init = () => {
        cacheDom();
        bindEvents();
    }
    return {
        init
    }

})();

document.addEventListener("DOMContentLoaded", () => {
    booksModule.init();
});

































// const modal = document.querySelector(".modal")
// const openModal = document.querySelector(".open-button")
// const closeModal = document.querySelector(".close-button")

// openModal.addEventListener("click", () => {
//     modal.showModal()
// })

// closeModal.addEventListener("click", () => {
//     modal.close()
// })


// const myLibrary = []

// function Book(title, author, pages, read) {
//     this.title = title,
//     this.author = author,
//     this.pages = pages,
//     this.read = read,
//     this.info = function() {
//         console.log(`${this.title} by ${this.author}, ${this.pages} `)
//     }
// }

// function addBookToLibrary (myLibrary, book) {
//     myLibrary.push(book)
// }

// const book1 = new Book ('The Lord of the Rings', 'J. R. R. Tolkien', 1077)
// const book2 = new Book ('harrypotter', 'jk rowling', 69)

// addBookToLibrary(myLibrary, book1)
// addBookToLibrary(myLibrary, book2)

// function loopThroughArray(myLibrary) {
//     for (let i = 0; i < myLibrary.length; i++) {
//         let element = myLibrary[i];
//         console.log(element);
//         element.info()
//     }
// }

// loopThroughArray(myLibrary)

// function displayBooks(myLibrary) {
//     const container = document.getElementById("book-container")
//     for (let i=0; i < myLibrary.length; i++) {
//         let book = myLibrary[i];
//         const bookCard = document.createElement("div")
//         const bookTitle = document.createElement("h3")
//         const bookAuthor = document.createElement("p")
//         const bookPages = document.createElement("p")

//         bookCard.classList.add("book-card")

//         bookTitle.textContent = book.title
//         bookAuthor.textContent = `Author: ${book.author}`
//         bookPages.textContent = `Pages: ${book.pages}`

//         bookCard.appendChild(bookTitle)
//         bookCard.appendChild(bookAuthor)
//         bookCard.appendChild(bookPages)
//         container.appendChild(bookCard)
//     }
// }

// displayBooks(myLibrary)