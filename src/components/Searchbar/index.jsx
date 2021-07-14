import { useState } from "react";
import Alert from "../../Alert";
import { useDispatch, useSelector } from "react-redux"
import { searchShows } from "../../redux/showSlice";
import { resetAlert, setAlert } from "../../redux/alertSlice";

const Searchbar = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const {type, message} = useSelector(state => state.alert)
  const dispatch = useDispatch()
  const onSearchHandler = (e) => {
    e.preventDefault()
    if (searchTerm === "") {
      dispatch(setAlert({message:"Please enter something",type: "danger"}));
    } else {
      dispatch(searchShows(searchTerm))
      dispatch(resetAlert());
    }

  }
  return (
    <div className="searchbar">
      {message ? <Alert type= {type} message={message}/> : null}
      <form className="searchbar__form">
        <input type="text" placeholder="Search for TV show"
          value={searchTerm}
          onChange={(e) => setsearchTerm(e.target.value)} />
        <button className="btn btn-block" onClick={onSearchHandler}>
          SEARCH
        </button>
      </form>
    </div>
  )
}

export default Searchbar
