function updateJam() {
    const jamEl = document.getElementById("jam");
    const waktuSekarang = new Date();
    const jam = waktuSekarang.getHours();
    const menit = waktuSekarang.getMinutes();
    const detik = waktuSekarang.getSeconds();

    jamEl.innerHTML = formatWaktu(jam) + `:` + formatWaktu(menit) + ':' +formatWaktu(detik);
    setTimeout(updateJam, 1000);
}

function formatWaktu(angka) {
    return angka < 10 ? '0' + angka : angka;
}

updateJam();

function updateTanggal() {
    const tanggalEl = document.getElementById("tanggal");
    const waktuSekarang = new Date();
    const hari = waktuSekarang.getDate();
    const bulan = waktuSekarang.getMonth() + 1;
    const tahun = waktuSekarang.getFullYear();
  
    tanggalEl.innerHTML = formatWaktu(hari) + '/' + formatWaktu(bulan) + '/' + tahun;
  }
  
  updateTanggal();
  