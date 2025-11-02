const userInput = document.getElementById('userInput');
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');

pencil.addEventListener('click', function(){
    allItems.innerHTML = '';
})

userInput.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        addItems();
    }
})

function addItems(){
    var h2 = document.createElement('h2');
    h2.innerHTML = "- " + userInput.value;
    h2.insertAdjacentElement('beforeend', h2)
    h2.addEventListener('click', function(){
        h2.style.textDecoration = 'line-through';
    })
    userInput.value='';
}
