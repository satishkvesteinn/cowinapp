import React, { useState } from 'react';
import './boolslot.css'
import Bookslotdata from './Bookslotdata';
import Abha from './Abha';


function Boolslot() {
    return (
        <>
            {
                Bookslotdata.map((data, id) => {
                    return (
                        <div className='book-container' style={{backgroundColor: data.backgroundcolor}} key={id}>
                            <div className='bookslot-container'>
                                <div className={`book-container-left ${data.aboutslot.direction}`}>
                                    <h1>{data.aboutslot.title}</h1>
                                    <p>{data.aboutslot.paragraph}</p>
                                    <a href={data.aboutslot.url}>{data.aboutslot.buttonvalue}</a>
                                </div>
                                <div className={`book-container-right ${data.aboutimg.direction}`}>
                                    <img src={data.aboutimg.imgurl}></img>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <Abha/>
        </>
    )
}

export default Boolslot
