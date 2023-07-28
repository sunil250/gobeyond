import React from 'react'

const Homevideo = () => {
    return (
        <>
            <video className="w-100" autoPlay loop muted>
                <source
                    src="https://mdbootstrap.com/img/video/animation-intro.mp4"
                    type="video/mp4"
                    allowFullScreen
                />
            </video>
        </>
    )
}

export default Homevideo