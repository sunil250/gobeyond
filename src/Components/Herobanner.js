import React, { useState } from 'react'
import { GoDotFill } from 'react-icons/go'
const Herobanner = () => {
    const [active, setActive] = useState({
        active: '',
        itmVal: ''
    })

    console.log(active.itmVal)

    return (
        <>
            {/* <div

                onMouseOver={() => setActive({ active: true, itmVal: 'bottom-big-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'bottom-big-block' })}


                className={`${active.itmVal === 'bottom-big-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-4`}


                id="bottom-big-block" points="855,342 1365.5,342 1365.5,852.5" stroke="#EA262A">
                bottom-big-block

            </div> */}

            {/* <div className="grid-1-5 mid-block" points="855,0.5 1024,0.5 1024,169.5" stroke="#EA262A"></div>

            <div className={`${active.itmVal === 'mid-second-block' && active.active ? 'active' : 'hero-red-fill hero-white-fill first-block'} grid-1-3`}
                onMouseOver={() => setActive({ active: true, itmVal: 'mid-second-block' })}
                onMouseOut={() => setActive({ active: false, itmVal: 'mid-second-block' })}
                id="mid-second-block" points="855,171.2 1024,171.2 1024,340.3" stroke="#EA262A">
                mid-second-block
            </div> */}

            <section className="home-hero-section">

{/* code starts */}
                <svg className=" grid-1-animation" fill="none" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 1366 855"
                    space="preserve">
                    {/* points direction "left,top width, top bottom, height" */}
                    <polygon className="grid-1-1 big-section" points="0,0.5 780,0.5 780,855"
                        stroke="#ff8a00" fill='' >
                    </polygon>
                    <polygon className="grid-1-1 mid-section postion-relative" points="781,0.5 980,0.5 980,200"
                        stroke="#ff8a00" fill='' >
                        <svg className=" grid-1-animation" fill="none" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 200 200"
                            space="preserve">
                            <polygon className="grid-1-1 mid-section postion-relative" points="0,0.5 20,0.5 20,200"
                                stroke="#ff8a00" fill='' >
                            </polygon>
                        </svg>
                    </polygon>
                    <polygon className="grid-1-1 mid-section postion-relative mt-4" points="781,200 980,200 980,400"
                        stroke="#ff8a00" fill='' >
                    </polygon>
                    <polygon className="grid-1-1 big-section mt-4" points="981,0.5 1366,0.5 1366,400"
                        stroke="#ff8a00" fill='' >
                    </polygon>
                    <polygon className="grid-1-1 big-section mt-4" points="781,400 1366,400 1366,855"
                        stroke="#ff8a00" fill='' >
                    </polygon>

                </svg>
                <div className='container'>
                    <div className='d-flex'>
                        <h1 className='h-text'>SmartGig</h1>
                    </div>

                </div>

                <div className='eightDots d-flex flew-wrap flex-col grid-1-animation'>
                    <i className='circle-dots text-polygon grid-1-1'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                    <i className='circle-dots text-polygon'><GoDotFill /></i>
                </div>

            </section>
        </>
    )
}

export default Herobanner