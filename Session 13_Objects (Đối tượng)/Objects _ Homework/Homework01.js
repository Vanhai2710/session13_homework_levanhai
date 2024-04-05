


  function main() {
    const id = prompt("Nhập ID:");
    const name = prompt("Nhập tên:");
    const phone = prompt("Nhập số điện thoại:");
    const address = prompt("Nhập địa chỉ:");
  
    const info = new Information(id, name, phone, address);
  
    console.log("Thông tin cá nhân:");
    console.log(`ID: ${info.id}`);
    console.log(`Tên: ${info.name}`);
    console.log(`Số điện thoại: ${info.phone}`);
    console.log(`Địa chỉ: ${info.address}`);
  }
  

  class Information {
    constructor(id, name, phone, address) {
      this.id = id;
      this.name = name;
      this.phone = phone;
      this.address = address;
    }
  }
  

  main();
  