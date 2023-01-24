const promise = new Promise((resolve,reject)=>
{
    const numero=Math.floor(Math.random()*10);
    setTimeout( ()=>(numero>5 ? resolve(numero) : reject(new Error("Menor a 5"))), 5000 );
});

promise.then(numero=>console.log(numero));
promise.catch(error=>console.error(error));