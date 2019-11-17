// Create Phone Number
// 编写一个函数 10个整数组成的数组(Array [0-9]) ,
// 返回这些数字的格式 (123)456-7890
// join 数组 => 字符串
const createPhoneNumber = (digits) => {
    //es6模板字符串 (输出html有优势)
    // return `(${digits[0]}${digits[1]}${digits[2]})${digits[3]}${digits[4]}${digits[5]}${digits[6]}-${digits[7]}${digits[8]}${digits[9]}` 
    return `(${digits.slice(0,3).join('')})${digits.slice(3,6).join('')}-${digits.slice(6,10).join('')}`;
    // return `(${digits.splice(0,3).join('')})${digits.splice(0,3).join('')}-${digits.splice(0,4).join('')}`; //splice 会改变原来的数组
    // return '(' + digits[0] + digits[1] +digits[2] + ')' + digits[3] + digits[4] + digits[5] + digits[6] 
    // + '-' + digits[7] + digits[8] + digits[9]; 
}
console.log(createPhoneNumber([1,2,3,4,5,6,7,8,9,0]));
// (123)456-7890 