let form = document.querySelector('form')
let bookListRoot = document.querySelector('.book_list')


const titleElm = form.elements.bookTitle;
const authorElm = form.elements.bookAuthor;
const isbnElm = form.elements.bookIsbn;

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
        // return this.books.length;
    }
    // handleDelete(id){
    //     let index = this.books.findIndex(book => book.id === id)
    //     this.books.splice(index,1)
    //     this.createUI();
    //     return this.books.length;
    // }
    // createDeleteUI(){
    //     this.root.innerHTML = "";
    //     this.books.forEach((book) => {
    //         let ui = book.createUI()
    //         ui.querySelector('button').addEventListener(
    //             'click',this.handleDelete.bind(this,book.id)
    //         );
    //         this.root.append(ui);
    //     });
    // }
    createUI(){
        this.books.forEach((book) => {
            bookListRoot.innerHTML = "";
            let li = document.createElement('li')
            li.classList.add('flex')

            let title = document.createElement('h5')
            title.innerText = book.title;
            let author = document.createElement('h5')
            author.innerText = book.author;
            let isbn = document.createElement('h5')
            isbn.innerText = book.isbn;
            
            let cross = document.createElement('button')
            cross.classList.add('noStyle')
            cross.innerText = book.isRead ? `✅` : `❌`;
            cross.addEventListener('click',() => {
                book.toggleIsRead();
                this.createUI();
            })

            li.append(title,author,isbn,cross)
            bookListRoot.append(li)
            // return li;
        })
    }   
}

// For Each Book
class Book{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.id = `id-${Date.now()}`
        this.isRead = false;
    }
    toggleIsRead(){
        this.isRead = !this.isRead;
    }
}


let library = new BookList() 

function handleSubmit(event){
    event.preventDefault();
    const title = titleElm.value;
    const author = authorElm.value;
    const isbn = isbnElm.value;
    console.log(title,author,isbn)
    library.addBook(title,author,isbn)
    titleElm.value = '';
    authorElm.value = '';
    isbnElm.value = '';
}

form.addEventListener('submit',handleSubmit)



// let addBookButton = document.querySelector('.addBook')

// let myBook = new BookList(document.querySelector('.book_list'))
// myBook.addBook("Alchemist","Khalid Hosneni",20)
// myBook.addBook("A Thousand Suns","Khalid Hosneni",21)

