import React from 'react'
import Logo from '../../images/logo/logo.svg'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer>
                <div className="container-fluid z-11">
                    <div className="row">
                        <div className="col-xl-3">
                            <div className="footer-logo">
                                <Link>
                                    <img src={Logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="footer_content">
                                <h5>Categories</h5>
                                <ul>
                                    <li>
                                        <Link>Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Kurta sets</Link>
                                    </li>
                                    <li>
                                        <Link>Dresses</Link>
                                    </li>
                                    <li>
                                        <Link>Unstitched Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Handblock Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Handpainted Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Kaftans</Link>
                                    </li>
                                    <li>
                                        <Link>Premium Chanderi Suit-sets</Link>
                                    </li>
                                    <li>
                                        <Link>Premium Chanderi Suit-sets</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="footer_content">
                                <h5>Categories</h5>
                                <ul>
                                    <li>
                                        <Link>Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Kurta sets</Link>
                                    </li>
                                    <li>
                                        <Link>Dresses</Link>
                                    </li>
                                    <li>
                                        <Link>Unstitched Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Handblock Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Handpainted Suit Sets</Link>
                                    </li>
                                    <li>
                                        <Link>Kaftans</Link>
                                    </li>
                                    <li>
                                        <Link>Premium Chanderi Suit-sets</Link>
                                    </li>
                                    <li>
                                        <Link>Premium Chanderi Suit-sets</Link>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 ms-auto">
                            <div className="footer_inner">
                                <h4>Contact Us</h4>
                                <p>Please contact us on email order@aftaneninde.com or
                                    call us at +91 000000000 between 10:00 to 18:00
                                    Monday to Saturday.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
