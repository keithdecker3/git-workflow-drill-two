const nameArray = [
  {
    Keith: 30,
    Alyssa: 26
  }
]

const numberArray = [1,2,3,4] 

function multiplyNumbers(array) {
  return array.reduce((total, number) => total * number)
}

