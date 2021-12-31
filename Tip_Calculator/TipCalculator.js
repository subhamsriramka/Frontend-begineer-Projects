function calculateTip()
{
    var totalAmount=document.getElementById('billAmount').value;
    var qualityOfService=document.getElementById('qualityService').value;
    var numOfPeople=document.getElementById('numPeople').value;

    if(totalAmount === '')
    alert('Please enter the total bill amount');
    else if(numOfPeople === '')
    alert('Please put in the number of people');
    else{
        var tipPerson=Math.round(totalAmount*qualityOfService)/numOfPeople;
        document.getElementById('resultAmount').innerHTML="Tip amount: <br>"+"$"+tipPerson+"per person";
    }
}