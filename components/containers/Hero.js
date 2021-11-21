import React from 'react'

// Components
import {Box, Text} from '@chakra-ui/react';
import Heading from '../Heading';

// Styles
import styles from '../../styles/HeroStyles';

function Hero() {
    return (
<Box sx={styles.container}>
<Heading/>
</Box>        
    )
}

export default Hero
