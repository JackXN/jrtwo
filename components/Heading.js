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
        <Box sx={styles.container}>
            <Box sx={styles.introText}>
            <Text as='h1'>Hello, Im Jack</Text>
            <Text as='p'>Full-Stack Developer based in Salt Lake City, Utah</Text>
            </Box>
            <Box sx={styles.imgContainer}>
        <Image src={HeadImg} alt='Jack Rigan' />
            </Box>
        </Box>
        <ReadMore/>
    </>
    )
}

export default Heading
