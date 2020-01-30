let myLibrary = [];

let render = function (template, node) {
    node.innerHTML = template;
}

function Book(title, author, pages, read) {
    // the constructor
    this.title = title,
    this.author = author,
    this.pages = pages + " pages",
    this.read = read
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

            let a, b = "";
            if (myLibrary[i].read == 'yes') {
                a = "selected";
            }
            else {
                b = "selected";
            } 

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

            let bookReadStatus = document.createElement("select");
            bookReadStatus.innerHTML = `<option ${a}>` + "yes" +"</option>" + 
                                       `<option ${b}>` + "no" + "</option>";

            newBookItemCard.appendChild(bookTitleItem)
            newBookItemCard.appendChild(bookAuthorItem);
            newBookItemCard.appendChild(bookPagesItem);
            newBookItemCard.appendChild(bookReadStatus);
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
                readStatus = "yes";
            }
        
        if (bookName == "" || bookAuthor == "" || bookPages == "") {
            return alert("Please fill out the book fully!");
        }

        const newBook = new Book(bookName, bookAuthor, bookPages, readStatus);

        myLibrary.push(newBook);
        closeForm();
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
