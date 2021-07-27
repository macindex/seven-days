// initial data
let square = {
    a1: '', a2: '',a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''

};

let turn = '';
let warning = '';
let playing = false;
    
reset();
// Events
document.querySelector('.reset').addEventListener('click', reset);
document.querySelector('.item').array.forEach(item => {
    item.addEventListener('click', itemClick)
});


// Functions
function itemClick(event){
    
}

function reset(){
    warning= '';

    let random = Math.floor(Math.random() * 2);
    player = (random === 0) ? 'x' : 'o';

    for(leti in square){
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
}
function renderInfor(){
    document.querySelector('.vez').innerHTML = player;
    document.querySelector('.resultado').innerHTML = warning;
}



