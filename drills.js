// 1.
//   a. Constant time 0(1). No matter the size of your input, the algorithm will take the same amount of time to complete.
//   b. This would be liner time 0(n) with a FOR loop
// 2. Constant time 0(1). No matter the size of your input, the algorithm will take the same amount of time to complete.
// 3. Polynomial time O(n^k). Polynomial time complexity is with nested loops.
// 4. Liner time 0(n). A FOR loop that alters the data once.
// 5. Liner time 0(n). A FOR loop that alters the data once.
// 6. Polynomial time O(n^k). Polynomial time complexity is with nested loops.
// 7. The function does the Fibonacci sequence out to a certain length. Liner time 0(n).
// 8. Logarithmic time O(log(n)). It cuts the problem size in half each round through.
// 9. Constant time 0(1). No matter the size of your input, the algorithm will take the same amount of time to complete.
// 10. The function check is a number is greater than 2 or is a whole number, then checks if it's a PRIME number. Liner time 0(n). 
// 11. 
let towerOfHanoi = {
    firstTower: [],
    secondTower: [],
    thirdTower: [],
  }
let ticks = 0
  
function setUpTower(discNum){
    for(let i = discNum; i > 0; i --){
      towerOfHanoi.firstTower.push(i)
    }
    console.log(towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
    
    moveDiscs(discNum, towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
    
    function moveDiscs(discNum, firstTower, secondTower, thirdTower){
      ticks ++;
      if(discNum > 0){
        moveDiscs(discNum - 1, firstTower, thirdTower, secondTower)
        let movingDisc = firstTower.pop()
        thirdTower.push(movingDisc)
        console.log(towerOfHanoi.firstTower, towerOfHanoi.secondTower, towerOfHanoi.thirdTower)
        moveDiscs(discNum - 1, secondTower, firstTower, thirdTower)
      }
    }
  }
setUpTower(4)
console.log(ticks)
//   c. [ 5, 4 ] [] [ 3, 2, 1 ]
//   d. 15, 30 and 60
//   e. Polynomial time O(n^k).
// 12 - 14
function countingSheep(input){
    let output = ''
    for(let i = input; i >= 0; i --){
      if(i === 0){output += 'All the sheep jumped over the fence.'}
      else{output += (`${i}: Another sheep jumped over the fence. `)}
    }
    return output
}
console.log(countingSheep(3))


function powerCalculator(base, exponent){
let output = base
for(let i = 1; i < exponent; i ++){
    output *= base
}
return output
}
console.log(powerCalculator(3, 4))


function stringReverser(string){
let reversed = ''
for(let i = string.length - 1; i >= 0; i --){
    reversed += string[i]
}
return reversed
}
console.log(stringReverser('internet'))



function triangularNumber(num){
let returnNum = 0
for(let i = num; i > 0; i --){
    returnNum += i
}
return returnNum
}
console.log(triangularNumber(5))


function stringSplitter(string, split){
let returnArr = []
let currentString = ''
for(let i = 0; i <= string.length; i ++){
    if(string[i] == split || i  === string.length){
    returnArr.push(currentString);
    currentString = ''
    } else {
    currentString += string[i]
    }
} return returnArr
}
console.log(stringSplitter('02/10/1991', '/'))



function fibonacci(num){
let fibonacciArray = [1, 1]
for(let i = 0; i < num - 2; i ++){
    let newFib = fibonacciArray[i] + fibonacciArray[i + 1]
    fibonacciArray.push(newFib)
} return fibonacciArray
}
console.log(fibonacci(10))


function factorial(num){
let returnNum = num
for(let i = num - 1; i > 0; i --){
    returnNum *= i
} return returnNum
}
console.log(factorial(5))

// 13 - 14
// Both are Liner time 0(n) because they iterate through once