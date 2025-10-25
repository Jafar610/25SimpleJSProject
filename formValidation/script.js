function save(){
  var fname = document.getElementsByName('fname')[0].value;
  var lname = document.getElementsByName('lname')[0].value;

  var message = document.getElementById('message');
  

  if(fname ===''){
    message.innerHTML = 'First Name cannot be empty';
    message.style.color = 'red';
    document.getElementById('input1').style.border = '1px solid red';
  }
  else if(lname === '') {
    message.innerHTML = 'Last Name cannot be empty';
    message.style.color = 'red';
    document.getElementById('input2').style.border = '1px solid red';
    
  }
  else{
   alert('Data submited successfully');
  }
  
}

