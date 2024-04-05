

// Class mô tả đối tượng Book
class Book {
    constructor(author, name) {
      this.author = author;
      this.name = name;
    }
  }
  
  function main() {
    // Tạo mảng books gồm nhiều đối tượng Book
    const books = [
      new Book("Dale Carnegie", "Đắc Nhân Tâm "),
      new Book("Paulo Coelho", "Nhà Giả Kim"),
      new Book("David Schwartz", "Đam Mê Nghĩ Lớnđ"),
    ];
  
    // Lấy tên tác giả từ người dùng
    const author = prompt("Nhập tên tác giả: ");
  
    // Tìm kiếm sách theo tác giả
    let foundBook = null;
    for (const book of books) {
      if (book.author === author) {
        foundBook = book;
        break;
      }
    }
  
    // In kết quả
    if (foundBook) {
      console.log(`Tên sách: ${foundBook.name}`);
    } else {
      console.log("Không tìm thấy sách");
    }
  }
  
  main();
  