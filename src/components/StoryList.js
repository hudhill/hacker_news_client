import React from 'react';
import StoryDetails from './StoryDetails';

const StoryList = ({stories, loaded}) => {

  return (
    <ul>
      {stories.map(
        story => {
          return (
            <StoryDetails
              key={story.id}
              story={story}
              loaded={loaded}
            />
          )
        }
      )}
    </ul>
  )
}

export default StoryList;