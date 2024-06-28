//ULAYYA SALSABILA HELFIANDRI
class BankAccount {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposit(jumlah) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (jumlah > 0) {
                    this.saldo += jumlah;
                    resolve(`Saldo berhasil ditambahkan. Saldo baru Anda : ${this.saldo}`);
                } else {
                    reject('Jumlah yang dimasukkan tidak valid');
                    inputJumlah();
                }
            }, 1000);
        });
    }

    withdraw(jumlah) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (jumlah > 0 && jumlah <= this.saldo) {
                    this.saldo -= jumlah;
                    resolve(`Saldo berhasil dikurangi. Saldo baru Anda : ${this.saldo}`);
                } else if (jumlah > this.saldo) {
                    reject('Jumlah yang dimasukkan melebihi saldo.');
                    inputJumlah();
                } else {
                    reject('Jumlah yang dimasukkan tidak valid.');
                    inputJumlah();
                }
            }, 1000);
        });
    }
}

function inputJumlah () {
    const saldoAwal = new BankAccount(0); 

    const inputDeposit = parseFloat(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
    saldoAwal.deposit(inputDeposit)
        .then((result) => {
            console.log(result);
            const inputWithdraw = parseFloat(prompt("Masukkan jumlah saldo yang ingin dikurangkan:"));
            return saldoAwal.withdraw(inputWithdraw);
        })
        .then((result) => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
};

inputJumlah();
