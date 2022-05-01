import React from 'react';
import './issue.css';
import Carousel from 'react-multi-carousel';
import Ourpartners from './Ourpartners';

function Issue() {


    const certificate = [
        {
            id: 1,
            url: "www.google.com",
            certificate_name: "Vaccination Date Correction",
            paragraph: "If your vaccination certificate is showing an incorrect date, you can raise an issue using “Vaccination Date Correction”."
        },
        {
            id: 2,
            url: "www.google.com",
            certificate_name: "Certificate Corrections",
            paragraph: "If your vaccination certificate is showing incorrect name, gender, birth year or ID details, you can raise an issue using “Certificate Correction”. Using this you can correct any two fields at a time on the vaccination certificate."
        },
        {
            id: 3,
            url: "www.google.com",
            certificate_name: "Merge Certificates",
            paragraph: "In case you have multiple certificates of Dose 1 generated from different accounts, you can merge them into the final vaccination certificate."
        },
        {
            id: 4,
            url: "www.google.com",
            certificate_name: "Add Passport",
            paragraph: "You can link your passport to your vaccination certificate. By adding a passport to your vaccination certificate you can submit a request and get an international travel certificate."
        },
        {
            id: 5,
            url: "www.google.com",
            certificate_name: "Report Unknown Member",
            paragraph: "If there are any unknown members are associated with your account, you can remove them from your account by reporting unknown members."
        },
        {
            id: 6,
            url: "www.google.com",
            certificate_name: "Transfer Member To New Number",
            paragraph: "You can transfer members associated with your existing account to the new mobile number."
        },
    ]


    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 604 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className='issue-section'>
                <div className='issue-container'>
                    <h5>Raise An Issue</h5>
                    <div className='issue-paragraph-container'>
                        <p>Raise an issue or get solutions to your Co-WIN account and vaccination certificate related issues instantly.</p>
                        {/* <div className='issue-button-container'>
                            <button><i class="bi bi-chevron-left"></i></button>
                            <button><i class="bi bi-chevron-right"></i></button>
                        </div> */}
                    </div>
                </div>
                <Carousel className='crousel-container' responsive={responsive} slidesToSlide={1} swipeable={true} showDots={false}>
                    {
                        certificate.map((item) => {
                            return (
                                <div key={item.id} className='carsoual'>
                                    <a href={item.url}>{item.certificate_name}</a>
                                    <p>{item.paragraph}</p>
                                </div>
                            )
                        })
                    }
                </Carousel>
            </section>
            <Ourpartners />
        </>
    )
}

export default Issue
