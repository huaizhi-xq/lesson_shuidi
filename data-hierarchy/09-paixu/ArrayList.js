function ArrayList() {
    this.array = [];

    ArrayList.prototype.insert = function(item) {
        this.array.push(item)
    }

    ArrayList.prototype.toString = function() {
        return this.array.join('-')
    }


    ArrayList.prototype.swap = function(i, j) {
        var temp = this.array[i];
        this.array[i] = this.array[j];
        this.array[j] = temp;
    }

    // 冒泡
    ArrayList.prototype.bubblesolt = function() {
        var length = this.array.length;

        for (var i = 0; i < length - 1; i++) {
            for (var j = i + 1; j < length; j++) {
                if (this.array[i] > this.array[j]) {
                    this.swap(i, j)
                }
            }
        }
    }

    // 选择
    ArrayList.prototype.selectionSort = function() {
        var length = this.array.length;
        for (var j = 0; j < length - 1; j++) {
            var min = j
            for (var i = j + 1; i < length; i++) {
                if (this.array[min] > this.array[i]) {
                    min = i;
                }
            }
            this.swap(min, j)
        }
    }

    // 插入
    ArrayList.prototype.insertSort = function() {
        var length = this.array.length;

        for (var i = 1; i < length; i++) {
            var temp = this.array[i];
            var j = i;
            while (this.array[j - 1] > temp && j > 0) {
                this.array[j] = this.array[j - 1]
                j--;
            }
            // 插入
            this.array[j] = temp;
        }
    }

    // 希尔
    ArrayList.prototype.shellSort = function() {
        var length = this.array.length
        var gap = Math.floor(length / 2)
        while (gap >= 1) {
            for (var i = gap; i < length; i++) {
                var temp = this.array[i];
                j = i;
                while (this.array[j - gap] > temp && j > 0) {
                    this.array[j] = this.array[j - gap];
                    j -= gap;
                }
                this.array[j] = temp;
            }
            gap = Math.floor(gap / 2)
        }
    }

    // 快速
    ArrayList.prototype.mid = function(left, right) {
        var center = Math.floor((left + right) / 2)
            // if (right == 1) console.log(this.array[left] + ' ' + this.array[right] + ' ' + this.array[center])
            // 判断大小
        if (this.array[left] > this.array[right]) {
            // console.log(left + ' ' + right)
            this.swap(left, right)
        }
        if (this.array[left] > this.array[center]) {
            this.swap(left, center)
        }
        if (this.array[center] > this.array[right]) {
            this.swap(center, right)
        }

        // 交换枢纽和倒数第二个位置
        // if (center != right - 1)
        this.swap(center, right - 1)
        return this.array[right - 1]
    }
    ArrayList.prototype.quickSort = function() {
        this.quick(0, this.array.length - 1)
    }
    ArrayList.prototype.quick = function(left, right) {
        // 结束条件
        if (left >= right) return
            // 获取枢纽
        var piovt = this.mid(left, right);
        // console.log(piovt)
        // 定义变量，用于记录当前找到的位置
        var i = left;
        var j = right - 1;

        while (true) {
            if (i == j) break;
            while (this.array[++i] < piovt) {}
            while (this.array[--j] > piovt) {}
            if (i < j) {
                this.swap(i, j);
            } else {
                break;
            }
        }
        // 将枢纽放在正确的位置
        this.swap(i, right - 1)
            // console.log(piovt)
            // console.log(this.array.toString())
            // 分而治之
        this.quick(left, i - 1)
        this.quick(i + 1, right)

    }
}

var a = new ArrayList();
a.insert(72)
a.insert(62)
a.insert(52)
a.insert(32)
a.insert(2)
a.insert(8)
a.insert(66)
a.insert(52)
a.insert(23)
a.insert(19)

// a.bubblesolt();
// a.selectionSort();
// a.insertSort()
// a.shellSort()
a.quickSort()
console.log(a.toString())