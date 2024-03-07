import React, { useState, useEffect } from "react";
import DogBar from "./DogBar.js"
import DogInfo from "./DogInfo.js";

function App() {

  const [pups, setPups] = useState([])
  const [selectedPup, setSelectedPup] = useState({})
  const [ onOff, setOnOff] = useState(false)
  const [filteredGoodPups, setFilteredGoodPups] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(resp => resp.json())
    .then(data => setPups(data))
  }, [])

  const handleFilterClick = () => {
    setOnOff(!onOff)
    const goodDogs = pups.filter(pup => pup.isGoodDog === true)
    setFilteredGoodPups(goodDogs)
  }

  
  return (
    <div className="App">
      <div id="filter-div">
        <button onClick={handleFilterClick} id="good-dog-filter">{onOff == true ? "Filter Good Dogs: On" : "Filter Good Dogs: Off"} </button>
      </div>
      <div id="dog-bar">
        <DogBar 
        onOff={onOff}
        filteredGoodPups={filteredGoodPups}
        pups={pups}
        onSelectPup={setSelectedPup}
        />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
        <div id="dog-info">
          <DogInfo 
          selectedPup={selectedPup}
          setPups={setPups}
          setSelectedPup={setSelectedPup}
          pups={pups}
          />
        </div>
        
      </div>
    </div>
  );
}

export default App;
