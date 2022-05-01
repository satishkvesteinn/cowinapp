import React from 'react';
import './abha.css';
import Cowinnew from './Cowinnew';

function abha() {
    return (
        <>
            <div className='abha-main-container'>
                <div className='abha-container'>
                    <h1>ABHA (Health ID) and its Benefits</h1>
                    <p>ABHA (earlier known as Health ID) is an acronym for Ayushman Bharat Health Account. Using ABHA (Health ID) is the first step towards creating safer and efficient digital health records for you and your family. It enables your interaction with participating healthcare providers, and allows you to receive your digital lab reports, prescriptions and diagnosis seamlessly from verified healthcare professionals and health service providers.</p>
                    <div className='abha-video-container'>
                        <a href='https://www.youtube.com/watch?v=5ZvLR1DcNBo' target="_blank"><img src='https://www.cowin.gov.in/assets/images/abha-preview.jpg'></img></a>
                        <a href='https://www.youtube.com/watch?v=GV3cR7AwTL0' target="_blank"><img src='https://www.cowin.gov.in/assets/images/abha-previewimg.jpg'></img></a>
                    </div>
                    <a href='#'>Click Here to Know More</a>
                </div>
            </div>
            <Cowinnew/>
        </>
    )
}

export default abha
