import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Headermenu = ({ active }) => {
    const [inOut, setInOut] = useState({
        itmName: '',
        isActive: ''
    })

    return (
        <>
            <div className={`${inOut.isActive && active ? 'active' : ''} leftSiderbar`}>
                <div className={`${inOut.isActive && inOut.itmName === 'itm-1' ? 'opacity-1' : 'opacity-0'} text-white`}>
                    Itms 1
                </div>
                <div className={`${inOut.isActive && inOut.itmName === 'itm-2' ? 'opacity-1' : 'opacity-0'} text-white`}>
                    Itms 2
                </div>
            </div>
            <div className={`${active ? "active" : ''} rightSiderbar px-3 py-2`}>
                <h3>Rightside Menu</h3>
                <div className='menu-Items mt-5'>
                    <NavLink
                        onMouseOver={() => setInOut({ itmName: 'itm-1', isActive: true })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Navigate your next</NavLink>
                    <NavLink
                        onMouseOver={() => setInOut({ itmName: 'itm-2', isActive: true })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Industries</NavLink>
                    <NavLink
                        onMouseOut={() => setInOut({ itmName: '', isActive: false })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Services</NavLink>
                    <NavLink
                        onMouseOut={() => setInOut({ itmName: '', isActive: false })}
                        className={'py-2 text-darkBlue fw-bold text-decoration-none'}>Platforms</NavLink>
                </div>
            </div>

        </>
    )
}

export default Headermenu