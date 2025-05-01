let isCtoF = true;

function ConvertCtoF() {
  const input = document.getElementById("konversi-input").value.trim();
  const error = document.getElementById("error");
  const result = document.getElementById("result-input");
  const detail = document.getElementById("calculate-detail");

  error.innerText = "";
  result.value = "";
  detail.value = "";

  if (input === "") {
    error.innerText = "Input tidak boleh kosong!";
    return;
  }

  if (isNaN(input)) {
    error.innerText = "Input harus berupa angka!";
    return;
  }

  const angka = parseFloat(input);
  let hasil;

  if (isCtoF) {
    hasil = (angka * 9 / 5) + 32;
    result.value = hasil;
    detail.value = `${input}°C × (9/5) + 32 = ${hasil}°F`;
  } else {
    hasil = (angka - 32) * 5 / 9;
    result.value = hasil;
    detail.value = `(${input}°F - 32) × (5/9) = ${hasil}°C`;
  }
}

function resetForm() {
  document.getElementById("konversi-input").value = "";
  document.getElementById("result-input").value = "";
  document.getElementById("calculate-detail").value = "";
  document.getElementById("error").innerText = "";
}

function reversFtoC() {
  isCtoF = !isCtoF;

  // Ubah label input/output
  document.getElementById("input-label").innerHTML =
    isCtoF ? "Celcius (°C):" : "Fahrenheit (°F):";

  document.getElementById("result-label").innerHTML =
    isCtoF ? "Fahrenheit (°F):" : "Celcius (°C):";

  // Update rumus
  const title = document.getElementById("formula-title");
  const content = document.getElementById("formula-content");

  if (isCtoF) {
    title.innerText = "Cara Konversi Dari Celcius (°C) ke Fahrenheit (°F)";
    content.innerHTML = `
      <p>Suhu <span class="formula">S</span> dalam derajat Fahrenheit (°F):</p>
      <div class="formula">S<sub>(°F)</sub> = (S<sub>(°C)</sub> × 9/5) + 32</div>
      <div>atau</div>
      <div class="formula">S<sub>(°F)</sub> = (S<sub>(°C)</sub> × 1.8) + 32</div>
    `;
  } else {
    title.innerText = "Cara Konversi Dari Fahrenheit (°F) ke Celcius (°C)";
    content.innerHTML = `
      <p>Suhu <span class="formula">S</span> dalam derajat Celcius (°C):</p>
      <div class="formula">S<sub>(°C)</sub> = (S<sub>(°F)</sub> - 32) × 5/9</div>
      <div>atau</div>
      <div class="formula">S<sub>(°C)</sub> = (S<sub>(°F)</sub> - 32) × 0.555...</div>
    `;
  }

  resetForm();
}
