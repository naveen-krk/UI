let players = ["Duplessie","Dhoni", "raina", "Jadeja","Bravo","Watson","Naveen","Kane Willamson","Natrajan","Dale Styne","Rashid Khan"];
console.log(players +"Total Players: "+ players.length)
players.shift();
//players.pop()
console.log(players +"Total Players: "+ players.length)
//players.push("Ben Stokes")
players.unshift("Ben Stokes")
console.log(players +"Total Players: "+ players.length)
players=players.map(players=>players.toLowerCase())
console.log("sort"+players.sort())
console.log(players)
playersObj={}
i=1
arr=[]
while(i!=0){
    if(arr.length==11){
        break;
    }
    tempnum=Math.floor(Math.random() * 100) + 1
    if(arr.indexOf(tempnum)==-1){
        arr.push(tempnum)
    }
}
for(let temp in players){
    playersObj[arr[temp]]=players[temp].toUpperCase();
}
 players=[]
 players.push(playersObj)
 console.log(players)