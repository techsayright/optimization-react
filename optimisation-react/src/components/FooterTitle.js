import React from 'react'

function FooterTitle({array}) {
    console.log("FooterTitle");
    console.log(array);
    return (
        <div>
            <h4>Copyright - Footer - {JSON.stringify(array)}</h4>
        </div>
    )
}

export default React.memo(FooterTitle)
