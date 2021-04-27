// Promises allow errors to be passed down the chain 
// and handled in one common place without having to 
// put in layers of manual error
//  handling.like if condition met then furthur process will take place and if not then there will be error show


let p = new Promise((resolve,reject) =>{
    let a = 1+3;
    if (a == 2){
        resolve('success')
    }else{
        reject("failed")
    }

})


p.then((message)=>{
    console.log( 'this is in the' + message)
}).catch((message)=>{
    console.log("this is in the " + message)
})