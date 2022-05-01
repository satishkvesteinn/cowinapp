import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import './home.css';
import Navbar from './navbar';
import Vaccinated from './Vaccinated';

function Home() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <Carousel showThumbs={false} className='home-craosual-container' responsive={responsive} infinite={false} shouldResetAutoplay={false}>
                <div className='container-background'>
                    <div className='container-fluid home-container'>
                        <div className='home-content'>
                            <h2>Ayushman Bharat Health Account (Previously Health ID)</h2>
                            <h1>Creating India's Digital Health Ecosystem</h1>
                            <p>Digitally secure ABHA allows you to access and share your health records digitally. Using ABHA you can receive your digital lab reports, doctor prescriptions and diagnosis from verified healthcare professionals.</p>
                            <a href='#'>Create your ABHA account</a>
                        </div>
                        <div className='home-img'>
                            <img src='https://www.cowin.gov.in/assets/images/abha_banner_img.svg'></img>
                        </div>
                    </div>
                </div>
            </Carousel>
            <Vaccinated />
        </>
    )
}

export default Home
