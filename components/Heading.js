// Media
import HeadImg from '../public/finaljackImage.png'

//Styles
import styles from '../styles/HeadingStyles';

// Components
import {Box, Text} from '@chakra-ui/react';
import Image from 'next/image';
import ReadMore from './ReadMore';
import Marginner from './containers/Marginner';
import { Tooltip } from '@chakra-ui/react'
import {GiLighthouse as Lighthouse} from 'react-icons/gi';


function Heading() {

    return (
        <>
              {/* <Box sx={styles.lightHouseContainer}>
                  <Tooltip label='The Lighthouse Project' placement='bottom'>
<Lighthouse color='white'/>
</Tooltip>
            </Box> */}
        <Box sx={styles.container}>
            <Box sx={styles.introText}>
            <Text as='h1' 
            data-aos='fade-left' data-aos-duration='2000' data-aos-delay='50'
            >Hello, Im Jack Rigan</Text>
            <Text as='p' data-aos='fade-right' data-aos-duration='2000' data-aos-delay='50'>Full-Stack Developer based in Salt Lake City, Utah</Text>
            </Box>
            <Box sx={styles.imgContainer}>
        <Image src={HeadImg} alt='Jack Rigan' data-aos='zoom-in' data-aos-duration='2000' data-aos-delay='50'/>
            </Box>
        </Box>
        <ReadMore/>
    </>
    )
}



export default Heading
