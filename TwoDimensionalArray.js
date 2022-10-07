/* var newArray = [['rezwan',31],['rahim',01],['rupak',14]];
console.log(newArray[0][0]) */
function highestRunScorer(playersInfo){
    var highestRun = 0;
    var highestPlayerName = " ";
    for(var i = 0; i < playersInfo.length; i++){
        for(var x = 0; x < playersInfo[0].length; x++){
           
            if(highestRun < playersInfo[i][x]){
                highestRun = playersInfo[i][x];
                highestPlayerName = playersInfo[i][0];
                
            }
        }

        return highestPlayerName;

       
    }
}
var playersInfo =  [["rezwan",31],["rahim",06],["rupak",30]];
var callFunction = highestRunScorer(playersInfo);
console.log(callFunction);