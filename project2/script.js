
function changeColor(){
    var hexColors = [
    '0','1','3','4','5','6','7','8','9','A','B','C','D','E','F'
    ];
    var hexcode = '';
    for(var i = 0; i<6; i++){
        var randomIndex = Math.floor(Math.random() * hexColors.length);

        hexcode += hexColors[randomIndex];

    }

    document.getElementById('hex-code').innerHTML = hexcode;
    document.getElementsByTagName('body')[0].style.background = '#' + hexcode;
    
}
