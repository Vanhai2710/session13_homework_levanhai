class User {
    constructor(id, user_name, email, password) {
        this.id = id;
        this.user_name = user_name;
        this.email = email;
        this.password = password;
    }
}

// Khởi tạo mảng users là một mảng trống
let users = [];

// Hàm validateInputData kiểm tra tính hợp lệ của dữ liệu nhập vào
function validateInputData(user_name, email, password) {
    const errors = [];

    // Kiểm tra Tên
    if (!user_name || user_name.trim().length === 0) {
        errors.push("Tên không được để trống");
    }

    // Kiểm tra Email
    if (!email || !email.trim() || !/\S+@\S+\.\S+/.test(email)) {
        errors.push("Email không hợp lệ");
    }

    // Kiểm tra Mật khẩu
    if (!password || password.trim().length < 8) {
        errors.push("Mật khẩu phải dài hơn hoặc bằng 8 ký tự");
    }

    return errors;
}

// Hàm đăng ký tài khoản
function register() {
    let id = users.length + 1; // Tạo id tự động
    let user_name = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    // Kiểm tra dữ liệu đầu vào
    const errors = validateInputData(user_name, email, password);
    if (errors.length > 0) {
        alert("Đăng ký thất bại. Vui lòng kiểm tra lại:\n" + errors.join("\n"));
        return;
    }

    // Kiểm tra email trùng
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        alert("Đăng ký thất bại. Email đã tồn tại trong hệ thống.");
        return;
    }

    // Tạo đối tượng user và thêm vào mảng users
    const newUser = new User(id, user_name, email, password);
    users.push(newUser);
    alert("Đăng ký thành công!");
}

// Hàm đăng nhập
function login() {
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    // Tìm user trong mảng users dựa trên email và password
    const foundUser = users.find(user => user.email === email && user.password === password);
    if (foundUser) {
        alert("Đăng nhập thành công!");
        alert("Thông tin tài khoản:\nID: " + foundUser.id + "\nTên: " + foundUser.user_name + "\nEmail: " + foundUser.email);
    } else {
        alert("Đăng nhập thất bại. Email hoặc mật khẩu không đúng.");
    }
}

// Chương trình chính
while (true) {
    let choice = prompt("Chọn một trong các lựa chọn sau:\n1. Đăng ký tài khoản\n2. Đăng nhập\n3. Thoát chương trình");

    switch (choice) {
        case "1":
            register();
            break;
        case "2":
            login();
            break;
        case "3":
            alert("Thoát chương trình");
            // Thoát khỏi vòng lặp
            break;
        default:
            alert("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
            break;
    }

    if (choice === "3") {
        // Thoát khỏi vòng lặp nếu người dùng chọn thoát
        break;
    }
}

