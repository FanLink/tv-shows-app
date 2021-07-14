import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSingleShow } from '../../redux/showSlice'
import Spinner from '../../components/Spinner'

const Singlepage = ({ match }) => {
  const { singleShow, loading } = useSelector(state => state.shows);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getSingleShow(match.params.id))
  }, [dispatch, match.params.id]);
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <>{loading ? <Spinner /> :
      <div className="singleshow">
        <img src={singleShow.image ? singleShow.image.medium : "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg"}
          alt={singleShow.name} />
        <div className="singleshow__info">
          <h1>{singleShow.name}</h1>
          {singleShow.genres && singleShow.genres.map((genre) => (
            <span className="singleshow__genre">{genre}</span>
          ))}
          <p><strong>Status:</strong>{singleShow.status && singleShow.status}</p>
          <p>
            <strong>Rating:</strong>{" "}
            {singleShow.rating&&singleShow.rating.average ? singleShow.rating.average : "No rating"}
          </p>
          <p>
            <strong>Offical Site:</strong>{" "}
            {singleShow.officialSite ? (
              <a
                href={singleShow.officialSite}
                target="_blank"
                rel="noreferrer" >
                {singleShow.officialSite}
              </a>
            ) : (
              "No offical site"
            )}
          </p>
          <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
        </div>
      </div>}
    </>
  )
}

export default Singlepage
