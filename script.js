let User = prompt("Enter stone, paper, sisor")
let ComputerI = Math.floor(Math.random() * 3)
let Computer =["stone","paper","sisor"][ComputerI]

// console.log(Computer)
const match =(Computer,User)=>{
    if(Computer==User){
        return "Nobody, Match is tie"
    }
    else if(Computer === "stone" && User === "paper"){
        return "Computer"
    }
    else if(Computer === "stone" && User === "sisor"){
        return "User"
    }
    else if(Computer === "sisor" && User === "paper"){
        return "Computer"
    }
    else if(Computer === "sisor" && User === "stone"){
        return "Computer"
    }
    else if(Computer === "paper" && User === "stone"){
        return "User"
    }
    else if(Computer === "paper" && User === "sisor"){
        return "User"
    }
}
let result = match(Computer,User)
document.getElementById("Result").innerHTML = "Winner is =" + result
document.getElementById("Computer").innerHTML = `Computer = ${Computer}`
document.getElementById("User").innerHTML = `User = ${User}`
