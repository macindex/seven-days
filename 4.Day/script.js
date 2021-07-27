// initial data
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''

};

let turn = '';
let warning = '';
let playing = false;
    
reset();
// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
});


// Functions
function itemClick(event){
    let item = event.target.getAttribute('data-item');
    // console.log("clicou em", item)
    if(square[item] === ''){
        square[item] = player;
        renderSquare();
        
    }
}

function reset(){
    warning = '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';

    for(let i in square){
        square[i] = '';
    }
    playing = true;

    renderSquare();
    renderInfor();

}
function renderSquare(){
    for(let i in square){
        let item = document.querySelector(`div[data-item=${i}]`);
        item.innerHTML = square[i];
    }
    checkGame();
}
function renderInfor(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}

function togglePlayer(){
    player = (player === 'x') ? 'o' : 'x';
    renderInfor();
}

function checkGame(){
    if(checkWinnerFor('x')){
        warning = 'O "x" venceu';
        playing = false;
    }else if(checkWinnerFor('o')){
        warning = 'O "o" venceu';
        playing = false;
    }else if(isFull()){
        warning = 'Deu empate';
        playing = false;
    }

}

