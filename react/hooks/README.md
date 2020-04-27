# hooks

1. useState
  useState 的出现是 ： 在函数组件里面使用 class的setState
  useState的初始值，只在第一次有效

2. useEffect
  useEffect 的出现是 ： 在函数组件里面使用 class的生命周期函数，还是所有函数的合体
  1. 只在第一次使用的componentDidMount，可以用来请求异步数据...、
    useEffect最后，加了[]就表示只第一次执行
                  不加[]就表示每一次渲染都执行
    并且[]里面加的字段就表示，这个字段更改了，

3. useRef  
    就是相当于全局作用域，一处被修改，其他地方全更新...
    useRef更多的用于保存不影响状态又需要存储的值，可以理解为类组件中的实例属性

4. useMemo
  useMemo 作为一个有着暂存能力的    子组件参数没有更新就不重新渲染

5. useCallback
  useMemo 与 useCallback 类似，都是有着缓存的作用。本质的区别可能就是：
  前者缓存值  后者缓存函数

6. useReducer
  useReducer就是 class 里面那个reducer

7. useContext
  useContext 就是 class 里面的 那个 context。

