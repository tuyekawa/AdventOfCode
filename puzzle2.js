const {readFileSync, promises: fsPromises} = require('fs');

function readFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    let arr = contents.split(/\r?\n/); //data leaves a space between index 0 and 2
    //Column 1: A - Rock, B - Paper, C - Scissors
    //Column 2: X - Rock, Y - Paper, Z - Scissors
    //Scoring: 1 - Rock, 2 - Paper, 3 - Scissors
    //Outcome: 0 - Loss, 3 - Draw, 6 - Win
    //Score = Chosen + Outcome 

    //Chosen Score
    let chosenScore = 0;
    let outcomeScore = 0;
    let totalScore = 0;

   
    for (var i = 0; i < arr.length; i++) {
        if (arr[i][2] === 'X') {
            chosenScore += 1
        } else if (arr[i][2] === 'Y') {
            chosenScore += 2
        } else {
            chosenScore += 3
        }
    }
      
    //Outcome Score 
    for (var i = 0; i < arr.length; i++) {
        //if opponent loses, you win
        if (arr[i][0] === 'A' && arr[i][2] === 'Y' || arr[i][0] === 'B' && arr[i][2] === 'Z' || arr[i][0] === 'C' && arr[i][2] === 'X') {
            outcomeScore += 6
        } else if (arr[i][0] === 'A' && arr[i][2] === 'X' || arr[i][0] === 'B' && arr[i][2] === 'Y' || arr[i][0] === 'C' && arr[i][2] === 'Z') {// if Draw
            outcomeScore += 3
        } else {
            outcomeScore = outcomeScore
        }
    }

    //Final Score is both added together
    totalScore = chosenScore + outcomeScore

    console.log(totalScore)

    //Part 2: The 2nd column is not the choice, but the outcome that needs to happen
    //Column 1: A - Rock, B - Paper, C - Scissors
    //Column 2: X - Lose, Y - Draw, Z - Win
    //Scoring: 1 - Rock, 2 - Paper, 3 - Scissors
    //Outcome: 0 - Loss, 3 - Draw, 6 - Win
    let result = 0

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][2] === 'Y' && arr[i][0] === 'A') {
            result += 4
        } else if (arr[i][2] === 'Y' && arr[i][0] === 'B') {
            result += 5
        } else if (arr[i][2] === 'Y' && arr[i][0] === 'C') {
            result += 6
        } else if (arr[i][2] === 'X' && arr[i][0] === 'A') {
            result += 3
        } else if (arr[i][2] === 'X' && arr[i][0] === 'B') {
            result += 1
        } else if (arr[i][2] === 'X' && arr[i][0] === 'C') {
            result += 2
        } else if (arr[i][2] === 'Z' && arr[i][0] === 'A') {
            result += 8
        } else if (arr[i][2] === 'Z' && arr[i][0] === 'B') {
            result += 9
        } else {
            result +=7
        }
    }

    console.log(result)
}

readFile('./puzzle2Data.txt')
