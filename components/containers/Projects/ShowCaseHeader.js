
// Components
import {Box, UnorderedList, ListItem, Icon} from '@chakra-ui/react';


//! REMEMBER TO REPLACE TEST ICONS WITH ICONS IN THE JSON DATA FILE
// Icons
import {IoLogoJavascript as Javascript} from 'react-icons/io';
import {DiReact as React, DiCss3 as CSS3} from 'react-icons/di';
import {SiRedux as Redux} from 'react-icons/si';


function ShowCaseHeader({project}) {
    return (
       <Box sx={styles.wrapper}>
           <Box sx={styles.container}>
           <h2>Introducing Project</h2>
           <h1>{project.title}</h1>
           <UnorderedList sx={styles.iconList}>
               <ListItem mr='10px'>{project.iconOne ? <Redux/> : null}</ListItem>
           </UnorderedList> 
           </Box>
       </Box>
    )
}

const styles = {
    container: {
display: 'flex',
flexDirection: 'column',
justifyContent: 'center',
alignItems: 'center',
textAlign: 'center',

h2: {
    fontFamily:'Montserrat, sans-serif',
    fontSize: '16px',
    color:'000000',
    fontWeight: '400',
    textTransform: 'uppercase'

},

h1: {
    fontFamily: 'Catamaran, sans-serif',
    fontSize: '48px',
    fontWeight: '700',
}
    },
    wrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#EEEEEE',
        padding: '20px'
    },
    iconList: {
        display: 'flex',
        listStyle: 'none',
        alignItems: 'center',
        flexWrap: 'wrap',
        fontSize: '20px'
    }
}

export default ShowCaseHeader
