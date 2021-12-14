// Components
import { Box, Text, Image, Button } from "@chakra-ui/react";
import Header from "../../components/containers/Projects/Header";
import Nav from '../../components/containers/Projects/Nav';
import Head from "next/head";
// import Image from 'next/image'


// Icons
import {DiJavascript1 as Javascript} from 'react-icons/di';


// Styles
import styles from "../../styles/Details";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://my-json-server.typicode.com/JackXN/API-Rigan/projects"
  );
  const data = await res.json();
  // console.log(data)
  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    `https://my-json-server.typicode.com/JackXN/API-Rigan/projects/${id}`
  );
  const data = await res.json();
  return {
    props: { project: data },
  };
};
const ProjectDetails = ({ project }) => {
  return (
    <>
      <Head>
        <title>Jack Rigan - {project.title}</title>
      </Head>
      <Box style={{ height: "100%"}}>
        <Header project={project}/>
        <Box sx={styles.wrapper}>
          <Box sx={styles.container}>
            <Box sx={styles.containerOne}>
            <Image src={project.descriptionImgOne} alt={project.title} height='350px'/>
            <Box sx={styles.containerOneDescription}>
              <Text as='h1' fontSize='20px' fontWeight='bold'>{project.descriptionTitleOne}</Text>
              <Text as='p'>{project.descriptionOne}</Text>
            </Box>
           <Box sx={styles.containerTwo}>
            <Box sx={styles.containerTwoDescription}>
              <Text as='h1' fontSize='20px' fontWeight='bold'>{project.descriptionTitleTwo}</Text>
              <Text as='p'>{project.descriptionTwo}</Text>
            </Box>
            {project.descriptionImgTwo ? <Image src={project.descriptionImgTwo} alt={project.title} height='350px'/> : null}
           </Box>
            </Box>
          </Box>
    <Box sx={styles.buttonContainer}>
      <Button href='#' bg="rgba(0,0,0,0.3)" mr='20px'>Github</Button>
      <Button href='#' bg="rgba(0,0,0,0.3)">Live View</Button>
    </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProjectDetails;
