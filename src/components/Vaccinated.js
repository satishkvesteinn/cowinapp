import React from 'react';
import './vaccinated.css'
import RegisterForVaccine from './RegisterForVaccine';
import VaccinationCenter from './VaccinationCenter';

function Vaccinated() {
    return (
        <>
            <div className='vaccinated-container'>
                <h1>Get Vaccinated in 3 east steps</h1>
                <div className='vaccinated-content'>
                    <a href='https://prod-cdn.preprod.co-vin.in/assets/pdf/User_Guide_Citizen_registration_15%2BandPrecaution.pdf' download target='_blank'>
                        <span className='step'>Step 1</span>
                        <img src='https://www.cowin.gov.in/assets/images/Step_1.svg'></img>
                        <h2>Book on apponintment on Co-WIN or Walk into any vaccination center</h2>
                        <p>How to Book Your apponintment on Co-WIN</p>
                    </a>
                    <span className='nextstep'></span>
                    
                    <a href='https://prod-cdn.preprod.co-vin.in/assets/pdf/Dos_and_Donts_for_Citizens.pdf' download target='_blank'>
                    <span className='step'>Step 2</span>
                        <img src='https://www.cowin.gov.in/assets/images/Step_2.svg'></img>
                        <h2>Get Your vaccination Safely at the Time of Your apponintment</h2>
                        <p>Dos and Dont's For Getting Vaccinated</p>
                    </a>
                    <span className='nextstep'></span>
                    <a href={<RegisterForVaccine />} target='_blank'>
                    <span className='step'>Step 3</span>
                        <img src='https://www.cowin.gov.in/assets/images/Step_3.svg'></img>
                        <h2>Download Your vaccination Cerificate from Co-WIN and Waid for Dose #2</h2>
                        <p>Download Your Vaccine Certificate</p>
                    </a>
                </div>
            </div>
            <VaccinationCenter/>
        </>
    )
}

export default Vaccinated
