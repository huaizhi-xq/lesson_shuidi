import * as React from 'react'
import { HelloComponent } from './hello'

export const App = () => {
  //<> </>  fragment
  //React hooks react新的函数 改变组件的编写方式和redux的新方式
  const [name, setName] = React.useState('initName')  
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <>
      <HelloComponent userName={name} />
      {/* <NameEditComponent userName={name} onChange={setUsernameState} /> */}
    </>
  )
}