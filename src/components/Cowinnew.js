import React, { useState } from 'react';
import './cowinnew.css';
import Issue from './Issue'

function Cowinnew() {



    const cowinnew = [
        {
            id: 1,
            img: "https://www.cowin.gov.in/assets/images/numbering_new.svg",
            cowinnew_title: "Precaution dose is now available for the 18+ age group at Private Vaccination Centres",
            cowinnew_answer: "Beneficiaries above the 18+ age group and those who have completed 273 days after the administration of the second dose, are eligible for the Precaution dose.",
        },
        {
            id: 2,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "The new feature “Vaccination Date Correction” is added to Co-WIN",
            cowinnew_answer: "Now, the beneficiary can raise an issue using “Vaccination Date Correction” in case the vaccination certificate shows an incorrect date.",
        },
        {
            id: 3,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Introducing new vaccine Corbevax for Children of age group 12-14 yrs",
            cowinnew_answer: "Children of age group 12-14 yrs can now register on the Co-WIN portal using AADHAAR Card, PAN Card, Unique Disability ID, Ration Card with Photo and School Photo ID Card. Only Corbevax is approved for this age group currently."
        },

        {
            id: 4,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Now you can book an appointment for ZyCoV-D vaccine",
            cowinnew_answer: "A new vaccine is available for the 18+ age group. ZyCoV-D is now an approved vaccine for the age group of 18+ yrs."
        },

        {
            id: 5,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "HCW/FLW and Citizens in 60+ age group can now avail Precaution Dose",
            cowinnew_answer: "From 10th January 2022 precaution dose is available for HCW/FLW and Senior Citizens, 39 weeks after date of second dose. Precaution dose is available for now, for those who have taken Covaxin or Covishield. Citizens in 60+ age group having co-morbidity should avail precaution dose on medical advice. Appointments can be booked from 8th January 2022."
        },

        {
            id: 6,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Vaccine available for age group 15-18 yrs",
            cowinnew_answer: "Children of age group 15-18 yrs can now register on Co-WIN portal using AADHAAR Card, PAN Card, Unique Disability ID, Ration Card with Photo and School Photo ID Card. Only COVAXIN is approved for this age group currently."
        },
        {
            id: 7,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "New feature to Share Your Vaccination Status on different social media platforms",
            cowinnew_answer: "This exciting new feature added to Co-WIN allows you to Share Your Vaccination Status now among your social circle. You need to be fully or partially vaccinated to use this feature."
        },
        {
            id: 8,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "You can download your vaccination certificate for International Travel",
            cowinnew_answer: "This new feature allows fully vaccinated citizens to update existing photo identity to passport number and date of birth to get International Travel Certificate."
        },
        {
            id: 9,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "You can register as a foreign national on Co-WIN and get vaccinated",
            cowinnew_answer: "New feature has been provided for foreign national. You can easily be vaccinated just by providing your basic details. If you have been administered with Dose 1 vaccine in foreign country, you'll have provide it's details to Vaccinator while going for Vaccination."
        },
        {
            id: 10,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Citizens can link their passports to Co-WIN issued certificate by raising an issue in their accounts",
            cowinnew_answer: `This is a new feature provided where you can link your passport by entering Passport number. In order to link your passport to the certificate you need to login into your Co-WIN portal and then raise an issue to get your passport linked by clicking on "Add Passport Details to my vaccination certificate"`
        },
        {
            id: 11,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Introducing “Raise an Issue” to Co-WIN for all your vaccine certificate and account related issues",
            cowinnew_answer: `You can now get all your Issues related to your Vaccine Certificate at one place. All you need to do is to login to your Co-WIN portal and click on "Raise an Issue" . Multiple Issue options are provided. You can raise your concerned issues accordingly.`
        },
        {
            id: 12,
            img: "https://www.cowin.gov.in/assets/images/numbering.svg",
            cowinnew_title: "Check your eligibility for Dose 2 by signing in on Co-WIN with your registered mobile number",
            cowinnew_answer: `Citizens administered with dose 1 can now check their eligibility for Dose 2 by performing a single step.

            "Login to your Co-WIN portal" and there you have your eligibility mention next to your name, highlighted as "No. of Days left for Dose 2".`
        },
    ]


    const [show, setShow] = useState(false);

    function showsontent() {
        setShow(!show)
    }

    function showsontent1() {
        document.querySelectorAll('.cowinnew-content').forEach(item => {
            item.addEventListener('click', showsontent)
        })
    }

    // myFunction78();

    return (
        <>
            <div className='cowinnew-main-container'>
                <div className='cowin-container'>
                    <h1>What's New On Co-WIN ?</h1>
                    <div className='cowinnew-content-img-container'>
                        <div className='cowinnew-content-container'>


                            {
                                cowinnew.map((item) => {
                                    return (
                                        <div className='cowinnew-content' key={item.id}>
                                                <img src={item.img}></img>
                                                <span className='count'>{item.id < 10 ? "0" + item.id : item.id}</span>
                                            <div className='content'>
                                                <h6>{item.cowinnew_title}</h6>
                                                <p className={show ? "show" : "hide"}>{item.cowinnew_answer}</p>
                                            </div>
                                            <div className='content-down-btn'>
                                                <i className={`bi bi-caret-${show ? "up" : "down"}-fill`} onClick={showsontent1}></i>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className='cowinnew-img-container'>
                            <img src="https://www.cowin.gov.in/assets/images/what's_new_on_cowin.svg"></img>
                        </div>
                    </div>
                </div>
            </div>
            <Issue />
        </>
    )
}

export default Cowinnew
