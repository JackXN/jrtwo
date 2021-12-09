// Components
import { Box, Text, Image } from "@chakra-ui/react";
import Header from '../../components/containers/Projects/Header';
import Head from 'next/head';

// Styles
import styles from "../../styles/Details";



export const getStaticPaths = async () => {

const res = await fetch('https://my-json-server.typicode.com/JackXN/API-Rigan/projects')

const data = await res.json();
// console.log(data)
const paths = data.map((item) => {
  return {
    params: {id: item.id.toString()}
  }
});
return {
  paths,
  fallback: false
}
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://my-json-server.typicode.com/JackXN/API-Rigan/projects/${id}`)

const data = await res.json();
return {
  props: {project:data}
}
}

const ProjectDetails = ({project}) => {
  return (
    <>

    <Head>
      <title>Jack Rigan - {project.title}</title>
    </Head>
      <Box style={{height: '100vh'}}>
  <Header project={project}/>
  <Box sx={styles.wrapper}>
<Box sx={styles.container}>
<Image src={project.logo} alt={project.title}/>



</Box>



  </Box>
  </Box>
  </>
  );
};

export default ProjectDetails;
