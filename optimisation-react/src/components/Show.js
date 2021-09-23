import React from 'react'

function Show({toggle, isShow}) {
    console.log("Show");
    console.log(toggle);
    return (
        <div>
            {isShow && <h4>Dekho magar pyar se</h4>}
            <button onClick={toggle}>Toggle it</button>
        </div>
    )
}

export default React.memo(Show)
