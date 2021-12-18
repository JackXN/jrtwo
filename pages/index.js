
//Components
import Hero from '../components/containers/Hero';
import Skills from '../components/containers/Skills/Skills';
import Marginner from '../components/containers/Marginner';
import Projects from '../components/containers/Projects/index';
import Head from 'next/head'
import Footer from '../components/containers/Footer/Footer';

import {useEffect} from 'react';

import AOS from 'aos';


export default function Home() {

useEffect(() => {
  AOS.init({})
}, [])

  return (

    <>
<Head>
    <title>Jack Rigan</title>
    <meta name='description' content='Jack Rigan is a fullstack developer that enjoys'/>
    <meta property='og:title' content='Full-Stack Web Developer'/>  
    <link rel="shortcut icon" href="/images/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
    
{/* AOS */}
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
</Head>
<Hero/>
<Marginner/>
<Skills/>
<Projects/>
<Footer/>




    </>
  )
}
