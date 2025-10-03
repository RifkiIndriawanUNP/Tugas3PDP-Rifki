// Mohammad Rifki Indriawan

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
