const getTheTitles = function(bookList) {
    let getBook = [];
    bookList.forEach(book => getBook.push(book.title))
    return getBook
};

// Do not edit below this line
module.exports = getTheTitles;
