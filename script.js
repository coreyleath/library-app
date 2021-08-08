let myLibrary = [new Book('The Hobbit', 'Tolkien??', 2104, true), new Book('Life of Pi', 'Me', 1337, false)]


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.giveInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has been read' : 'not read yet'}.`
}

addButton.addEventListener('click', function() {

});

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(Book(title, author, pages, read));
  updateLibrary();
}

function removeBookFromLibrary(i) {
  myLibrary.splice(i,1);
  updateLibrary();
}


function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function updateLibrary() {

  removeAllChildNodes(shelves);

  for (i = 0; i < myLibrary.length; i++) {

    if (!(i==0) && (i % 4 == 0)) {
      const shelfDiv = document.createElement('div');
      shelfDiv.classList.add('shelf');
      shelves.appendChild(shelfDiv);
    }

    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.textContent = myLibrary[i].giveInfo();

    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'Remove book';
    let thisBook = i;
    removeButton.addEventListener('click', function() {
      removeBookFromLibrary(thisBook);
    });
    bookDiv.appendChild(removeButton);

    shelves.appendChild(bookDiv);

  }
}

updateLibrary();