import React, {useState, useEffect} from 'react';
import StoryList from '../components/StoryList';
import SearchBar from '../components/SearchBar';
import "./StoryContainer.css"

const StoryContainer = () => {

  const [allStories, setAllStories] = useState([]);
  const [filteredStories, setFilteredStories] = useState([]);
  const [filter, setFilter] = useState('');
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(res => res.json())
      .then(storyIds => storyIds.splice(0, 30)) // takes forever to get them all
      .then(storyIds => { // retrieving story ids from above url
        const promises = storyIds.map(storyId => { // map each id to get back an array of the actual stories
          return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`)
            .then(res => res.json())
        })
        Promise.all(promises) // takes an array of promises and runs once it has them
          .then((results) => {
            setAllStories(results)
            setFilteredStories(results)
            setLoaded(true)
          })
      })

  }, []);

  const updateFilter = (filter) => {
    const stories = allStories.filter(story => {
      return (
        story.title.toLowerCase().includes(filter.toLowerCase())
      )
    })
    setFilter(filter);
    setFilteredStories(stories);
  }

  const resetStories = () => {
    setFilteredStories(allStories);
    setFilter('');
  }

  return (
    <div className="storyContainer">
      <h1 className="indent">Hacker News</h1>
      <SearchBar filter={filter} updateFilter={updateFilter} resetStories={resetStories}/>
      <StoryList filteredStories={filteredStories} loaded={loaded}/> 
    </div>
  )  

}

export default StoryContainer;