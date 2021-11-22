// Media
import HeadImg from '../public/Images/HeadImg.png'

//Styles
import styles from '../styles/HeadingStyles';

// Components
import {Box, Text, Grid} from '@chakra-ui/react';
import Image from 'next/image';
import ReadMore from './ReadMore';




function Heading() {

    return (
        <>
        <Box sx={styles.container} >
            <Box sx={styles.introText}>
            <Text as='h1' data-aos='fade-left' data-aos-delay='50' data-aos-duration='2000'>Hello, Im Jack</Text>
            <Text as='p' data-aos='fade-right' data-aos-duration='2000' data-aos-delay='50'>Full-Stack Developer based in Salt Lake City, Utah</Text>
            </Box>
            <Box sx={styles.imgContainer}>
        <Image src={HeadImg} alt='Jack Rigan' data-aos='flip-left' data-aos-delay='50' data-aos-duration='2000' />
            </Box>
        </Box>
        <ReadMore/>
    </>
    )
}

export default Heading
