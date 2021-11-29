import {Box, UnorderedList, ListItem} from '@chakra-ui/react';
import {DiReact as React} from 'react-icons/di'

function ShowCaseHeader() {
    return (
       <Box sx={styles.wrapper}>
           <Box sx={styles.container}>
           <h2>Introducing Project</h2>
           <h1>uitodo</h1>
           <Box style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', textAlign: 'center'}}>
               <ul sx={styles.techList} style={{display: 'flex', listStyle: 'none', fontSize: '24px' }}>
<li><React/></li>
<li><React/></li>
<li><React/></li>
<li><React/></li>
<li><React/></li>
               </ul>
           </Box>
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
    }
}

export default ShowCaseHeader
