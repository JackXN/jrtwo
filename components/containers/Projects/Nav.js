
import {Box, Link} from '@chakra-ui/react';


function Nav({project}) {
    return (
       <Box sx={styles.container} background={project.backgroundColor}>
           <Link href='/'>All Projects</Link>
       </Box>
    )
}

const styles = {
    container: {
padding:'20px',
color: 'white',
fontFamily: 'Catamaran, sans-serif'
    }
}


export default Nav
