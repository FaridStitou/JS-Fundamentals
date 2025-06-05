const args = process.argv.slice(2);
let a = Number(args[0]);
const fact = n =>{ 
  if (n < 0) return undefined;
  else if (n === 0 || n === 1) return 1; 
  return n * fact(n - 1); // Recursive case
}
if (Number.isInteger(a)) {  
  console.log(fact(a));
}else{
  console.log(NaN);
}


