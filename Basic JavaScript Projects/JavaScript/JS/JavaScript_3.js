function displayType(book) {
    var bookType = book.getAttribute("data-book-type");
    alert(bookType + " wrote " + book.innerHTML + "!");
}