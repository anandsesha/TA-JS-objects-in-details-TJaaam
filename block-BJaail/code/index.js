// BookList will manage each individual Book
class BookList{
    constructor(root, list = []){
        this.books = list;
        this.root = root;
    }
    addBook(title,author,isbn){
        let book = new Book(title,author,isbn);
        this.books.push(book)
        this.createUI()
        return this.books.length;
    }
    chnageState(){

    }
    handleDelete(id){
        let index = this.books.findIndex(book => book.id === id)
        this.books.splice(index,1)
        this.createUI();
        return this.books.length;
    }
    createUI(){
        this.root.innerHTML = "";
        this.books.forEach((book) => {
            let ui = book.createUI()
            ui.querySelector('button').addEventListener(
                'click',this.handleDelete.bind(this,book.id)
            );
            this.root.append(ui);
        });
    }
}

// For Each Book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = `id-${Date.now()}`
    }
    createUI(){
        // let ul = document.querySelector('.book_list')
        let li = document.createElement('li')
        li.classList.add('flex')

        let title = document.createElement('h5')
        title.innerText = this.title;
        let author = document.createElement('h5')
        author.innerText = this.author;
        let isbn = document.createElement('h5')
        isbn.innerText = this.isbn;
        
        let cross = document.createElement('button')
        cross.innerText = `❌`;
        // cross.addEventListener('click',handleDelete)

        li.append(title,author,isbn,cross)
        return li;
    }
}

let addBookButton = document.querySelector('.addBook')

let myBook = new BookList(document.querySelector('.book_list'))
myBook.addBook("Alchemist","Khalid Hosneni",20)
myBook.addBook("A Thousand Suns","Khalid Hosneni",21)

// addBookButton.addEventListener('keyup',(event) => {
//     if(event.keycode === 13){
//         myBook.addBook(event.target.value)
//     }
// })


// let firstBook = new Book("Harry Potter","J.K Rowling",10)