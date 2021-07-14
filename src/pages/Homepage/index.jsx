import React from 'react'
import Searchbar from '../../components/Searchbar'
import { useSelector } from "react-redux";
import Spinner from '../../components/Spinner';
import Listitem from '../../components/Listitem';
const Homepage = () => {
  const fetchAllShows = useSelector(state => state.shows)

  const { loading, shows } = fetchAllShows;
  return (
    <div className="homepage">
      <Searchbar />
      {loading ? <Spinner /> :
        <div className="homepage__list">
          {shows.map((item) =>
            <Listitem
              key ={item.show.id}
              name={item.show.name}
              rating={ item.show.rating.average
                ? item.show.rating.average
                : "No rating"}
              image={item.show.image ?
              item.show.image.medium: "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
              id={item.show.id}>
            </Listitem>)}
        </div>
      }
    </div>
  )
}

export default Homepage
