let weight = Number(prompt("Hãy nhập vào cân nặng của bạn(kg) :"));
let height = Number(prompt("Hãy nhập vào chiều cao của bạn(m) :"));
let BMI = weight / (height * height);
if (BMI < 18.5) {
  alert("Bạn thuộc người cân nặng thấp (gầy)");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  alert("Bạn thuộc người bình thường");
} else if (BMI >= 25) {
  alert("Bạn thuộc người thừa cân ");
} else if (BMI > 25 && BMI <= 29.9) {
  alert("Bạn thuộc người tiền béo phì");
} else if (BMI >= 30 && BMI <= 34.9) {
  alert("Bạn thuộc người béo phì độ 1");
} else if (BMI >= 35 && BMI <= 39.9) {
  alert("Bạn thuộc người béo phì độ 2");
} else {
  alert("Bạn thuộc người béo phì độ 3");
}
