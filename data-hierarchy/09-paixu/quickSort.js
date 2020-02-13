function quick(arr) {
    if (arr.length <= 1) return arr;
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr.splice(pivotIndex, 1)[0]
        // 借助变量
    let left = []
    let right = []
    arr.forEach(item => {
        if (item < pivot) {
            left.push(item)
        } else {
            right.push(item)
        }
    })
    return quick(left).concat([pivot], quick(right))
}

var arr = [1, 5, 9, 8, 3, 1, 5, 7]
console.log(quick(arr))