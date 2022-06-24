document.getElementById('deposit-button').addEventListener('click', function(){
 const depositInput=document.getElementById('deposit-input');
  depositValue=depositInput.value;
 
 const depositTaka=document.getElementById('deposit-taka');
 depositTaka.innerText=depositValue;
  depositInput.value='';
 

})