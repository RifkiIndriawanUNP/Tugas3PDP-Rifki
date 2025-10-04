// Mohammad Rifki Indriawan
/*1. Buatlah program untuk menampilkan output bilangan prima setelah input
bilangan tertentu! misal
-input = 13, maka outputnya adalah 17
-input = 8, maka outputnya adalah 11 */

function prima(n){
    let faktor = 0
    for(i=1;i <= n; i++){
        if(n%i === 0){
            faktor++
        }
    }
    if(faktor===2){
        console.log(n)
    }
    else{
        prima(n + 1)
    }
}

prima(25)
