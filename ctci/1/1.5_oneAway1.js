// 1.5: One Away

var oneAway = function(str1, str2) {
    let obj1 = {};
    let obj2 = {};
    for (let i = 0; i < str1.length; i++) {
        obj1[str1[i]] ? obj1[str1[i]]++ : obj1[str1[i]] = 1;
    }
    for (let i = 0; i < str2.length; i++) {
        obj2[str2[i]] ? obj2[str2[i]]++ : obj2[str2[i]] = 1;
    }
    
    for (var prop in obj1) {
        if (obj1[prop] === obj2[prop]) {
            delete obj1[prop];
            delete obj2[prop];
        }
    }

    if (Object.keys(obj1).length <= 1 && Object.keys(obj2).length <= 1) {
        return true;
    } else {
        return false;
    }
};

console.log(oneAway('pale', 'ple')); // true
console.log(oneAway('pales', 'pale')); // true
console.log(oneAway('pale', 'bale')); // true
console.log(oneAway('pale', 'bake')); // false
console.log(oneAway('pppdd', 'ppdddd')); // false