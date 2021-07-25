import React from 'react';
import StoryDetails from './StoryDetails';

const StoryList = ({filteredStories, loaded}) => {

  if(!loaded){
    return 'Retrieving top stories...'
  }

  return (
    <ul>
      {filteredStories.map(
        story => {
          return (
            <StoryDetails
              key={story.id}
              story={story}
            />
          )
        }
      )}
    </ul>
  )
}

export default StoryList;