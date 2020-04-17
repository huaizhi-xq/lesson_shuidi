import * as React from 'react';
import { MemberEntity } from '../model';

interface Props {
  member: MemberEntity
}

interface State {

}

class MemberRow extends React.Component<Props,State> {
  constructor(props) {
    super(props)
  }

  public componentDidMount() {
    console.log('+++');
    console.log(this.props.member);
  }

  public render() {
    return (
      <tr>
        <th>{this.props.member.avatar_url}</th>
        <th>{this.props.member.id}</th>
        <th>{this.props.member.login}</th>
      </tr>
    )
  }

  
}


export default MemberRow