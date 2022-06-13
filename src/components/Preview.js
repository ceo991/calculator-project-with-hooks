import React from 'react'

function Preview({calculation}) {
    return (
        <div id="preview">
            <p>{calculation === "" ? 0 : calculation}</p>
        </div>
    )
}

export default Preview