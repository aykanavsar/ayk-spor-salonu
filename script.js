let btn = document.querySelector(".button-container");
let features = document.querySelector("#features-container");

btn.addEventListener("click", (e) => {
  features.classList.remove("features-container");
  void features.offsetWidth;
  features.classList.add("features-container");
  switch (e.target.id) {
    case "yoga":
      yoga();
      break;
    case "grup":
      grup();
      break;
    case "bireysel":
      bireysel();
      break;
    case "esneme":
      esneme();
      break;
    default:
      return;
  }
});



function yoga() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Neden Yoga?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Yoga zihinsel ve fiziksel rahatlama sağlar. Vücudu esnetir, dengeyi artırır ve stres seviyesini düşürür.`;
  document.querySelectorAll("#features-container h6")[1].innerHTML = "Yoga Ders Saatleri";
  document.querySelectorAll("#features-container p")[1].innerHTML = `Cumartesi-Pazar: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[2].innerHTML = `Pazartesi-Salı: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[3].innerHTML = `Çarşamba-Cuma: 08:00 - 10:00`;
  document.querySelector("#features-container img").src = "images/yoga.jpg"; // 🔁 düzeltildi
}

function grup() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Neden Grup Dersleri?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Grup dersleri sosyal bağları güçlendirir, motivasyon sağlar ve birlikte öğrenme ortamı sunar.`;
  document.querySelectorAll("#features-container h6")[1].innerHTML = "Grup Ders Saatleri";
  document.querySelectorAll("#features-container p")[1].innerHTML = `Cumartesi-Pazar: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[2].innerHTML = `Pazartesi-Salı: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[3].innerHTML = `Çarşamba-Cuma: 08:00 - 10:00`;
  document.querySelector("#features-container img").src = "images/group.webp"; // 🔁 düzeltildi
}

function bireysel() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Neden Bireysel Antrenman?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Kişisel hedeflerine odaklanmak isteyenler için birebir çalışmalarda maksimum verim elde edilir.`;
  document.querySelectorAll("#features-container h6")[1].innerHTML = "Bireysel Antrenman Saatleri";
  document.querySelectorAll("#features-container p")[1].innerHTML = `Cumartesi-Pazar: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[2].innerHTML = `Pazartesi-Salı: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[3].innerHTML = `Çarşamba-Cuma: 08:00 - 10:00`;
  document.querySelector("#features-container img").src = "images/solo.jpg"; // 🔁 düzeltildi
}

function esneme() {
  document.querySelectorAll("#features-container h6")[0].innerHTML = "Neden Esneme?";
  document.querySelectorAll("#features-container p")[0].innerHTML = `Esneme hareketleri kasları gevşetir, sakatlanmaları önler ve antrenmana hazırlanmanı sağlar.`;
  document.querySelectorAll("#features-container h6")[1].innerHTML = "Esneme Seans Saatleri";
  document.querySelectorAll("#features-container p")[1].innerHTML = `Cumartesi-Pazar: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[2].innerHTML = `Pazartesi-Salı: 08:00 - 10:00`;
  document.querySelectorAll("#features-container p")[3].innerHTML = `Çarşamba-Cuma: 08:00 - 10:00`;
  document.querySelector("#features-container img").src = "images/stret.webp"; // 🔁 düzeltildi


}

// BMI Hesaplama
let tri = document.querySelector(".triangle");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");

weight.addEventListener("input", () => {
  let bmi = weight.value / ((height.value / 100) ** 2);
  let percentage;
  if (bmi > 13.5 && bmi < 18.5) {
    percentage = 7 + (bmi - 13.5) * 16 / 5;
  } else if (bmi > 25 && bmi < 30 || bmi >= 30 && bmi < 35 || bmi >= 35 && bmi < 40) {
    percentage = 40 + (bmi - 24.5) * 16 / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    percentage = 23 + (bmi - 18.5) * 16 / 7;
  }

  if (percentage > 6 && percentage < 88) {
    tri.style.left = `${percentage}%`;
  }
});

// Sayfa kaydırıldıkça navbar arka plan rengi değişsin
function changeBg() {
  let navbar = document.querySelector(".navbar-container");
  let scrollValue = window.scrollY;
  if (scrollValue < 700) {
    navbar.classList.remove('bgColor');
  } else {
    navbar.classList.add('bgColor');
  }
}
window.addEventListener('scroll', changeBg);
