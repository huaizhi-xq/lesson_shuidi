icon-font  @font-face  自定义字体


伪元素::  伪类:    
  不存在dom树上的

BFC  块级格式化上下文,独立的容器与外部互不影响 
  根元素
  float absolute 
  display  block(overflow不为visible) ,in-block,table-cells
  特点
   1. 垂直方向,margin取较大值  边距折叠
   2. 独立的容器与外部互不影响 
   3. 清除浮动

## normal flow
  - inline-lever-box
    - 参与IFC 水平方向一个接着一个布局
  - block-lever-box
    - 参与BFC 垂直方向一个接着一个布局，纵向排列，是一个隔离容器
  - relative-position

## BFC特点
  - 解决边距重叠 margin 向下
  - BFC 每个元素的的左边，紧紧贴着包含快的左边
  - 清除浮动

