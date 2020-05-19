import React from 'react';
import { Query } from 'react-apollo'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

// 前端定义要的接口是什么
// graphql 查询参数  restful已死
const QUERY_TODO = gql`
  {
    TodoList{
      content
      id
      checked
    }
  }
`

const TodoList = () => {
  return (
    <Query
    query={QUERY_TODO}
    >
    {({loading, error, data}) => {
      if (loading) return <p>loading...</p>
      if (error) return <p>error...</p>
      return data.TodoList.map(todo => `
        <li>${todo.id}-${todo.content}</li>
      `)
    }}
  </Query>
  )
}


export default TodoList