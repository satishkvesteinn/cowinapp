import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {

    const Vaccination_services = [
        {
            id: 1,
            url: "/",
            linkname: "Register Members"
        },
        {
            id: 2,
            url: "/",
            linkname: "Search Vaccination Centers"
        },
        {
            id: 3,
            url: "/",
            linkname: "Book Vaccination Slots"
        },
        {
            id: 4,
            url: "/",
            linkname: "Manage Appointment"
        },
        {
            id: 5,
            url: "/",
            linkname: "Download Certificate"
        }
    ]


    const platforms = [
        {
            id: 1,
            url: "/",
            linkname: "Co-WIN International"
        },
        {
            id: 2,
            url: "/",
            linkname: "Vaccinator"
        },
        {
            id: 3,
            url: "/",
            linkname: "Department Login"
        },
        {
            id: 4,
            url: "/",
            linkname: "Verify Certificates"
        },
        {
            id: 5,
            url: "/",
            linkname: "Vaccination Statistics"
        }
    ]

    const resource = [
        {
            id: 1,
            url: "/",
            linkname: "How To Get Vaccinated"
        },
        {
            id: 2,
            url: "/",
            linkname: "Dos and Don'ts"
        },
        {
            id: 3,
            url: "/",
            linkname: "Overview"
        },
        {
            id: 4,
            url: "/",
            linkname: "API Guidelines"
        },
        {
            id: 5,
            url: "/",
            linkname: "Open API's"
        },
        {
            id: 6,
            url: "/",
            linkname: "Grievance Guidelines"
        }
    ]

    const support = [
        {
            id: 1,
            url: "/",
            linkname: "Frequently Asked Questions"
        },
        {
            id: 2,
            url: "/",
            linkname: "Certificate Corrections"
        }
    ]

    const contact = [
        {
            id: 1,
            url: "/",
            contact_us: "Frequently Asked Questions"
        },
        {
            id: 2,
            url: "/",
            linkname: "Certificate Corrections"
        }
    ]

    return (
        <>
            <footer>
                <div className='footer-container'>
                    <div className='footer-left-container'>
                        <div className='footer-heading'>
                            <h2>VACCINATION SERVICES</h2>
                            <ul>
                                {
                                    Vaccination_services.map((item => {
                                        return (
                                            <li key={item.id}><Link to={item.url}>{item.linkname}</Link></li>
                                        )
                                    }))
                                }
                            </ul>
                        </div>
                        <div className='footer-heading'>
                            <h2>PLATFORMS</h2>
                            <ul>
                                {
                                    platforms.map((item => {
                                        return (
                                            <li key={item.id}><Link to={item.url}>{item.linkname}</Link></li>
                                        )
                                    }))
                                }
                            </ul>
                        </div>
                        <div className='footer-heading'>
                            <h2>RESOURCES</h2>
                            <ul>
                                {
                                    resource.map((item => {
                                        return (
                                            <li key={item.id}><Link to={item.url}>{item.linkname}</Link></li>
                                        )
                                    }))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className='footer-right-container'>
                        <div className='footer-right-left-container'>
                            <div className='footer-heading'>
                                <h2>SUPPORT</h2>
                                <ul>
                                    {
                                        support.map((item => {
                                            return (
                                                <li key={item.id}><Link to={item.url}>{item.linkname}</Link></li>
                                            )
                                        }))
                                    }
                                </ul>
                            </div>
                            <div className='footer-heading'>
                                <h2>CONTACT US</h2>
                                <ul>
                                    <li><Link to='tel:+917388327450'>Helpline: +91-11-23978046 (Toll Free - 1075 )</Link></li>
                                    <li><Link to='#'>Technical Helpline: 0120-4783222</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer-right-right-container'>
                            <div className='footer-heading'>
                                <h2>CHILD</h2>
                                <ul>
                                    <li><Link to='tel: 1098'>1098</Link></li>
                                </ul>
                            </div>
                            <div className='footer-heading'>
                                <h2>MENTAL HEALTH</h2>
                                <ul>
                                    <li><Link to='tel: 08046110007'>08046110007</Link></li>
                                </ul>
                            </div>
                            <div className='footer-heading'>
                                <h2>SENIOR CITIZENS</h2>
                                <ul>
                                    <li><Link to='tel: 14567'>14567</Link></li>
                                </ul>
                            </div>
                            <div className='footer-heading'>
                                <h2>NCW</h2>
                                <ul>
                                    <li><Link to='tel: 7827170170'>7827170170</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
