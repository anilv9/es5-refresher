//es5
//book constructor
function Book(title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

//ui constructor
function UI(){

}
UI.prototype.addBookToList = function(book){
  // console.log(book);
  const list = document.getElementById('book-list');
  //create tr ele
  const row = document.createElement('tr');
  //insert cols
  row.innerHTML = `<td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class="delete">X</td>`

  list.appendChild(row);
}
//show alert
UI.prototype.showAlert = function(message, className){
  //create div
  const div = document.createElement('div');
  //add class
  div.className = `alert ${className}`;
  //add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  //insert alert;
  container.insertBefore(div, form);
  //disapper alert
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 2000);


}
//dlete book
UI.prototype.deleteBook =function(target){
  if(target.className==='delete'){
    target.parentElement.parentElement.remove();
  }
}
//clear fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}
//event listeners
document.getElementById('book-form').addEventListener('submit', function(e){
  // console.log('test');
  //get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  const book = new Book(title, author, isbn);
// console.log(book);

//instantiate ui
const ui = new UI();
//validate
if(title === '' || author === '' || isbn === ''){
//error alert
ui.showAlert('pls fil all','error')
}else{
//add book to list
ui.addBookToList(book);
//succes mesg
ui.showAlert('book added!','success');
//clear fields
ui.clearFields();
}


// console.log(title,author,isbn);
  e.preventDefault();

});
//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(e.target);
  //show alert
  ui.showAlert('book dleleted', 'success');
  e.preventDefault();
})