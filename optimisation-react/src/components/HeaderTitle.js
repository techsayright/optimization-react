import React from 'react'

function HeaderTitle() {
    console.log("HeaderTitle");
    return (
        <div>
            <h1>This is Just a Demo - Header</h1>
        </div>
    )
}

export default React.memo(HeaderTitle)
