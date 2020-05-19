import React from 'react';
import './App.css';
import { Card } from 'antd'
import "antd/dist/antd.css"
import {ApolloProvider} from 'react-apollo'
import ApolloClient from 'apollo-boost'
import TodoList from './component/TodoList'

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql'
})

// Apollo  是graphql框架
function App() {
  return (
    <ApolloProvider client={client}>
    <Card
      style={{width: "600px", margin: "100px auto"}}
      > 
      <h1>GraphQl demo</h1>
      <TodoList />
    </Card>
    </ApolloProvider>
  );
}

export default App;
