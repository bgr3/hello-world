function longest(s1, s2) {
  let str=s1+s2;
  let sorted=[];
  for (let i=0; i<str.length; i++) {
    if (sorted.includes(str[i])) {
    }
    else sorted.push(str[i]);
  }
  sorted.sort();
  return sorted.join('')
}
a = "xyaabbbccccdefwtw"
b = "xxxxyyyyabklmoptq"
console.log(longest(a, b));

