import React from 'react';

const StoryDetails = ({story}) => {

  return (
    <li>
      <a href={story.url}><h4>{story.title}</h4></a>
      <p>-{story.by}-</p>
    </li>
  )
}

export default StoryDetails;