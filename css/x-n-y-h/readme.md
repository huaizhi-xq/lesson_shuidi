60fps  frame per second  页面是立体的
一帧: js -> style -> layout -> paint -> composite   后三步并非必经， 不经过layout 或者 paint 之间跳到 composite

bgc, box-shadow, color, 只会触发重绘
width , height，display[none/block]  重排

1：改变 css 属性，尽量不引起layout
2：transform cursor 他们非常优秀 直接到达 composite (前提是要在一个独立的图层)
3：css动画的时候尽量考虑transform  

提升元素为独立的一个 图层
1. translate3d
2. will-change: transform
3. backface-visibility: hidden;
4. 重叠

用户明显的卡顿 ，假设 浏览器花费了过多的时间处理 动画，导致其他的任务（用户的输入）得到的时间较少，浏览器没有足够的时间处理用户输入