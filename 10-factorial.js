function fact(n){
  if(Number.isInteger(n)) {
  if (n === 0 || n === 1) return 1;
  return n * fact(n - 1);
  }else {
    return 1;
  }
}
const args = process.argv.slice(2);
let a = Number(args[0]);
console.log(fact(a));