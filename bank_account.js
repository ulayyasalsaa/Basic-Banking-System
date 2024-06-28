//ULAYYA SALSABILA HELFIANDRI
let saldo = 0;

function tambahSaldo() {
    let jumlah = prompt("Masukkan jumlah saldo yang ingin ditambahkan:", "0");
    jumlah = parseFloat(jumlah);

    if (jumlah > 0) {
        saldo = saldo + jumlah;
        alert("Saldo berhasil ditambahkan. Saldo baru Anda: " + saldo);
    } else {
        alert("Jumlah yang dimasukkan tidak valid. Silakan coba lagi.");
    }
}

function kurangiSaldo() {
    let jumlah = prompt("Masukkan jumlah saldo yang ingin dikurangi:", "0");
    jumlah = parseFloat(jumlah);

    if (jumlah > 0 && jumlah <= saldo) {
        saldo = saldo - jumlah;
        alert("Saldo berhasil dikurangi. Saldo baru Anda: " + saldo);
    } else {
        alert("Jumlah yang dimasukkan tidak valid. Silakan coba lagi.");
    }
}

window.onload = function () {
    alert("Saldo awal Anda: " + saldo);

    tambahSaldo(); // Panggil fungsi untuk menambah saldo
    kurangiSaldo(); // Panggil fungsi untuk mengurangi saldo
};