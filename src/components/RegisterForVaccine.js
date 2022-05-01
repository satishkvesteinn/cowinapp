import React, { useState } from 'react';
import './RegisterForVaccine.css';
import SHA256 from 'crypto-js/sha256';
// const crypto = require('crypto');
function RegisterForVaccine() {    

    const [txnID, setTxnID] = useState("");
    const [OtpButton, setOtpButton] = useState("block")
    const [verifyOTP, setVerifyOTP] = useState("none");
    const [mobileInput, setMobileInput] = useState(false)
    const [otpInput, setOtpInput] = useState(true)
    const [error, setError] = useState("")

    function handlesubmit(e) {
        e.preventDefault();
        const mobile_number = document.getElementById('mobilenumber').value;
        const mobile = mobile_number;
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': '3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi'
            },
            body: JSON.stringify({
                mobile: mobile
            })
        }
        // Fake api for making post requests
        let fetchRes = fetch("https://cdndemo-api.co-vin.in/api/v2/auth/generateOTP", options);
        fetchRes.then(res =>
            res.json()).then(d => {
                console.log(d);
                setMobileInput(true);
                setOtpInput(false)
                setVerifyOTP("block");
                setTxnID(d.txnId);
                setOtpButton("none");
            }).catch((error) => console.log('error :', error))

    }


    function handleOTPsubmit(e){
        setOtpInput(true)
        e.preventDefault();
        const OTP = document.getElementById('mobilenumberOTP').value;
        const stringOTP = OTP.toString();
        const TXNID = txnID.toString();
        const hash = SHA256(stringOTP).toString();
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                otp: hash,
                txnId: TXNID
            })
        }
        // Fake api for making post requests
        let fetchRes = fetch("https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP", options);
        fetchRes.then(res =>
            res.json()).then(d => {
                if(d.token){
                    localStorage.setItem("token", d.token)
                }else{
                    setError(d);
                }
            }).catch((error) => console.log('error :', error))
    }

//     const inputEl = document.querySelector('input');

// inputEl.addEventListener('input', (event) => {
//   event.target.value = '';
// });

    return (
        <div className='register'>
            <div className='register-container'>
                <div className='register-left-container'>
                    <img src='https://selfregistration.cowin.gov.in/assets/images/login-family.svg'></img>
                    <img src='https://selfregistration.cowin.gov.in/assets/images/vaccine-logo-icon.svg'></img>
                    <img src='https://selfregistration.cowin.gov.in/assets/images/flower-pot-icon.svg'></img>
                    <img src='https://selfregistration.cowin.gov.in/assets/images/building-icon.svg'></img>
                </div>
                <div className='register-right-container'>
                    <h3>Register or Sign In for Vaccination</h3>
                    <h4>An OTP will be sent to your mobile number for verification</h4>
                    <form method='post' onSubmit={handlesubmit}>
                        <input type='tel' id='mobilenumber' placeholder='Enter your mobile number' maxLength="10" disabled={mobileInput} autoComplete='off'></input>
                        <input type='submit' role='button' value='GET OTP' style={{display : OtpButton}}></input>
                    </form>
                    <form method='post' onSubmit={handleOTPsubmit} style={{display: verifyOTP}} >
                        <input type='tel' id='mobilenumberOTP' placeholder='Enter your OTP' disabled={otpInput} autoComplete='off'></input>
                        <input type='submit' role='button' value='Verify OTP'></input>
                    </form>
                    {
                        error.error ? <h4 style={{color: "red"}}>{error.error}</h4> : ""
                    }
                    <p className='agreement'>By Sign In/Registration, I agree to the <a href='#'>Terms of Service</a> and <a href='#'>Privacy Policy</a></p>
                    <p className='appoinment'>OR BOOK AN APPOINTMENT USING</p>
                    <div className='nextplatform'>
                        <a href='#'>
                            <img src='https://selfregistration.cowin.gov.in/assets/images/arogya.png'></img>
                            <span>Aarogya Setu</span>
                        </a>
                        <a href='#'>
                            <img src='https://selfregistration.cowin.gov.in/assets/images/btn-umang-logo.png'></img>
                            <img className='umang' src='https://selfregistration.cowin.gov.in/assets/images/txt-umang-logo.png'></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterForVaccine
