const args = process.argv.slice(2);
function add(a, b) {
  return a + b;
};
c = Number(args[0]);
d = Number(args[1])
if (!isNaN(c) && !isNaN(d)) {
  let result = add(c,d);
  console.log(result);
}else{
  console.log(NaN);
}