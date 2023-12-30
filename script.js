let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let main = document.querySelector(".main");
let trunO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos2Val != ""){
            if(pos1Val === pos2Val && pos2Val=== pos3Val){
                document.querySelector(".main").style.opacity = 0.2;
                document.querySelector(".winner").innerHTML = "Winner is " + pos1Val + "!";
                document.querySelector(".winner").style.display = "block";
                for(let box of boxes){
                    box.disabled = true;
                }
            }
        }
    }
}

const checkDraw = () =>{
    let count = 0;
    for(let box of boxes){
        if(box.innerText != ""){
            count++;
        }
    }
    if(count === 9){
        document.querySelector(".main").style.opacity = 0.2;
        document.querySelector(".winner").innerHTML = "It's a Draw!";
        document.querySelector(".winner").style.display = "block";
    }
}

const resetGame = () => {
    document.querySelector(".main").style.opacity = 1;
    document.querySelector(".winner").style.display = "none";
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
    trunO = true;
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(trunO === true){
            box.innerHTML = "O";
            trunO = false;
        }
        else{
            box.innerHTML = "X";
            trunO = true;
        }
        box.disabled = true;
        checkDraw();
        checkWinner();
    })
    
})

reset.addEventListener("click", resetGame);

