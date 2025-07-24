let a = Number(prompt("Mời bạn nhập vào số a:"));
let b = Number(prompt("Mời bạn nhập vào số b:"));
let cacunlation = prompt("Mời bạn nhập vào các phép tính (+,-,*,/):");
if (cacunlation === "+") {
  alert(a + b);
} else if (cacunlation === "-") {
  alert(a - b);
} else if (cacunlation === "*") {
  alert(a * b);
} else if (cacunlation === "/") {
  alert(a / b);
} else {
  ("Bạn nhập chưa đúng ! Xin hãy nhập lại!");
}
