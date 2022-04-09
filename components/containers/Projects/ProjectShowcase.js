// Components
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/ProjectHeader";

// Media
import HeadImg from "../../../public/HeadImg.png";
import Header from "./Header";

function ProjectShowcase() {
  return (
    <>
      <Header />
      <Box sx={styles.container}>
        <Box sx={styles.showcaseOne}>
          <Box sx={styles.imageContainer}>
            <Image src={HeadImg} alt="project showcase" />
          </Box>
          <Box sx={styles.description}>
            <Text>Project description placeholder shit</Text>
            
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default ProjectShowcase;
