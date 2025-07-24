let inputYear = Number(prompt("Xin hãy nhập vào năm :"));
if (inputYear % 4 === 0 && inputYear % 100 !== 0) {
  console.log("Đây là năm nhuận !");
} else if (inputYear % 100 === 0 && inputYear % 400 === 0) {
  console.log(`Năm ${inputYear} là năm nhuận !`);
} else {
  console.log(`Năm ${inputYear} không phải là năm nhuận !`);
}
