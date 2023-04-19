function solution(number){
  var x=0
  for (let i=1; i<number; i++){
    if(i%3==0) {
      x += i;
      continue;
    }
    if(i%5==0) x += i;
  }
  return x
}
