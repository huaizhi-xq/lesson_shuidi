/**
 * 
 * @param {Array length even} candies 
 * @return {number} count 
 */

var distributeCandies = (candies) => {
    let count = 0;
    // 1.种类数，unique 
    let obj = {} //对象字面量 json key value 
    // candies.forEach(item => {
    //      console.log(item);

    // })

    for (let item of candies) {  // for ( fo)
        // console.log(item);
        if (!obj[item]) {
            obj[item] = 1;
            count++;
        }
    }
    // if (count > candies.length / 2) {
    //     return candies.length / 2;
    // } else {
    //     return count;
    // }
// 除以2 == 右移 1位
    return (count>=candies.length >> 1) ? candies.length >> 1 : count; 
    // console.log(count);
    // return count;
}

console.log(distributeCandies([1,1,2,2,3,3]));
