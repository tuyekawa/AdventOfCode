const {readFileSync} = require('fs');

const contents = readFileSync('./puzzle6Data.txt', 'utf-8').replace(/\r/g, "").trim();
//check if no duplicates
function unique(array) {
    return new Set(array).size === array.length
}

function part1() {
    let window = []
        for (let i = 0; i < contents.length; i++) {
            window.push(contents[i])
            if (window.length > 4) {
                window.shift()
            }
            if (window.length === 4 && unique(window)) {
                console.log(i+1)
                break
            }
        }
}

function part2() {
        let window2 = []
            for (let i = 0; i < contents.length; i++) {
                window2.push(contents[i])
                if (window2.length > 14) {
                    window2.shift()
                }
                if (window2.length === 14 && unique(window2)) {
                    console.log(i+1)
                    break
                }
            }
    }

part1()
part2()