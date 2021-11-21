import React from 'react'
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';

function ReadMore() {
    return (
        <div style={{display: 'flex',
        flexDirection:'column', alignItems:'center',color: 'white',

        }}>
             <p>Read More</p>
            <DownArrow/>
        </div>
    )
}

export default ReadMore
