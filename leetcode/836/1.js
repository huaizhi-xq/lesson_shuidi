/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
 return !(
   rec1[2] <= rec2[0] ||  //left
   rec1[3] <= rec2[1] || //bottom
   rec2[2] <= rec1[0] || //right
   rec2[3] <= rec1[1]     //top
 )
};
// [5,15,8,18]
// [0,3,7,9]
var rec1 = [7,8,13,15], rec2 = [10,8,12,20]
console.log(isRectangleOverlap(rec1,rec2))