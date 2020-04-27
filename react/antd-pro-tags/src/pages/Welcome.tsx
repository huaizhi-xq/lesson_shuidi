import React, { useState, useEffect } from 'react'
import { ITag } from './interface'
import {fetchData} from '../utils/fetch'
import { TagItem } from '../components/TagItem'

const initialTags: ITag[] = [{
  id: 1,
  title: 'yhzc'
}]


// 1. umi 
const WelcomePage: React.FC<{}> = () => {
  const [tags, setTag] = useState(initialTags)
  useEffect(() => {
    // hooks副作用  api
    const url = '/api/tag/all'
    fetchData(url, 'GET')
      .then(data => {
        setTag(data.data)
      })
      // .then(data => {
      //   console.log(data)
      // })
  }, [])
  return (
    <div className="inputPageWrapper">
      {
        tags.map(obj => (
          // <div key={obj.id}>{obj.title}</div>
          <TagItem key={obj.id} title={obj.title} />
        ))
      }
    </div>
  )
}

export default WelcomePage