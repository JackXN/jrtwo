import React from 'react'
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';

function ReadMore() {
    return (
        <div style={{display: 'flex',
        flexDirection:'column', alignItems:'center',color: 'white',
        }} data-aos='fade-down' data-aos-duration='2000' data-as-delay='50'>
             <p>Read More</p>
            <DownArrow/>
        </div>
    )
}

export default ReadMore
