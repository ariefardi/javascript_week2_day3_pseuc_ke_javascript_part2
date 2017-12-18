var total = 0
for(var index=1; index < 101; index=index+1){
  if (index%2===1) {
    console.log(total+index);
  }
  else {
    if (index%2===0) {
      console.log(total-index);
    }
  }
}
console.log('TOTAL '+total);
