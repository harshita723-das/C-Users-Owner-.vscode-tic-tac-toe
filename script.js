let boxes = document.querySelectorAll(".click");
let msg = document.querySelector("#msg");
let msgcon = document.querySelector(".msgcon");
let reset = document.querySelector("#reset");


let turn = true;
const arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const resetgame = () =>{
    turn=true;
    enableBoxes();
    msgcon.classList.add("hide");

}

boxes.forEach ((box) => {
   box.addEventListener("click", () => {
    console.log("box is clicked");
    if(turn === true){
        box.innerText = "O";
        turn = false;
    }

    else {
        box.innerText ="X";
        turn = true;
   }
   box.disabled = true;

   winner();
});
}
);

const disableBoxes =() =>{
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes =() =>{
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}


 const shwinner = (win) => {
    msg.innerText = `Congratulations......Winner is ${win}`;
    msgcon.classList.remove("hide");
    disableBoxes(); 
 };

const winner = () => {
    for(let pattern of arr) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !="" && val2 !="" && val3 !="") {
            if(val1 === val2 && val2 === val3){
            shwinner(val1);
            return;
            }
            
            

        }
    }
     
    let allFilled = true;

    for(let box of boxes){
        if(box.innerText.trim() ===""){
            allFilled = false;
            break;
        }
    };
    
     if(allFilled === true){
        msg.innerText ="Game is draw";
        msgcon.classList.remove("hide");
        disableBoxes();

     }
}

reset.addEventListener("click", resetgame);