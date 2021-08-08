let myLibrary = [new Book('The Hobbit', 'J. R. R. Tolkien', 310, true), new Book('Life of Pi', 'Yann Martel', 336, false)]


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


Book.prototype.giveInfo = function () {
  return `${this.title} by ${this.author}, ${this.pages} pages.`
}


addButton.addEventListener('click', function(e) {
  e.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let pages = document.getElementById('pages').value;
  let read = document.getElementById('readT').checked;
  addBookToLibrary(title, author, pages, read);
});


function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
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

    let thisBook = i;

    const readButton = document.createElement('button');
    readButton.classList.add('readButton');
    readButton.textContent = myLibrary[i].read ? 'Read' : 'Not read';
    readButton.addEventListener('click', function() {
      myLibrary[thisBook].read = !myLibrary[thisBook].read;
      updateLibrary();
    });
    bookDiv.appendChild(readButton);

    const removeButton = document.createElement('button');
    removeButton.classList.add('removeButton');
    removeButton.textContent = 'Remove book';
    removeButton.addEventListener('click', function() {
      removeBookFromLibrary(thisBook);
    });
    bookDiv.appendChild(removeButton);

    shelves.appendChild(bookDiv);

  }
}

updateLibrary();