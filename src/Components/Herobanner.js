import React, { useState } from 'react'

const Herobanner = () => {
    const [active, setActive] = useState({
        active: '',
        itmVal: ''
    })

    console.log(active.itmVal)

    return (
        <>
            <div

                onMouseOver={() => setActive({ active: true, itmVal: 'bottom-big-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'bottom-big-block' })}


                className={`${active.itmVal === 'bottom-big-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-4`}


                id="bottom-big-block" points="855,342 1365.5,342 1365.5,852.5" stroke="#EA262A">
                bottom-big-block

            </div>

            <div class="grid-1-5 mid-block" points="855,0.5 1024,0.5 1024,169.5" stroke="#EA262A"></div>

            <div className={`${active.itmVal === 'mid-second-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-3`}
                onMouseOver={() => setActive({ active: true, itmVal: 'mid-second-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'mid-second-block' })}
                id="mid-second-block" points="855,171.2 1024,171.2 1024,340.3" stroke="#EA262A">
                mid-second-block
            </div>
        </>
    )
}

export default Herobanner