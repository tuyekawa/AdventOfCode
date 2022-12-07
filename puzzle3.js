const {readFileSync} = require('fs');

const contents = readFileSync('./puzzle3Data.txt', 'utf-8').split(/\r?\n/);

function letterValue(letter) {
    if (/[a-z]/.test(letter)) {
        return letter.charCodeAt(0)-96
    } else {
        return letter.charCodeAt(0)-38
    }
}
   
const result = contents.map((value) => {
        const arr1 = [...value.slice(0, value.length/2)];
        const arr2 = [...value.slice(value.length/2)];

        let arrSet = new Set(arr1)
        const findCommon = arr2.filter((x) => arrSet.has(x))
        const common = [...new Set(findCommon)]
        
        return letterValue(common[0])

    })

    console.log(result.reduce((a,b) => a+b, 0))

//Part 2

function threeBags() {
    let sum = 0

    for (let i = 0; i < contents.length; i+=3) {
        const bags = [[...contents[i]], [...contents[i+1]], [...contents[i+2]]]

        let set = new Set(bags[0])
        let commonality = bags[1].filter((x) => set.has(x))

        set = new Set(commonality)
        commonality = bags[2].filter((x) => set.has(x))

        const removeDuplicates = [...new Set(commonality)]

        sum += letterValue(commonality[0])
    }
     console.log(sum)
}
    
threeBags()





