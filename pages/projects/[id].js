// Components
import { Box, Text } from "@chakra-ui/react";
import Header from '../../components/containers/Projects/Header';

// Styles
import styles from "../../styles/Details";

const ProjectDetails = ({projects}) => {
  return (
      <Box style={{height: '100vh'}}>
  <Header projects={projects}/>
  <Box sx={styles.wrapper}>
<Box sx={styles.container}>

</Box>



  </Box>
  </Box>
  );
};

export default ProjectDetails;
