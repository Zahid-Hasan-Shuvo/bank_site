document.getElementById('deposit-button').addEventListener('click', function(){
 const depositInput=document.getElementById('deposit-input');
   const CurrentDepositValue=parseFloat(depositInput.value);
 
   const mainValue=document.getElementById('deposit-taka')
    const previousTaka=mainValue.innerText;

   const previousValue=parseFloat(previousTaka);


   const updateValue= CurrentDepositValue+previousValue;

   mainValue.innerText=updateValue;
   

//for balance

    const mainBalance=document.getElementById('balance-total');
     const previousTakaMainBalance=mainBalance.innerText;
 
    const previousValueBalance=parseFloat(previousTakaMainBalance);
 
 
    const updateValueBalance= CurrentDepositValue+previousValueBalance;
 
    mainBalance.innerText=updateValueBalance;
   
//  update money balance

  depositInput.value='';



})


// withdraw balance


document.getElementById('withdraw-button').addEventListener('click',function(){
  

  const withdreawInput=document.getElementById('withdraw-input');
  const currentInput= parseFloat(withdreawInput.value) ;


  const withdrawTaka= document.getElementById('withdraw-taka')
   const withdrawTakaText= withdrawTaka.innerText;
   const withdrawTakabalance=parseFloat(withdrawTakaText);

   const mainBalanceabc= withdrawTakabalance+currentInput;

   withdrawTaka.innerText=mainBalanceabc;
   ////////////////////////////

    const balanceUpdated=document.getElementById('balance-total')
    const balanceTakaParse=parseFloat(balanceUpdated.innerText);

    CurrentMainBalanceabc=balanceTakaParse-currentInput;

    balanceUpdated.innerText=CurrentMainBalanceabc;



   withdreawInput.value='';


})