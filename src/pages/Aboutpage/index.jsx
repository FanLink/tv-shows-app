import React from 'react'

const Aboutpage = () => {
  return (
    <div className="about">
      <h3 className="about__title">ABOUT PAGE</h3>
      <div className="about__info">
        <p>Tv Show Search App (sample)</p>
        <div>
          <p>Things learnt from app build:</p>
          <ul>
            <li>React (create-react-app)</li>
            <li>Basic CSS & HTML</li>
            <li>Axios AJAX Request</li>
            <li>TVMAZE API (https://www.tvmaze.com/api)</li>
            <li>React Router</li>
            <li>Redux Toolkit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Aboutpage
