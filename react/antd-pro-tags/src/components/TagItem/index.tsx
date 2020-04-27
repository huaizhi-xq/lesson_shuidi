import React from 'react'

interface TagItemProps {
  title?: string;
}

export const TagItem: React.FC<TagItemProps> = (props) => {
  // console.log(props);
  return (
    <div>
      {props.title}
    </div>
  )
}