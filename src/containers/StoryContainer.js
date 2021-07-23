import React, {useState, useEffect} from 'react';
import StoryDetails from '../components/StoryDetails';

function StoryContainer() {

  const [storyIds, setStoryIds] = useState([]);
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(storyIds => {
        const promises = storyIds.map(storyId => {
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())
          }
        )
        Promise.all(promises) // takes an array of promises and once it has them, runs
          .then((results) => {
          setTopStories(results)
      })
        console.log(promises)
      })

  }, []);

  return (

    <>
      <StoryDetails />
    </>

  )

}

export default StoryContainer;