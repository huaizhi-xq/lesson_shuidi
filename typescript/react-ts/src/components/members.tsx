import * as React from 'react';
import MemberHeader from './memberHeader'
import MemberRow from './memberRow'
import { memberAPI } from '../api/member/';
import { MemberEntity } from '../model';


interface Props {
  
}
interface State {
  members: MemberEntity[]
}


//内部数据  vue data  react state
export class MembersPage extends React.Component<Props,State> {
  constructor(props) {
    super(props) // 父类的构造函数调用下
    this.state = {  // 组件的状态  
      //vue data  react 风格 没有api的约束  vue api式美好的
      // data() { return {} }  react 一切皆编程语法 原始js语法
      members: []
    }
  }

  public render() {  //必须实现的接口
    return (
      <div className="row">
        {/* Hello */}
        <h2>Member Page</h2>
        <table className="table">
          <thead>
            <MemberHeader />
          </thead>
          <tbody>
            {/* v-for */}
            { 
              this.state.members.map(member => 
                <MemberRow 
                  key={member.id}
                  member={member}
                  />
              )
            }
          </tbody>
        </table>
      </div>
    )
  }

  public componentDidMount() {
    console.log(MemberRow);
    
    // ts  虽然多写了些代码，但是会减少很多调式，反而省时间
    memberAPI
      .fetchMembers()
      .then((members) => {
        this.setState({
          members
        })
      })
  }

} 