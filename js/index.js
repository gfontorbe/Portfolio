//Get modals
var modals = document.querySelectorAll('.modal');

//Get cards
var cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener("click",()=>openModal(card.id));
});
//Get close buttons
var buttons = document.querySelectorAll('.modal-title>button');
console.log(buttons);

buttons.forEach(button => {
    button.addEventListener("click", (event)=>{
        event.target.parentElement.parentElement.parentElement.parentElement.style.display = "none";
    })
});

function openModal(Id){
    let name = Id.replace('Card','Modal');
    let modal = document.getElementById(name);
    
    modal.style.display = "flex";
}

window.onclick = function(event){
    if(event.target.className.indexOf('modal') != -1 && event.target.className.indexOf('modal-') == -1){
        event.target.style.display = "none";
    }
}