import React from 'react'
import spinner from "../spinner.gif"
const Spinner = () => {
  return (
    <div className="loader">
      <img src= {spinner} alt="Loading..."/>
    </div>
  )
}

export default Spinner
