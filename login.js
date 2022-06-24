 const submit=document.getElementById('button-submit').addEventListener('click', function(){
const emailField=document.getElementById('email-input').value;
const passwordField=document.getElementById('password-input').value;
if(emailField=='shuvo.cse6.bu@gmail.com' && passwordField==12345){
  window.location.replace('banking.html');
}
else
console.log('wrong password!');

})