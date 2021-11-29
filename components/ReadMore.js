
import {HiOutlineArrowSmDown as DownArrow} from 'react-icons/hi';
import {Link} from 'react-scroll';

function ReadMore() {
    return (
        <div style={{display: 'flex',
        flexDirection:'column', alignItems:'center',color: 'white', cursor: 'pointer',
        }} data-aos='fade-up' data-aos-duration='500' data-aos-delay='50'>
             <Link to='project' smooth={true} duration={1000}><p>Read More</p></Link>
            <DownArrow/>
            
        </div>
    )
}

export default ReadMore
