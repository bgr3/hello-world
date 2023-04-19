function comp(array1, array2){
  if (array1==null || array2==null) return false
  else {
  let isEqual=array1.sort().toString()==array2.map(Math.sqrt).sort().toString()
  return isEqual
  }
}
