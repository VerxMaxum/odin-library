function Book(title, name, pages, read) {
    this.title = title;
    this.name = name;
    this.pages = pages;
    this.read = read;
}

const library = [new Book("It", "Stephen King", "1400", "Yes"), new Book("The Green Mile", "Stephen King", "1000", "Yes")];

const main = document.getElementById('main');

for(let book of library) {
    if(book instanceof Book)
        console.log("This is a book");
    else
        console.log("Not a book");
    let card = document.createElement('div');
    card.classList.add('book-container');

    let title = document.createElement('p');
    title.textContent = "Title: " + book.title;

    let author = document.createElement('p');
    author.textContent = "Author: " + book.author;

    let pages = document.createElement('p');
    pages.textContent = "Number of Pages: " + book.pages;


    let buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');

    let readButton = document.createElement('button');
    readButton.classList.add('book-button', 'read-button');
    if(book.read === "Yes")
        readButton.textContent = "Read";
    else if(book.read === "No")
        readButton.textContent = "Unread";

    let removeButton = document.createElement('button');
    removeButton.classList.add('book-button', 'remove-button');
    removeButton.textContent = "Remove";

    buttonContainer.appendChild(readButton);
    buttonContainer.appendChild(removeButton);

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(buttonContainer);

    main.appendChild(card);
}

const dialogButton = document.getElementById('add');
const dialog = document.getElementById('dialog-form');
const closeDialog = document.getElementById('close-form');
dialogButton.addEventListener("click", () => {dialog.showModal();})
closeDialog.addEventListener("click", () => {dialog.close();})


function addtoLibrary() {

}