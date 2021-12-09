
// Components
import {Box, UnorderedList, ListItem, Icon} from '@chakra-ui/react';



//Icons
import {DiReact as Javascript} from 'react-icons/di'




function ShowCaseHeader({project}) {
    return (
       <Box sx={styles.wrapper}>
           <Box sx={styles.container}>
           <h2>Introducing Project</h2>
           <h1>{project.title}</h1>
           <Box style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center', textAlign: 'center'}}>
            <Icon as={project.iconTest}/>
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
