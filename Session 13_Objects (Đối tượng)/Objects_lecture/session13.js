console.log("Hello world");

/*

// Exercise 10

// B1: Khai báo mảng số nguyên bất kỳ

const numbers = [1, -1, 3, 2, -3, 4, 5];

// [4, 5]

function maxSubArray(arr) {
  let maxTotal = -Infinity;
  let maxSubArrayResult = undefined;

  for (let k = 1; k <= arr.length - 1; k = k + 1) {
    for (let i = 0; i <= arr.length - k; i = i + 1) {
      let subArr = [];
      let total = 0;
      //   subArr.push(arr[i]);
      for (let j = i; j < i + k; j = j + 1) {
        subArr.push(arr[j]);
      }
      for (let l = 0; l <= subArr.length - 1; l = l + 1) {
        total = total + subArr[l];
      }
      if (maxTotal <= total) {
        maxTotal = total;
        maxSubArrayResult = subArr;
      }
    }
  }
  return maxSubArrayResult;
}

let result = maxSubArray(numbers);

// Output:

// Mảng con 1 phần tử
// [1], [-1], [3], [2], [-3], [4], [5]

// Mảng con 2 phần tử
// [1, -1], [-1, 3] ... [4, 5]
// for (let i = 0; i <= numbers.length - 2; i = i + 1) {
//   let subArr = [];
//   for (let j = i; j < i + 2; j = j + 1) {
//     subArr.push(numbers[j]);
//   }
//   console.log(subArr);
// }
// Mảng con 3 phần tử
// [1, -1, 3], [-1, 3, 2]
// for (let i = 0; i <= numbers.length - 3; i = i + 1) {
//   let subArr = [];
//   for (let j = i; j < i + 3; j = j + 1) {
//     subArr.push(numbers[j]);
//   }
//   console.log(subArr);
// }
// Mảng con 6 phần tử
// [1, -1, 3, 2, -3, 4], [-1, 3, 2, -3, 4, 5]
// for (let i = 0; i <= numbers.length - 6; i = i + 1) {
//   let subArr = [];
//   for (let j = i; j < i + 6; j = j + 1) {
//     subArr.push(numbers[j]);
//   }
//   console.log(subArr);
// }

// ---------------------------------------------

// Đối tươngj trong thực tế 

// Mô tả 1 đối tượng người ở trong thực tế 

// Tôi sẽ đi mô tả về chính bản thân tôi ???

// tên: Hải
// tuổi: 23
// nghề nghiệp: phụ hồ
// cân nặng: 50
// chiều cao: 1m7
// đẹp zai: chuẩn
// vợ: đúng

let person = {
    // Properties
    // thuộc tính, tính chất dùng để mô tả đối tượng
    // key: value, ... , keyn: valuen
    fname: "Lê Văn Hải",
    age: 23,
    job: "phụ hồ",
    weight: 50,
    height: 170,
    handsom: true ,
    married: true,
};

// Read - lấy ra giá trị cảu 1 thuộc tính
console.log(person);
// Read one - lấy một
// Dot notation (.)
console.log(person.fname);
console.log(person.age);
console.log(person.job);
console.log(person.married);

// square bracket ([])
console.log(person["fname"]);
console.log(person["age"]);
console.log(person["job"]);
console.log(person["married"]);

// Read all - lấy toàn bộ giá trị của toàn bộ thuộc tính
// for...in loop
for (let key in person) {
    console.log(key);
}
// lần 1: key == "fname", person.key => undefined, person["fname"]
// lần 2: key == "age", person.key => undefined, person[key] == person["age"]
// lần 3: key == "job", person.key => undefined, person[key] == person["job"]
// ...
// lần cuối: key == "married"

// Create - Thêm mói 1 thuộc tính
// Dot notation(.)
console.log(person);
person.color = "yellow";
person.skin = "black";
person.wearingHat = true;

// KHÔNG NÊN - Trái với convention đặt tên (quy ước đặt tên)
// person.tuổi = 23;
console.log(person);

// Update - Cập nhật giá trị cho 1 thuộc tính
// Dot notation
person.job = "Police";
person.married =false;
console.log(person);

// Delete - Xóa 1 thuộc tính có trong 1 đối tượng
delete person.job;
console.log(person);
 */

// -----------------------------------------------------------------
// Exercise Tổng hợp
// Array + Object

// Exercise Tổng hợp

// Array + Object

// Viết một ứng dụng quản lý danh sách điện thoại (danh bạ)
// phoneList

const phoneList = [
    {
        name: "Tony Stark",
        phone: "0912323232",
    }, 
    {
        name: "Captain America",
        phone: "0971231233"
    }
]

// Cho phép người dùng nhập vào 4 chữ cái C/R/U/D
// C -- Cho người dùng nhập vào tên của đối tượng contact
// muốn thêm mới vào danh bạ
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// danh bạ hay chưa
//   -- Nếu chưa thì tiếp tục cho người dùng nhập vào số điện thoại
// của đối tượng contact đang muốn thêm mới
//   -- Tiến hành thêm mới đối tượng contact đó {name, phone} vào
// trong mảng phoneList
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được thêm mới 1 phần tử contact theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394
// ...

// R -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// U -- Cho người dùng nhập vào tên của contact đang muốn chỉnh sửa số điện
// thoại.
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// phoneList hay chưa
//   -- Nếu tìm thấy thì tiến hành cho người dùng nhập vào giá trị
// phone mới muốn cập nhật cho phần tử contact vừa tìm thấy
//   -- Tiến hành cập nhật
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được cập nhât phần tử contact vừa tìm thấy theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// D -- Cho người dùng nhập vào tên của contact đang muốn xoá đi
//   -- Tiến hành tìm kiếm xem tên này đã tồn tại trong danh sách
// phoneList hay chưa
//   -- Nếu tìm thấy thì tiến hành xoá phần tử contact vừa tìm thấy đi khỏi
// mảng phoneList
//   -- Tiến hành in ra màn hình console danh sách điện thoại phoneList
// đã được xoá phần tử contact vừa tìm thấy theo dạng
// 1. Tony - 09809485435
// 2. Captain America - 093402394

// E -- Thoát khỏi chương trình
// NOTE: Chương trình phải là một vòng lặp vĩnh cửu và sẽ được
// dừng lại cho đến khi người dùng nhập vào chữ cái E