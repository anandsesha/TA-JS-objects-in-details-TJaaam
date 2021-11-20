console.log(`Hi`)

class Book{
    constructor(title,category,author,isRead = false,finishedDate){
        this.title = title;
        this.category = category;
        this.authpr = author;
        this.isRead = isRead;
        this.finishedDate = finishedDate;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now()
    }
}

let book1 = new Book(["A","B","C"],0)


class BookList{
    constructor(allBooks = [],currentReadBookIndex){
        this.allBooks = allBooks;
        this.currentReadBookIndex = currentReadBookIndex;
    }
    add(listOfBooks = []){
        this.allBooks = this.allBooks.concat(listOfBooks);
        return this.allBooks;
    }
    getCurrentBook(currentReadBookIndex){
        return this.allBooks[this.currentReadBookIndex];
    }
    getNextBook(){
        this.currentReadBookIndex++;
        return this.allBooks[this.currentReadBookIndex];
    }
    getPrevBook(){
        this.currentReadBookIndex--;
        return this.allBooks[this.currentReadBookIndex];
    }
    changeCurrentBook(index){
        this.currentReadBookIndex = index;
    }
}

let booklist1 = new BookList(["A","B","C"],0)