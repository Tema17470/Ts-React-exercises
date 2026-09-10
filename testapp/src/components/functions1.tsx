let result: number;
function sum (p1: number, p2: number){
  console.log("Function sum:")
  console.log(p1)
  console.log(p2)
  return p1 + p2
}

function handleClick1() {
  result = sum(5, 9);
  console.log(result);
}

function product (p1: number, p2: number){
  console.log("Function product:")
  console.log(p1)
  console.log(p2)
  return p1 * p2
}

function handleClick2() {
  result = product(5, 9);
  console.log(result);
}

function substraction (p1: number, p2: number){
  console.log("Function substraction:")
  console.log(p1)
  console.log(p2)
  return p1 - p2
}

function handleClick3() {
  result = substraction(5, 9);
  console.log(result);
}


