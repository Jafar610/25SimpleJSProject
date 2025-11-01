const input = document.getElementById('input');
let experission = '';
function press(num){
    experission += num;
    input.value = experission;
}
function isEqual(){
    input.value = eval(experission)
    experission = ' ';
}
function erase(){
    input.value = " "
}
