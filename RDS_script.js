console.log("Hello World");

let humanScore=0

let computerScore=0

//let ch=getComputerChoice()

//let hch=getHumanChoice()

//console.log(getComputerChoice());

//console.log(getHumanChoice())

//console.log(playRound(hch,ch))

console.log(playGame())

function getComputerChoice() {

let x=Math.random()

let choice=" "



if (x<=0.33) {

choice="R"

}

else if (x>0.33 && x<=0.66) {

    choice = "P"
}


else {

    choice= "S"

}

console.log(choice);

return choice

}

function getHumanChoice() {

let hchoice= prompt("Press 'P' for paper, 'R' for Rock and 'S' for Scissors ")

while (hchoice !== "P" && hchoice !== "R" && hchoice!== "S" ) {

    hchoice= prompt("**Invalid Character** \n Press 'P' for paper, 'R' for Rock and 'S' for Scissors ")
    
    
}

console.log(hchoice) 

return hchoice


}


function playRound() {


  
     let ch=getComputerChoice()

     let hch=getHumanChoice()



    if (hch=="P"&&ch=="R" || hch=="R" && ch=="S"|| hch=="S"&& ch=="P") {
  

        console.log("You won!")

        humanScore+=1

        

    }
 
    else if (ch=="P"&&hch=="R" || ch=="R" && hch=="S"|| ch=="S"&& hch=="P") {

     console.log("You lost :(")

        computerScore+=1



    }


    else {


         console.log("Tie")

    }
   
    


}


function playGame() {

 for (let i=0; i<5; i++) {

  console.log(playRound()) 

 }

 function result(){

   if (humanScore>computerScore){

     console.log("You Won!!")

   }

   else if (computerScore>humanScore) {
   
     console.log("You Lost :(")
     
   }
   
   else {
    
    console.log("Tie")

   }
   

 }

  console.log("The final score is " ,humanScore, "-", computerScore, result())

}