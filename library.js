let myLibrary = [];

let render = function (template, node) {
    node.innerHTML = template;
}

function Book(title, author, pages) {
    // the constructor
    this.title = title,
    this.author = author,
    this.pages = pages + " pages"
}

Book.prototype.info = function () {
    return this.title + this.author + this.pages;
}

Book.prototype.dis = function () {
    return [this.title, this.author, this.pages];
}

function addBookToLibrary() {

    function displayBooks (myLibrary) {
        // iterate through myLibrary array 
        // then display each array in a seperate card

        const bookShelf = document.getElementById("bookShelf")
        bookShelf.innerHTML = "";

        for (let i = 0; i < myLibrary.length; i++) {

            let newBookItemColumn = document.createElement("div");
            newBookItemColumn.className = "column";

            let newBookItemCard = document.createElement("div");
            newBookItemCard.className = "card";

            let bookTitleItem = document.createElement("h3");
            bookTitleItem.innerText = myLibrary[i].title;

            let bookAuthorItem = document.createElement("p");
            bookAuthorItem.innerText = myLibrary[i].author;

            let bookPagesItem = document.createElement("p");
            bookPagesItem.innerText = myLibrary[i].pages;

            newBookItemCard.appendChild(bookTitleItem)
            newBookItemCard.appendChild(bookAuthorItem);
            newBookItemCard.appendChild(bookPagesItem);

            newBookItemColumn.appendChild(newBookItemCard);
            bookShelf.appendChild(newBookItemColumn);
        }    
    }


    function saveBook() {
        let bookName = document.getElementById("bookTitle").value;
        let bookAuthor = document.getElementById("bookAuthor").value;
        let bookPages = document.getElementById("bookPages").value;
        let bookRead = document.getElementsByName("bookRead");
            let readStatus = "no";
            if (bookRead[0].checked) {
                readStatus = bookRead[0].value;
            }
        
        if (bookName == "" || bookAuthor == "" || bookRead == "") {
            return alert("Please fill out the book fully!");
        }
        
        const newBook = new Book(bookName, bookAuthor, bookPages);

        myLibrary.push(newBook);
        displayBooks(myLibrary);
    }

    const bookSubmit = document.querySelector("#bookSubmit");
    bookSubmit.addEventListener('click', saveBook); 
}

addBookToLibrary();

function openForm() {
    document.getElementById("bookForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("bookForm").style.display = "none";
  }
