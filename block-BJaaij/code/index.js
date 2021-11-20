console.log(`Hi`)

class Book{
    constructor(title,category,author){
        this.title = title;
        this.category = category;
        this.authpr = author;
        this.isRead = false;
        this.finishedDate = null;
    }
    markBookAsRead(){
        this.isRead = true;
        this.finishedDate = Date.now()
    }
}


class BookList{
    constructor(){
        this.allBooks = [];
        this.currentReadBookIndex = 0;
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
        return this.currentReadBookIndex;
    }
}

let booklist1 = new BookList(["A","B","C"],0)



let book1 = new Book("The lord of the rings","Fiction","J.R.Bill")
let book2 = new Book("To Kill a MockingJay","Non-Fiction","Random Guy")

let booklist = new BookList([book1,book2]) 