// Gọi thư viện vừa cài ra để sử dụng
const prompt = require("prompt-sync")();

// Chương trình sẽ dừng lại chờ bạn gõ số vào terminal
let manh = prompt("Nhập số tuổi: ");

if (manh >= 18) {
  console.log("du tuoi di tu");
} else {
  console.log("oc cho");
}
