import React from "react";

function DogInfo({selectedPup, setPups, setSelectedPup, pups}) {

    const handleStatusClick = (selectedPup) => {
       const updatedIsGoodDog = !selectedPup.isGoodDog
       console.log(updatedIsGoodDog)

       fetch(`http://localhost:3001/pups/${selectedPup.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isGoodDog: updatedIsGoodDog }),
    })
    .then(resp => resp.json())
    .then(data =>{setSelectedPup(data)

        const updatedPups = pups.map(pup => pup.id === selectedPup.id ? selectedPup : pup)
    
    setPups(updatedPups)})

    }


    return(
        <div>
            <img src={selectedPup.image}/>
            <h2>{selectedPup.name}</h2>
            <button onClick={() => handleStatusClick(selectedPup)}>{selectedPup.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        </div>
    )
}

export default DogInfo