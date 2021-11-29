
import {Box, Link} from '@chakra-ui/react';


function Nav() {
    return (
       <Box sx={styles.container}>
           <Link href='/'>All Projects</Link>
       </Box>
    )
}



const styles = {
    container: {
background: '#009BFF',
padding:'20px',
color: 'white',
fontFamily: 'Catamaran, sans-serif'
    }
}


export default Nav
