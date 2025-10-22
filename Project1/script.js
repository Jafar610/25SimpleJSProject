var index = 0;
function changeBackground(){
   var colors = [
        'red',
        'blue',
        'green',
        'purple',
        'black',
        'pink',
        'lightblue'
    ];
    

    document.getElementsByTagName('body')[0].style.background = colors[index ++];
    if(index > colors.length - 1){
        index = 0;
    }
    
}
