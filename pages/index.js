import Head from 'next/head'
import Image from 'next/image'



//Components
import Hero from '../components/containers/Hero';
import {Box } from '@chakra-ui/react';
import Skills from '../components/containers/Skills/Skills';
import Marginner from '../components/containers/Marginner';
import Projects from '../components/containers/Projects/index';

export default function Home() {
  return (

    <>

{/* Make sure to configure meta tags before prod deployment */}
<Head>
    <title>Jack Rigan</title>
    <meta name='description' content='Full-Stack web developer'/>
    <meta property='og:title' content='Welcome to my website'/>  
  </Head>
<Hero/>
<Marginner/>
<Skills/>
<Projects/>




    </>
  )
}
