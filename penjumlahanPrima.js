// Mohammad Rifki Indriawan
/*2. Buatlah program untuk menghitung jumlah bilangan prima pada rentang
input awal sampai input akhir, misal
-input awal : 1 , input akhir : 12, maka outputnya adalah 2+3+5+7+11 = 28*/

let angka = 10
let tambah = 0

for(i=1;i<=angka;i++){
    let faktor = 0
    for(j=1;j<=i;j++){
        if(i%j===0){
            faktor++
        }
    }
    if(faktor === 2){
        console.log(i);
        tambah += i;
    }          
}
console.log("------- +");
console.log(tambah);