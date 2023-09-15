let money = document.getElementById('money');
let dollar = document.getElementById('dollar');
let pound = document.getElementById('pound');
money.appendChild(dollar);
dollar.style.margin='2px'
dollar.style.padding='2px'
dollar.style.border='2px solid red'
pound.style.padding='2px'
pound.style.margin='2px'
pound.style.border='2px solid red'
money.appendChild(pound);

dollar.onkeyup=function(){
    pound.value=dollar.value*30.91
};
pound.onkeyup=function(){
    dollar.value=pound.value/30.91
};