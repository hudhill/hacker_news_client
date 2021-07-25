import React from 'react';

const StoryDetails = ({story, loaded}) => {

  if(!loaded){
    return <p>Loading...</p>
  }

  return (
    <li>
      <a href={story.url}><h4>{story.title}</h4></a>
    </li>
  )
}

export default StoryDetails;