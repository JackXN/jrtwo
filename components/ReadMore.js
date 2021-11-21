import React from 'react'
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';

function ReadMore() {
    return (
        <div style={{display: 'flex',
        flexDirection:'column', alignItems:'center',
        
        }}>
             <p>Read More</p>
            <DownArrow/>
        </div>
    )
}

export default ReadMore
