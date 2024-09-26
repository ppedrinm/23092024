let ele = parseInt(prompt("Quantos elefantes: "))

let i = 1

for(i = 1; i <= ele; i++){
    if(i == 1){
        console.log(i + " Elefante Incomoda muita gente, " + (i+1) + " Elefante Incomoda muito mais. ")
        
    }else{
    console.log(i + " Elefantes Incomodam muita gente, " + (i+1) + " Elefantes Incomodam muito mais. ")
    }
}