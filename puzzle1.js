const {readFileSync, promises: fsPromises} = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let arr = contents.split(/\r?\n/);
    arrNum = arr.map((x) => parseInt(x))
    let results = []
    let total = 0
    let highest = 0
    for (let i = 0; i < arrNum.length; i++) {
     
        if (arrNum[i]) {
            total = total + arrNum[i] 
        
        } else{
            if (total>highest){
                highest = total      
                total = 0
             }
        } 
    
    }
    console.log(highest)
    let sort = results.sort((a,b) => {
        return b-a
    })
    // find total score of the top 3
    let top3 = sort[0]+sort[1]+sort[2]
    
}


readFile('./puzzle1Data.txt')