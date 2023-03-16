function displayNumber(){
    i=1;
    while(i<=100){
        console.log(i);
        i++;
    }
}
function displayDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth()+1; 
    var year =date.getFullYear();
if(day<10) 
{
    day='0'+day;
} 
if(month<10) 
{
    month='0'+month;
} 
today = day+'/'+month+'/'+year;
console.log(today);
}

function fahrenheit(celcius){
    return 9/5*celcius +32;
}

function average(num){
    numRes =num.reduce((prevVal,Val) => prevVal+Val)/num.length;
    return numRes
}
function stringReverse(str) {
    return str.split("").reverse().join("");
}

displayDate()
displayNumber()
console.log(fahrenheit(36))
num=[1,2,3,4,12,4,12,5,3,21,1]
console.log(average(num))
console.log(stringReverse("naveen karthik"))
