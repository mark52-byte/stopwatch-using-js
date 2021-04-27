function makeRequest(location){

    return new Promise(( resolve ,reject)=>{
        console.log(`making request to ${location}`)
        if (location == "Google"){
            resolve(' google is there')
        }else{
            reject("only google will be accept not" + " " + location)
        }

    })
}

// " here response is the just string or variable that is passed 
// as a param in resolved()


function processRequest(response){
    return new Promise((resolve,reject)=>{
        console.log("proccessing request...")
        resolve(`Extra informstion  + ${response}`)

    })
}


// here makeRequest has Google param so thats why it called here
makeRequest('lkfnid').then((response)=>{
    console.log(" hey connecting...")

    return processRequest(response)

}).then(processedResponse=>{
    console.log(processedResponse)
}).catch(response=>{
    console.log(response)
})