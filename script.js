let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")
const userscorepara=document.querySelector("#user-score")
const compscorePara=document.querySelector("#comp-score")

const genCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randidx=Math.floor(Math.random()*3)
    return options[randidx]

}

const drawgame=()=>{
    console.log("game was draw")
    msg.innerText="Game was Draw.Play again"
    msg.style.backgroundColor="green"

}

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++
        userscorepara.innerText=userScore;
        console.log("you win!")
        msg.innerText=`You win.your choice ${userchoice} beats ${compchoice}`
        msg.style.backgroundColor="green"
    }
    else{
        compScore++
        compscorePara.innerText=compScore
        console.log("you lose")
        msg.innerText=`You lose.computer choice ${compchoice} beats ${userchoice}`
        msg.style.backgroundColor="red"
    }
}

const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice)
    const compchoice=genCompChoice()
    console.log("comp choice=",compchoice)

    if(userchoice===compchoice){
        //draw game
        drawgame();
    }
    else{
        let userwin=true;
        if(userchoice=="rock"){
            userwin = compchoice==="paper"?false:true
        }
        else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true
        }
        else{
           userwin= compchoice==="rock"?false:true
        }
        showwinner(userwin,userchoice,compchoice)
    }

}
choices.forEach((choice)=>{
    console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id") 
        console.log("Choice was clicked",userchoice)
        playgame(userchoice)

    })
})