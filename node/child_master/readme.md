- node index.js 单进程语言
  发挥了一个cpu作用
  - 进程 process
    应用 appendChild()
    操作系统挂载运行程序的单元
    拥有独立的资源 如内存 绝对安全
  - 线程 thread
    运算调度的单元，计算都是跑在线程上的。属于进程 
    js 本质上没有多线程的能力？


- child_process 子进程模块
  现代编程，基于硬件
  子进程会寻找另外的cpu运行，
  子进程小于等于cpu核数
  效率更高，消息机制一样