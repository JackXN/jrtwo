//Components
import { Box, Text} from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';

//Data
import data from '../../../public/db/db';

//Styles
import styles from '../../../styles/ProjectStyles';





function index() {

    return (
<Box sx={styles.container}>
<Text as='h1' fontSize='2rem'>Projects</Text>
    <Box sx={styles.containerTwo}>
    {data.slice(0,4).map((project) => (
        <Tilt key={project.id}>
        <Box key={project.id} sx={styles.projectCard} backgroundImage={project.imgSrc}>
<Box sx={styles.projectHeader}>
<Text as='h1' fontWeight='500' fontSize='18px'>{project.title}</Text>
<Text as='p' fontWeight='400' fontSize='16px'>{project.description}</Text>
</Box>
 </Box>
            </Tilt>
    ))}
</Box>

</Box>
    )
}

export default index
