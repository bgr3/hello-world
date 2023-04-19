function duplicateEncode(word){
  var word=word.toLowerCase().split('');
    var t=[];
    for (i=0; i<word.length; i++){
      if (word.indexOf(word[i],i+1)!=-1){
      t.push(')');
      }
      else if (i==0){
      t.push('(')
      }
      else if (word.lastIndexOf(word[i],i-1)!=-1) {
      t.push(')');
      }
      else {
      t.push('(');
      }
    }
    var d=t.join('');
    return d;
}
