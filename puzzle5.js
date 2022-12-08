const {readFileSync} = require('fs');

const contents = readFileSync('./puzzle5Data.txt', 'utf-8').split(/\r?\n/);

const blocks = contents.slice(0,9)
const instructions = contents.slice(10)

const parsedBlock = blocks.map((line) => [...line].filter((value, index) => index % 4 ===1))

const indexes = parsedBlock.pop();

const stacks = {}

for (const line of parsedBlock) {
    for (let i = 0; i < line.length; i++) {
        if(line[i] !== ' ') {
            if(!stacks[indexes[i]]) {
                stacks[indexes[i]]= []
            }
            stacks[indexes[i]].unshift(line[i])
        }
    }
}

const moves = instructions.map((move) => {
    const nums = move.split(' ')
    return {
        count: parseInt(nums[1]),
        from: parseInt(nums[3]),
        to: parseInt(nums[nums.length-1])
    }
})

function moveBlocks(stacks, move) {
    
}

function part1() {
    const duplicate = JSON.parse(JSON.stringify(stacks))
    for (const move of moves) {
        for (let i = 0; i < move.count; i++) {
            const crate = duplicate[move.from].pop()
            duplicate[move.to].push(crate)
        }
    }
    console.log(indexes.map((value) => {
        const stack = duplicate[value]
        return stack[stack.length-1]
    }).join('')
    )
}

function part2() {
    const duplicate = JSON.parse(JSON.stringify(stacks))
    for (const move of moves) {
            const crate = duplicate[move.from].splice(-move.count, move.count)
            duplicate[move.to] = duplicate[move.to].concat(crate)
        }
    console.log(indexes.map((value) => {
        const stack = duplicate[value]
        return stack[stack.length-1]
    }).join('')
    )
}

part1()
part2()