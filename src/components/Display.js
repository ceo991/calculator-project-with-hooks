import React from 'react'

function Display({prevCalc}) {
    return (
        <div id="display">
            <p>{prevCalc=== "" ? "0" : prevCalc}</p>
        </div>
    )
}

export default Display