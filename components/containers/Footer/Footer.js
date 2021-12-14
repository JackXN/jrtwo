
//Components
import {Box, UnorderedList, ListItem, Text, Link} from '@chakra-ui/react';

//Styles
import styles from '../../../styles/FooterStyles';


//Icons
import {
    AiFillLinkedin as LinkedIn,
    AiOutlineInstagram as Instagram,
    AiFillGithub as Github,
  } from "react-icons/ai";

function Footer() {
    return (
        <Box sx={styles.footer}>
        <UnorderedList sx={styles.listContainer}>
          <ListItem sx={styles.listItem} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='50'>
            <Link href="https://www.linkedin.com/in/jack-rigan/" >
              <LinkedIn />
            </Link>
          </ListItem>
          <ListItem sx={styles.listItem} data-aos='fade-down' data-aos-duration='1000' data-aos-delay='50'>
            <Link href="https://github.com/JackXN">
              <Github />
            </Link>
          </ListItem>
          <ListItem sx={styles.listItem} data-aos='fade-up' data-aos-duration='1000' data-aos-delay='50'>
            <Link href='https://www.instagram.com/jackuhhuh/'>
              <Instagram/>   
            </Link>
          </ListItem>
        </UnorderedList>
        <Text as="h3" fontSize='13px' fontFamily='Catamaran,sans-serif'>Copyright @2021 Jack Rigan. All Rights Reserved.</Text>
      </Box>
    )
}

export default Footer
