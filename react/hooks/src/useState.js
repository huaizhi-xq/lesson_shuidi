import React, { Component, memo, useState, useEffect } from 'react';

const Child = memo(({data}) => {
  console.log('child render...', data)
  const [name, setName] = useState(data) //父组件data改变了  useState并没有重新赋值
  return (
    <div>
        <div>child</div>
        <div>{name} --- {data}</div>
    </div>
  );
 
})

const Hook = () => {
  console.log('Hook render...')
  const [count, setCount] = useState(0)
  const [name, setName] = useState('rose')

   useEffect(() => {
    console.log('use effect...',count)
  })

  return(
    <div>
        <div>
            {count}
        </div>
        <button onClick={()=>setCount(count+1)}>update count </button>
        <button onClick={()=>setName('jack')}>update name </button>
        <Child data={name}/>
    </div>
  )
}

export default Hook