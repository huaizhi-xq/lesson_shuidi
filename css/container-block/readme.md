## 包含块
  页面有一个箱子装着它们
  箱子：container-block

  width height margin-top padding：设置 百分比的时候  -> 并不是父元素，是相对于包含块

  ## 确定包含块？
  - 如果 position 属性为 static 、 relative 或 sticky，包含块可能由它的最近的祖先块元素
  - 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static 的祖先元素的内边距区的边缘组成。
  - 如果 position 属性是 fixed，包含块是 viewport
  - 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近祖先元素：
    - transform/perspective 不是 none
    - will-change：transform/ perspective
    - filter 不是 none 或者 will-change 是 filter(only works on Firefox).
    - contain 是 paint (例如: contain: paint;)

```html
<div>
  1
  <div>
    2
    <div>
      3
    </div>
  </div>
</div>
```

  ## position
    static
    relative： 相对于自身的偏移
    absolute: 相对于它的包含块来确定盒子的定位和大小
    fixed: 默认相对于viewport 创建的包含块来定位，除非它的祖先元素设置了(4条属性)，该祖先元素表现为包含块。
    

    width,height,margin,padding...他们的百分比计算的时候也是相对于container-block计算的


  ## normal flow
    格式化上下文：
    inline-level-box:水平方向从左往右布局，垂直方向默认以baseLine对齐
    block-level-box:从上往下
    relative position


  ## base line
    基线  默认
    vertical-align: middle;  中间对齐 