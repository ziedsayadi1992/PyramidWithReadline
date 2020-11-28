const readline = require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question("Salut, bienvenue dans ma super pyramide ! Combien d'étages voulez-vous ? \n",
userInput=>{
    
    if(userInput.trim()<0 || userInput.trim()>24){
       rl.setPrompt("il faut que vous entrer un numero entre 1 et 24 essayer de nouveau s'il vous plaît \n")
       rl.prompt();
       rl.on('line',(userInput)=>{
        if(userInput.trim()>0 && userInput.trim()<24){
        console.log("Bravo !! , voici votre beau pyramide")
        for(let i =0 ;i<=userInput;i++){
        let result=''
        for(let j = 0 ;j<=userInput-i;j++){
            result+=' '
        }
        for(let k=0 ;k<=i ;k++){
            result+="# "
        }
      console.log(result)  
    
    }
    rl.close()
    }
        else{
            rl.setPrompt(`Votre entrer ${userInput} n'est pas un numero qui est entre 1 et 24 essayez encore ?\n`)
            rl.prompt()
        }
        
       })
    }    
})

rl.on('close',()=>{
    console.log('\n Merci pour vous a bientôt !!!!!')
})


