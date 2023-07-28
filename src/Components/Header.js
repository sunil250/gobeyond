import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Headermenu from './Headermenu'

const Header = () => {
    const [active, setActive] = useState(false)
    const buttonClick = () => {
        setActive(!active)
    }
    return (
        <>
            <header>
                <div className='col-12'>
                    <div className='row'>
                        <div className='col-3'>
                            <Link to={"/"}>
                                <img src='/images/logo.png' className='img-fluid ' style={{ width: '45px' }} alt='logo' />
                            </Link>
                        </div>
                        <div className='col-9 text-end hamburger-left'>
                            {/* <button >
                                <span></span>
                                <span></span>
                                <span></span>
                            </button> */}
                            <div className={`${active ? 'active' : ''} hamburger-lines`} onClick={buttonClick}>
                                <span class="line line1"></span>
                                <span class="line line2"></span>
                                <span class="line line3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Headermenu
                active={active}
            />

            <Outlet />

        </>
    )
}

export default Header