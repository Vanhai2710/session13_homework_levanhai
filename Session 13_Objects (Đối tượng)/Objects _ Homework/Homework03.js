

// Class mô tả đối tượng sinh viên
class Student {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  }
  
  function main() {
    // Lấy số lượng sinh viên từ người dùng
    const numStudents = parseInt(prompt("Nhập số lượng sinh viên:"));
  
    // Tạo mảng để lưu trữ thông tin sinh viên
    const students = [];
  
    // Lặp lại để lấy thông tin cho từng sinh viên
    for (let i = 0; i < numStudents; i++) {
      const id = prompt(`Nhập ID sinh viên thứ ${i + 1}:`);
      const name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`);
  
      // Tạo đối tượng sinh viên mới
      const student = new Student(id, name);
  
      // Thêm sinh viên vào mảng
      students.push(student);
    }
  
    // In thông tin mảng sinh viên ra màn hình
    console.log("Danh sách sinh viên:");
    for (const student of students) {
      console.log(`- ID: ${student.id}, Tên: ${student.name}`);
    }
  }
  main();

