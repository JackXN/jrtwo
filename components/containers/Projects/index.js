//Components
import { Box, Text, Link} from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';

//Data
import data from '../../../public/db/db';

//Styles
import styles from '../../../styles/ProjectStyles';

//! UPDATE LINK WITH PROPER PATH


export const getStaticProps = async () => {
    const res = await fetch('https://my-json-server.typicode.com/JackXN/API-Rigan/projects')
const data = await res.json()

return {
    props: {projects:data}
}

}



function index({project}) {

    return (
<Box sx={styles.container} id='project'>
<Text as='h1' fontSize='32px' margin='20px' fontWeight='700'> My Projects</Text>
    <Box sx={styles.containerTwo}>
    {data.slice(0,4).map((project) => (
        <Tilt key={project.id}>
            <Link href='/projects/id'>
        <Box key={project.id} sx={styles.projectCard} style={{backgroundImage: `url(${project.imgSrc})`}} data-aos='zoom-in' data-aos-duration='1000' data-aos-delay='50'>
<Box sx={styles.projectHeader}>
<Text as='h1' fontWeight='500' fontSize='18px'>{project.title}</Text>
<Text as='p' fontWeight='400' fontSize='16px'>{project.description}</Text>
</Box>
 </Box> 
 </Link>
            </Tilt>
    ))}
</Box>

</Box>
    )
}

export default index
