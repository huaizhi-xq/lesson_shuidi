import React from 'react';




function Home(props){
  console.log(props)
  const { route } = props
  return (
    <div>
      Home
    
    </div>
  );
}
 
export default React.memo(Home)