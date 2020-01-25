# git
  1. git基本工作流程
    工作目录 -> 暂存区(临时存放被修改的文件) -> git仓库

  2. git的使用
    1. 配置
      1. 配置提交人姓名： git config --global user.name 提交人姓名
      2. 配置提交人邮箱： git config --global user.email 提交人邮箱
      3. 查看git配置信息： git config --list
    2. 提交步骤
      1. git init 初始化git仓库
      2. git stutas 查看文件状态
      3. git add 文件列表 追踪文件
      4. git commit -m 提交信息 向仓库中提交代码
      5. git log 查看提交记录
    3. 撤销
      1. 用暂存区中的文件覆盖工作目录中的文件: git checkout 文件
      2. 将文件从暂存区中删除: git rm --cached 文件
      3. 将git仓库中指定的更新记录恢复出来，并且覆盖暂存区和工作目录: git rest --hard commitID
    
  3. 分支
    1. 分支命令
      1. git branch 查看分支
      2. git branch 分支名称  创建分支
      3. git checkout 分支名称  切换分支
      4. git merge 来源分支  合并分支 
      5. git branch -d 分支名称  删除分支(分支被合并后才允许删除) (-D 强制删除)
    2. 暂时保存更改
      1. 存储临时改动: git stash
      2. 恢复改动: git stash pop