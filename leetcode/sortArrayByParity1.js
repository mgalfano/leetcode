var sortArrayByParity = function(A) {
    var stuff = {'0': [], '1': []};

    for (var item of A) {
        stuff[item % 2].push(item);
    }

    return stuff['0'].concat(stuff['1']);
};

console.log(sortArrayByParity([3,1,2,4]));