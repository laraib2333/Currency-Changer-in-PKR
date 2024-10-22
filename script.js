function calculateCurrency(){
    let  US_dollars = document.getElementById('US-dollars').value;
    let Saudi_Riyal = document.getElementById('Saudi-Riyal').value;
    const US_dollars_rate = 104.80; 
    const Saudi_Riyal_rate = 28;   
    const totalPKR = (US_dollars * US_dollars_rate) + (Saudi_Riyal * Saudi_Riyal_rate);
    document.getElementById('message').innerHTML = 
    `Total currency in PKR: ${totalPKR.toFixed(2)}`;
}
function reset(){

    document.getElementById('US-dollars').value = "";
    document.getElementById('Saudi-Riyal').value= "";
    document.getElementById('message').innerText = "";
    }
