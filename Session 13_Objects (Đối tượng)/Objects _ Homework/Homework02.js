

class Information {
    constructor(id, name, phone, address) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.address = address;
    }
  
    // Xóa thuộc tính
    deleteProperty(propertyName) {
        if (this.hasOwnProperty(propertyName)) {
          delete this[propertyName];
        }
      }
    
      // Thêm thuộc tính
      addProperty(propertyName, propertyValue) {
        this[propertyName] = propertyValue;
      }
  }
  
  function main() {
    const id = "12345";
    const name = "Văn Hải ";
    const phone = "0935466030";
    const address = "Đà Nẵng";
    const email = "levanhai@gmail.com";
  
    const info = new Information(id, name, phone, address);
  
    // Xóa thuộc tính address
    info.deleteProperty("address");
  
    // Thêm thuộc tính email
    info.addProperty("email", email);
  
    // In thông tin đối tượng ra màn hình
    console.log(info);
  }
  
  main();
  