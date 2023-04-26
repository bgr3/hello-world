function duplicateCount(text){
  let t=text.toLowerCase().split('');
  let dublicates=[];
  let sorted=[];
  for (i=0; i<t.length; i++){
    if (t.indexOf(t[i],i+1)!=-1){
    dublicates.push(t[i]);
    }
    }
   for (let i=0; i<dublicates.length; i++) {
    if (sorted.includes(dublicates[i])) {
    }
    else sorted.push(dublicates[i]);
    }
  return sorted.length
    }
