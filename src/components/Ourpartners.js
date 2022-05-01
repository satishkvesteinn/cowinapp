import React from 'react';
import './ourpartners.css';

function Ourpartners() {
    return (
        <>
            <section className='ourpartner'>
                <h2>Our Partners</h2>
                <div className='partner-container'>
                    <div className='partner-image'>
                        <img src='https://www.cowin.gov.in/assets/images/partners_page.svg'></img>
                    </div>
                    <div className='our-partner'>
                        <div className='our-partner-image-container'>
                            <span>
                                <img src='https://www.cowin.gov.in/assets/images/digilocker_new_Logo.svg'></img>
                            </span>
                            <span>
                                <img src='https://www.cowin.gov.in/assets/images/umang_new_logo.svg'></img>
                            </span>
                            <span>
                                <img src='https://www.cowin.gov.in/assets/images/arogya_setu_logo1.svg'></img>
                            </span>
                            <span>
                                <img src='https://www.cowin.gov.in/assets/images/SWASTH%20Arogya.svg'></img>
                            </span>
                        </div>
                        <div className='our-partner-button-container'>
                            <a href='#'>Become a partner</a>
                            <a href='#'>View more</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourpartners
