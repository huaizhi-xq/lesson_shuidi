type MaxQueue struct {
	queue []int
	q []int
}


func Constructor() MaxQueue {
	return MaxQueue{
		queue: make([]int, 0),
		q: make([]int, 0),
	}
}


func (this *MaxQueue) Max_value() int {
	if len(this.q) != 0 {
		return this.q[0]
	}
	return -1
}


func (this *MaxQueue) Push_back(value int)  {
	this.queue = append(this.queue, value)
	for len(this.q) != 0 && this.q[len(this.q) - 1] < value {
		this.q = this.q[:len(this.q)-1]
	}
	this.q = append(this.q, value)
}


func (this *MaxQueue) Pop_front() int {
	// if len(this.queue) == 0 {
	// 	return -1
	// }
	// value := this.queue[0]
	// this.queue = this.queue[1:]
	// if value == this.q[0] {
	// 	this.q = this.q[1:]
	// }
	// return value
	n := -1
	if len(this.queue) != 0 {
		n = this.queue[0]
		this.queue = this.queue[1:]
		if this.q[0] == n {
			this.q = this.q[1:]
		}
	}
	return n
}


/**
 * Your MaxQueue object will be instantiated and called as such:
 * obj := Constructor();
 * param_1 := obj.Max_value();
 * obj.Push_back(value);
 * param_3 := obj.Pop_front();
 */