const args = process.argv.slice(2);
let a = Number(args[0]);
if (!Number.isInteger(a)) {
  console.log("Missing size"); 
}else{
  for (let i = 0; i < a; i++) {
    console.log("X".repeat(a));
  }
}