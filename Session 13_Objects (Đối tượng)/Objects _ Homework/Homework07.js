

// Khởi tạo mảng users là một mảng trống
let users = [];

// Hàm validateInputData kiểm tra tính hợp lệ của dữ liệu nhập vào
function validateInputData(id, userName, email, password) {
    const errors = [];

    // Kiểm tra ID
    if (!id) {
        errors.push("ID không được để trống");
    }

    // Kiểm tra Tên
    if (!userName || userName.trim().length < 3) {
        errors.push("Tên không được để trống và phải dài hơn 3 ký tự");
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

// Hàm tạo đối tượng user và thêm vào mảng users nếu dữ liệu hợp lệ
function createUserAndAddToArray() {
    let id = prompt("Nhập ID:");
    let userName = prompt("Nhập tên:");
    let email = prompt("Nhập email:");
    let password = prompt("Nhập mật khẩu:");

    const errors = validateInputData(id, userName, email, password);
    if (errors.length > 0) {
        // Nếu có lỗi, hiển thị thông báo lỗi và yêu cầu người dùng nhập lại
        alert("Dữ liệu không hợp lệ. Vui lòng kiểm tra lại:\n" + errors.join("\n"));
        createUserAndAddToArray(); // Gọi lại hàm để nhập lại dữ liệu
    } else {
        // Nếu dữ liệu hợp lệ, tạo đối tượng user và thêm vào mảng users
        const user = { id, userName, email, password };
        users.push(user);
        alert("Thêm user thành công!");
    }
}

// Thực hiện tạo đối tượng user và thêm vào mảng users
createUserAndAddToArray();
