import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';

import AOS from "aos";
import 'aos/dist/aos.css';
AOS.init()

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "blue",
    },
    primary: {
    'orange': '#F47F39',
      'gray': '#787878',
      'white': '#fffff'
    }
  },
})



function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
 <Component {...pageProps} />
  </ChakraProvider>
)
}


export default MyApp
