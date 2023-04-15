
function countSmileys(arr) {
    function test(s) {
        let eyes=[':',';'];
        let nose=['-','~'];
        let smiling=[')','D'];
        let c=0;
        console.log(eyes.includes(s[0]));
        console.log(nose.includes(s[1])); 
        console.log(smiling.includes(s[2]));
        if ((eyes.includes(s[0]) && smiling.includes(s[1])) || (eyes.includes(s[0]) && nose.includes(s[1]) && smiling.includes(s[2]))) c++;
        return c
    }
    let x=arr.map(test);
    let count=x.reduce(function (sum, current) {
        return sum + current
    },0);
    return count
}
console.log(countSmileys([':)', ';(', ';}', ':-D', ":_D"]));
