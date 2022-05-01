import React, { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import Boolslot from './Boolslot';
import './vaccinationCenter.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from 'react-responsive-carousel';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import spinner from '../images/spinner100px.gif';
import { Link } from 'react-router-dom';

function VaccinationCenter() {

    useEffect(() => {
        fetchstates();
    }, [])

    // document.getElementById('pincode').style.border = "1px solid red"

    const [Border, setBorder] = useState({
        border: "1px solid black"
    })
    const [arr, setArr] = useState([])
    const [Loading, setLoading] = useState(false)
    const [searchShow, setSearchShow] = useState(true);
    const [searchShow1, setSearchShow1] = useState(false);
    const [searchShow2, setSearchShow2] = useState(false);
    const [borderShow, setborderShow] = useState(true);
    const [stateerror, setStateError] = useState("none")
    const [districterror, setDistrictError] = useState("none")
    const [states, setStates] = useState([])
    const [stateId, setStateId] = useState();
    const [district, setDistrict] = useState([]);
    const [districtId, setDistrictId] = useState();
    const [pincode, setPincode] = useState(0)
    const [districtOptionBtn, setDistrictOptionBtn] = useState(true)
    const [center, setCenter] = useState([])
    const [fetchresultshow, setFetchresultshow] = useState("none");

    function handleSearchInputClick1() {
        setSearchShow(false);
        setSearchShow1(true);
        setSearchShow2(false);
    }

    function handleSearchInputClick2() {
        setSearchShow(false);
        setSearchShow1(false);
        setSearchShow2(true);
    }

    function handleSearchInputClick() {
        setSearchShow1(false);
        setSearchShow2(false);
        setSearchShow(true);
    }

    function fetchstates() {
        setStateError("none");
        setDistrictError("none")
        // https://cdn-api.co-vin.in/api/v2/admin/location/states
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        // Fake api for making post requests
        let fetchRes = fetch("https://cdn-api.co-vin.in/api/v2/admin/location/states", options);
        fetchRes.then(res =>
            res.json()).then(d => {
                setDistrictOptionBtn(false);
                setStates(d.states)
                fetchdistrict()
                myFunction1()
            })
    }

    async function fetchdistrict() {
        // setDistrictError("none")
        myFunction3();
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        // Fake api for making post requests
        let fetchRes = fetch(await `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${stateId}`, options);
        fetchRes.then(res =>
            res.json()).then(d => {
                // console.log(d);

                setDistrict(d.districts)
                myFunction3();
            })
    }

    function handlefindLocation() {

    }

    function handlePincodeChange(event) {
        setPincode(event.target.value);
        setBorder({
            borderColor: "black"
        })
    }

    function handlefindPin(e) {
        e.preventDefault();
        setFetchresultshow("none");

        if (pincode.length == 6) {
            setBorder({
                borderColor: "green"
            })
            setLoading(true);
            console.log(document.getElementById('pincode').value);
            // https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=231216&date=25-04-2022
            let pincode = document.getElementById('pincode').value;
            let date = new Date;
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            if (day < 10) {
                day = "0" + day;
            }
            if (month < 10) {
                month = "0" + month;
            }

            let currentDate = day + "-" + month + "-" + year;
            let options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            }
            // Fake api for making post requests
            let fetchRes = fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=${pincode}&date=${currentDate}`, options);
            fetchRes.then(res =>
                res.json()).then(d => {
                    console.log(d);
                    setCenter(d.centers)
                    setLoading(false)
                    setFetchresultshow("block");
                })
        } else {
            setBorder({
                borderColor: "red"
            })
            console.log("Pincode to short");
        }


    }

    async function handlefindcenter(e) {
        e.preventDefault();
        let arr = []
        let arr1 = []
        for (let i = 0; i < document.querySelectorAll('.drop').length; i++) {
            let arrvalue = (document.querySelectorAll('.drop')[i].value);
            arr.push(arrvalue);
        }

        for (let i = 0; i < document.querySelectorAll('.districtOption').length; i++) {
            let arrvalue = (document.querySelectorAll('.districtOption')[i].value);
            arr1.push(arrvalue);
        }

        if (arr.find(element =>
            element == stateId)
        ) {
            if (arr1.find(element => element == districtId)) {
                setFetchresultshow("none");
                setLoading(true);
                let date = new Date;
                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();
                if (day < 10) {
                    day = "0" + day;
                }
                if (month < 10) {
                    month = "0" + month;
                }
                let currentDate = day + "-" + month + "-" + year;
                let options = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                }
                // Fake api for making post requests
                // https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=693&date=25-04-2022
                let fetchRes = fetch(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${currentDate}`, options);
                fetchRes.then(res =>
                    res.json()).then(d => {
                        setCenter(d.centers);
                        setLoading(false)
                        setFetchresultshow("block");
                    })
            } else {
                setDistrictError("block")
            }
        }
        else {
            setStateError("block");
            setDistrictError("block")
        }
    }


    function myFunction() {
        document.getElementById("dropdown").classList.toggle("show");
        fetchstates();
    }

    function myFunction4() {
        document.getElementById("dropdown3").classList.toggle("show");
        fetchdistrict()
        myFunction1()
    }

    window.onclick = function (event) {
        if (!event.target.matches('.district')) {
            if (document.getElementById("dropdown3").classList.contains("show")) {
                document.getElementById("dropdown3").classList.remove('show');
            }
        }

        if (!event.target.matches('.states')) {
            if (document.getElementById("dropdown").classList.contains("show")) {
                document.getElementById("dropdown").classList.remove('show');
            }
        }
    }


    function myFunction1() {
        document.querySelectorAll('.drop').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('selectstatename').innerHTML = event.target.getAttribute('name');
                setStateId(event.target.value);
                document.getElementById('selectdistrictname').innerHTML = "Select Your District"
            })
        })
    }

    function myFunction3() {
        document.querySelectorAll('.districtOption').forEach(item => {
            item.addEventListener('click', event => {
                document.getElementById('selectdistrictname').innerHTML = event.target.getAttribute('name');
                setDistrictId(event.target.value)
            })
        })
    }

    // import "react-multi-carousel/lib/styles.css";
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

    let z = center.map((item) => {
        return (
            item.sessions.map((data) => {
                return (data.date)
            })
        )
    })

    let newarr = []
    for (let i = 0; i < z.length; i++) {
        for (let j = 0; j < z[i].length; j++) {
            newarr.push(z[i][j]);
        }
    }

    // console.log(center);
    var newarr1 = [];
    
    function hello() {
        let result = center.map((data) => {
            return data.sessions
        })

        for (let i = 0; i < result.length; i++) {
            for (let j = 0; j < result[i].length; j++) {
                newarr1.push(result[i][j]);
            }
        }
        let mar = newarr1.filter(function (element) {
            return (element.min_age_limit < 18 && element.max_age_limit < 45)
        });

        let hel = center.map((item)=>{
            return item.sessions.map((data)=>{
                return mar.map((element)=>{
                    return ((element.session_id == data.session_id)?item.center_id:"")
                })
            })
        })

        let newar = []

        for(let i = 0; i<hel.length; i++){
            for(let j = 0; j<hel[i].length; j++){
                newar.push(hel[i][j])
            }
        }

        let newcenterid = newar.filter(function (element){
            return (element)
        })

        // console.log(newcenterid);
        // console.log(hel);
        // console.log(center);
        // console.log(newarr1);
        // console.log(result);
        // console.log(mar);
        // console.log(newar);
    }





    let newdate = [...new Set(newarr)];
    return (
        <>
            <div className='search-container'>
                <h1>Search Your Nearest Vaccination Center</h1>
                <p className='nearest-center-paragaph'>Get a preview list of the nearest centers and check availability of vaccination slots</p>
                <Link className='bookyourslot' to="/registerForVaccine">Login to your book slot</Link>
                <div className='avaliablty'>
                    <div className='searchArea'>
                        <span className={`${searchShow ? 'active' : ''}`} onClick={handleSearchInputClick}>By District</span>
                        <span className={`${searchShow1 ? 'active' : ''}`} onClick={handleSearchInputClick1}>By PIN</span>
                        <span className={`${searchShow2 ? 'active' : ''}`} onClick={handleSearchInputClick2}>On the Map</span>
                    </div>
                </div>
                <div className='search'>
                    <div>
                        <form className={`searchSection ${searchShow ? 'show' : 'hide'}`} onSubmit={handlefindcenter}>
                            <div className='states-container'>
                                <div className='states statedistrictdata' onClick={myFunction}>
                                    <span id='selectstatename'>Select Your State</span>
                                    <i className="dropdownIcon bi bi-caret-down-fill"></i>
                                </div>
                                <p className='formError' style={{ display: stateerror }}>Please Select Your State</p>
                                <div id='dropdown' className='allstates allstatedistrictdata'>
                                    <ul>
                                        {
                                            states.map((item => {
                                                return <li className='drop' key={item.state_id} name={item.state_name} value={item.state_id}>{item.state_name}</li>
                                            }))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <div className='states-container'>
                                <div className='district statedistrictdata' onClick={myFunction4}>
                                    {/* <input id='selectdistrictname' value="Select Your District"></input> */}
                                    <span id='selectdistrictname'>Select Your District</span>
                                    <i className="dropdownIcon bi bi-caret-down-fill"></i>
                                </div>
                                <p className='formError' style={{ display: districterror }}>Please Select Your District</p>
                                <div id='dropdown3' className='allstatedistrict allstatedistrictdata'>
                                    <ul>
                                        {
                                            district.map((item => {
                                                return <li className='districtOption' name={item.district_name} value={item.district_id} key={item.district_id}>{item.district_name}</li>
                                            }))
                                        }
                                    </ul>
                                </div>
                            </div>
                            <input type='submit' role='button' value="Search"></input>
                        </form>
                    </div>
                    <div>
                        <form className={`searchSection searchSection1 ${searchShow1 ? 'show' : 'hide'}`} onSubmit={handlefindPin}>
                            <div>
                                <input style={Border} type='search' id='pincode' maxLength="6" placeholder='Enter PIN Code' onChange={handlePincodeChange} name="pincode" autoComplete='off'></input>
                                {/* <p className='formError'>We must have 6 Characters but you entered {pincode.length} Characters</p> */}
                            </div>
                            <input type='submit' role='button' value="Search"></input>
                        </form>
                    </div>
                    <div>
                        <form method='get' className={`searchSection searchSection1 ${searchShow2 ? 'show' : 'hide'}`} onSubmit={handlefindLocation}>
                            <input disabled style={{ cursor: "not-allowed" }} type='search' placeholder='Enter location'></input>
                            <input disabled style={{ cursor: "not-allowed" }} type='submit' role='button' value="Search"></input>
                            <p className='formError'><b>Sorry, </b>this time location service is not availabile</p>
                        </form>
                    </div>
                </div>
                <div style={{ display: Loading ? "block" : "none" }} className='text-center'>
                    <img src={Loading ? spinner : ""} />
                </div>
                <section style={{ display: fetchresultshow }} className='fetchresult'>
                    <div className='fetchresult-container'>
                        <p className='totalfetchresult'>Slot Search Results: <span>({center.length} Center(s) Found)</span></p>
                        <div className='filter-container'>
                            <span>
                                <p>Filter results by:</p>
                            </span>
                            <span>
                                <p>Age:</p>
                                <button onClick={hello} value="12">12-14</button>
                                <button>15-18</button>
                                <button>18 & above</button>
                            </span>
                            <span>
                                <p>Dose:</p>
                                <button>Dose 1</button>
                                <button>Dose 2</button>
                                <button>Precaution Dose</button>
                            </span>
                            <span>
                                <p>Cost:</p>
                                <button>Paid</button>
                                <button>Free</button>
                            </span>
                            <span>
                                <p>Vaccine:</p>
                                <button>Covishield</button>
                                <button>Covaxin</button>
                                <button>Sputnik V</button>
                                <button>ZyCoV-D</button>
                                <button>Corbevax</button>
                            </span>
                        </div>
                        <div className='result-discription'>
                            <span><i className="bi bi-info-circle"></i></span>
                            <ul>
                                <li>Slots are updated by state vaccination centers and private hospitals everyday at 8AM, 12PM, 4PM, & 8PM.</li>
                                <li><b>Walk-in available</b> at all vaccination centers for age 12 years and above (For timings for walk-in vaccinations, please contact the vaccine center.)</li>
                            </ul>
                        </div>
                        <div className='vaccine-main-conatiner'>
                            <div className='vaccine-container'>
                                <div className='date-container'>
                                    <Carousel id="datacrouselbtn" className='date-crousel' responsive={responsive} infinite={false} shouldResetAutoplay={false}>
                                        {
                                            newdate.map((item, index) => {
                                                return (<div key={index}>{item}</div>)
                                            })
                                        }
                                    </Carousel>
                                </div>
                                {/* {
                                    center.map((item) => {
                                        return (item.map((data) => {

                                        }))
                                    })
                                } */}
                                <div className='vaccine'>
                                    {
                                        center.length > 0 ?
                                            center.map((item) => {
                                                return (
                                                    <div className='vaccine-details' key={item.center_id}>
                                                        <div className='vaccine-address'>
                                                            <h6>{item.name}</h6>
                                                            <p>{item.address}, {item.district_name}, {item.state_name}, {item.pincode}</p>
                                                            <h5>{item.sessions[0].vaccine}<span>{item.fee_type}</span></h5>
                                                            <p className='age'>age: {item.sessions[0].min_age_limit} - {item.sessions[0].max_age_limit} </p>
                                                        </div>
                                                        <Carousel id="slotscrouselbtn" className='date-crousel' responsive={responsive} infinite={false} shouldResetAutoplay={false}>
                                                            {
                                                                item.sessions.map((data, index) => {
                                                                    return (
                                                                        <div key={data.session_id}>
                                                                            <div className='slots'><span className='dosename'>#1Dose | </span>
                                                                                {
                                                                                    data.available_capacity_dose1 > 0 ? <span className='slot'>{data.available_capacity_dose1} Slots</span> : <span className='bookedslot'>Booked</span>
                                                                                }
                                                                            </div>
                                                                            <div className='slots'><span className='dosename'>#2Dose | </span>
                                                                                {
                                                                                    data.available_capacity_dose2 > 0 ? <span className='slot'>{data.available_capacity_dose2} Slots</span> : <span className='bookedslot'>Booked</span>
                                                                                }
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Carousel>
                                                    </div>
                                                )
                                            })
                                            :
                                            <h6 style={{ textAlign: center }}>No vaccination center are availabile on this time</h6>



                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
            <Boolslot />
            {/* <Carousel autoPlay={false} thumbWidth={20} width="100%" dynamicHeight="10%">
                <div>
                    <img src="https://www.cowin.gov.in/assets/images/Precaution_dose.svg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.cowin.gov.in/assets/images/Date_Correction.svg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.cowin.gov.in/assets/images/Children_Vaccination.svg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
        </>
    )
}

export default VaccinationCenter;
