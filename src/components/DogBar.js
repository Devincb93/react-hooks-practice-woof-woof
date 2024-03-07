import React from "react"

function DogBar({ pups, onSelectPup, filteredGoodPups, onOff }) {

    const handleClick = (pup) => {
        onSelectPup(pup)
        

    }
   

    return (
        <div>
        {(onOff === true ? filteredGoodPups : pups).map(pup => (
            <span onClick={() => handleClick(pup)} key={pup.id}>{pup.name}</span>
        ))}
        </div>
    )
}

export default DogBar