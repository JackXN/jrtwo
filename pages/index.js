
//Components
import Hero from '../components/containers/Hero';
import Skills from '../components/containers/Skills/Skills';
import Marginner from '../components/containers/Marginner';
import Projects from '../components/containers/Projects/index';
import Head from 'next/head'
import Footer from '../components/containers/Footer/Footer';
import LighthouseBar from '../components/containers/lighthouseBar/index';
import {useEffect} from 'react';

import AOS from 'aos';


export default function Home() {

useEffect(() => {
  AOS.init({})
}, [])

  retuzrn (

    <>
<Head>
  <meta charset='utf-8'/>
  <meta content='IE=edge'/>
    <title>Jack Rigan</title>
    <meta property='og:title' content='Jack Rigan'/>
    <meta name='instagram:title' content='Jack Rigan'/>
    <meta name='og:description' content='full-stack software developer and graphic designer'/>
    <meta property='og:type' content='website'/>
    <meta property='og:url' content='https://www.jackrigan.com'/>
    <meta property='og:image' content='https://www.jackrigan.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FfinaljackImage.190eff5a.png&w=3840&q=75'/>
    <meta property='author' content='Jack Rigan'/>
    <meta property='og:title' content='Full-Stack Web Developer'/>  
    <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
    
    
{/* AOS */}
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
</Head> 

<LighthouseBar/>
<Hero/>
<Marginner/>
<Skills/>
<Projects/>
<Footer/>




    </>
  )
}
