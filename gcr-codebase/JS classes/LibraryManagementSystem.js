
"use strict";

/*
ASSIGNMENT 4 - Q3
Library Management System

Concepts:
1. Classes and objects
2. Constructor
3. Methods
4. Arrays
5. Searching using ISBN

Tasks:
- Create a Book class.
- Add issueBook() and returnBook() methods.
- Display available books.
- Issue a book by searching its ISBN.
*/

class Book {
    constructor(title, author, ISBN, isIssued = false) {
        this.title = title;
        this.author = author;
        this.ISBN = ISBN;
        this.isIssued = isIssued;
    }

    // Issue the book if it is available
    issueBook() {
        if (this.isIssued) {
            console.log(`"${this.title}" is already issued.`);
            return;
        }

        this.isIssued = true;
        console.log(`"${this.title}" has been issued successfully.`);
    }

    // Return the issued book
    returnBook() {
        if (!this.isIssued) {
            console.log(`"${this.title}" has not been issued.`);
            return;
        }

        this.isIssued = false;
        console.log(`"${this.title}" has been returned successfully.`);
    }

    // Display book details
    displayDetails() {
        return `Title: ${this.title} | Author: ${this.author} | ISBN: ${this.ISBN} | Status: ${this.isIssued ? "Issued" : "Available"}`;
    }
}

// Create book objects and store them in an array
const books = [
    new Book("JavaScript Basics", "John Smith", "101"),
    new Book("Learning Java", "James Gosling", "102"),
    new Book("Web Development", "David Miller", "103"),
    new Book("Python Guide", "Mark Lee", "104", true)
];

// Display all available books
function displayAvailableBooks() {
    console.log("\n========== AVAILABLE BOOKS ==========");

    const availableBooks = books.filter(book => !book.isIssued);

    if (availableBooks.length === 0) {
        console.log("No books are currently available.");
        return;
    }

    availableBooks.forEach(book => {
        console.log(book.displayDetails());
    });
}

// Search for a book by ISBN and issue it
function issueBookByISBN(isbn) {
    console.log(`\nSearching for ISBN: ${isbn}`);

    const book = books.find(book => book.ISBN === isbn);

    if (!book) {
        console.log("Book not found.");
        return;
    }

    book.issueBook();
}

// Display initial available books
displayAvailableBooks();

// Issue a book using its ISBN
issueBookByISBN("102");

// Try issuing an already-issued book
issueBookByISBN("104");

// Try an ISBN that does not exist
issueBookByISBN("999");

// Display available books after issuing
displayAvailableBooks();

// Return a book
const returnedBook = books.find(book => book.ISBN === "102");

if (returnedBook) {
    returnedBook.returnBook();
}

// Display final available books
displayAvailableBooks();

/*
EXPLANATION:

1. The Book class defines the properties of a book.
2. The constructor initializes title, author, ISBN, and issue status.
3. issueBook() marks an available book as issued.
4. returnBook() marks an issued book as available.
5. filter() displays only books that are not issued.
6. find() searches for a book using its ISBN.
7. The book objects are stored in the books array.

EXPECTED BEHAVIOR:
- Available books are displayed first.
- ISBN 102 is found and issued.
- ISBN 104 reports that the book is already issued.
- ISBN 999 reports that the book was not found.
- Returning ISBN 102 makes that book available again.
*/
