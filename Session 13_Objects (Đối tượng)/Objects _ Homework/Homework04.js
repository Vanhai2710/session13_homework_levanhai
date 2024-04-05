

// Khai báo đối tượng product (sản phẩm)
const product = {
    id: 123,
    name: "bikes",
    price: "100$",  // giá
    quantity: 10, // Số lượng
  };
  
  // In tất cả các thuộc tính của product và
  // giá trị của thuộc tính đó ra màn hình
  // thuộc tính:       ${key}
  // giá trị:          ${product[key]}
  for (let key in product) {
    console.log(`${key}: ${product[key]}`);
  }
  