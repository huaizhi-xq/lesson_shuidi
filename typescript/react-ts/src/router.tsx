// react  router
import * as React from 'react' //组件
import { Route, HashRouter, Switch } from 'react-router-dom'

// import { About } from './components'
import { App } from './app'
import { About, MembersPage } from './components'

export const AppRouter: React.StatelessComponent<{}> = () => {
  return (
    // new VueRouter()
    <HashRouter>
      <div className="container-fluid">
        {/* routes数组 */}
        {/* exact / 严格匹配 */}
        {/* 导航 */}
        <Route path="/"   component={ App } />
        {/* router-view */}
        <Switch>
          {/* 只匹配一个 */}
          <Route path="/" exact component={ About } />
          <Route path="/about" component={ About } />
          <Route path="/members" component={ MembersPage } />
        </Switch>
        
      </div>
    </HashRouter>
  )
}