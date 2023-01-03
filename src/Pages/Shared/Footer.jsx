import React from 'react';
import footer from '../../assets/images/footer.png'

const Footer = () => {
    return (
        <section style={{ background: `url(${footer})` }}>
            <footer>
                <div className="footer p-10 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </div>
                    <div>
                        <span className="footer-title">Oral Health</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                    </div>
                    <div>
                        <span className="footer-title">Our Address</span>
                        <a className="link link-hover">Terms of use</a>
                    </div>
                </div>
                <div className='p-10 text-center'>
                    <p>Copyright © 2023 - All right reserved by Sohel Rana</p>
                </div>
            </footer>
        </section>
    )
}

export default Footer