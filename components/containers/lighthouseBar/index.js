import React from 'react'
import {GiLighthouse as Lighthouse} from 'react-icons/gi';
import {Box, Tooltip} from'@chakra-ui/react'
import Link from 'next/link';

function index() {
    return (
        <Box sx={styles.lightHouseContainer}>
        <Tooltip label='The Lighthouse Project' placement='auto'>
            <span>
                <Link href='https://lighthouse-web.vercel.app/' passHref>
                    <a target='__blank'>
<Lighthouse color='white' _hover={{color: 'red'}} style={{color:'#ffff', marginTop:'20px',}} />
</a>
</Link>
</span>
</Tooltip>
  </Box>
    )
}

const styles = {
    lightHouseContainer : {
     backgroundColor: '#FF6668',
     fontSize: '30px',
        textAlign: 'center',
        alignItems:'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        "&:hover": {
            cursor: 'pointer',
            transition: "transform 250ms",
            color: "red",
          },

      
    },

  
}

export default index
