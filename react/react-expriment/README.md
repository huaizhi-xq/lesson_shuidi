## 实验性阶段  Concurrent Mode
它能使 React 在长时间渲染的场景下依旧保持良好的交互性，能优先执行高优先级变更，不会使页面处于卡顿或无响应状态，从而提升应用的用户体验。
- 渲染进程
  - js
  - UI渲染
  互斥的  

  问题: js执行时间太长了

 一帧
  react: fiber 架构  requestIdleCallback(rIC)   可以中断

  暂停，中止或重新启动
  时间分片


  react 所有 
  - 交互
  - js
  - 内部setState
  - dom diff
任务优先级排比

以前 js霸道,执行多久就多久 
Cooperative Scheduling: 合作调度者模式   js和浏览器站在用角度,互相合作
 
