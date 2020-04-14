// react  router
import * as React from 'react' //组件
import { Route, HashRouter, Switch } from 'react-router-dom'

// import { About } from './components'
import { App } from './app'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      <div className="container-fluid">
        {/* routes数组 */}
        <Route path="/" component={ App } />
      </div>
    </HashRouter>
  )
}