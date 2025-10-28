
let div = document.getElementById('divider');
div.innerHTML = `
    <div class = 'cards'>
        <h1>Cards</h1>
        <h2>Title of Card</h2>
        <p>hello world how its going? Everything is good. In this world you should not trust any one b/c every person needs you until he or she gate something this is true. so don't bleave any person.</p>
        <button class='btn' onClick = 'message()'>Agree</button>
    </div>
`
div.appendChild();

function message(){
    alert("Thanks for your time!! ")
}