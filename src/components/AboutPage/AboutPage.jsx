import React from 'react';
import "../App/App.css";
import { useHistory } from "react-router-dom";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  const history = useHistory();

   const returnHomeButton = () => {
    history.push(`/home/`);
     };

  return (
    <div className="container">
      <div>
        <h1>Aquatics Empowered</h1>
        <br />
        <p>An app to help aquatic maintenance staff in rural communities track and record pool chemical levels 
          as well as document water quality of various aquatic resources (pools, spas, hot tubs, etc.)</p>
            <br />
          <h2>Technologies Used:</h2>
            <p>React</p>
            <p>React-Redux</p>
            <p>postgreSQL</p>
            <p>javaScript</p>
            <p>Material Ui</p>
            <p>Node</p>
              <br />

                <h2>Authored By:</h2>
                  <p>Latisha Copeland</p>
                  <p>Keith Cullinan</p>
                  <p>Nathan Gaede</p>
                  <p>Tu Nguyen</p>
                  <p>Raul Roldan</p>

            


      </div>
      <button className="btn" onClick={returnHomeButton}>Return To Home</button>

    </div>
  );
}

export default AboutPage;
