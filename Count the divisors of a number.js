function getDivisorsCnt(n){
  let divisors = 0;
  for (let i = 1; i <= (n ** 0.5); i++) {
	  if (i * i == n) {
		  divisors ++;
    } else if (n % i == 0) {
      divisors += 2;
    }         
  }
  return divisors;
}
