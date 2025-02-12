function function1() {

    let nums = [];

    for (let _ = 0; _ < arguments.length; _++) {
        nums.push(arguments[_]);
        nums[_] *= 2;
    }

    return nums;
}

const function2 = function(p1, p2) {

    let result = [];
    let index = 0;
    for (let i = p1; i <= p2; i++) {
        result.push(i);
    }
    while (index < result.length) {
        if (result[index] % 2 == 0) {
            result.splice(index, 1);
        }
        index++
    }
    return result;

}



const function3 = (strArray) => {
    let shortestString = strArray[0];

    const currentString = strArray[0];

    if (currentString.length < shortestString.length) {
        shortestString = currentString;
    }

    return shortestString;

}