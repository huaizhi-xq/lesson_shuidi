# 网格布局
display: grid  块级
display: inline-grid  行内

grid-template-columns属性定义每一列的列宽
grid-template-rows属性定义每一行的行高。

1. repeat()  接受两个参数，第一个参数重复的次数， 第二个重复的值
  第一个参数可以是auto-fill  grid-template-columns: repeat(auto-fill, 100px);
  自动填充 每列宽度100

2. fr（fraction 的缩写，意为"片段"）
  如果两列的宽度分别为1fr和2fr，就表示后者是前者的两倍。
  结合绝对长度单位结合使用很方便

3. minmax()
  grid-template-columns: 1fr 1fr minmax(100px, 1fr);
  第三列  宽度大于等于100px 小于等于1fr

4. auto
  grid-template-columns: 100px auto 100px;
  第二列 剩余

5. 网格线的名称
  grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
  grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
  c1..c4 垂直网格线的名称
  网格布局允许同一根线有多个名字，比如[fifth-line row-5]


6. grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。
   简写 grid-gap: <grid-row-gap> <grid-column-gap>;  如果只有一个值 那么两个值都一样

7. grid-template-areas  指定区域
    grid-template-areas: "header header header"
                         "main main sidebar"
                         "footer footer footer";
    如果某些区域不需要利用，则使用"点"（.）表示。

8. grid-auto-flow  默认是row   可以设置为column
    row dense，表示"先行后列"，并且尽可能紧密填满，尽量不出现空格。

9. justify-items: start | end | center | stretch;
   align-items: start | end | center | stretch;
   设置单元格
   简写 place-items: <align-items> <justify-items>;

10. justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
    align-content: start | end | center | stretch | space-around | space-between | space-evenly; 
    设置整个内容区域
    简写 place-content: <align-content> <justify-content>