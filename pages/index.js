/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router';
import Head from 'next/head';
//import Header from "../Components/Header"
import Home from "../Components/Home"

function index() {
  const router = useRouter();
  
  return (
    <>
    <Head>
      <title>E-book</title>
    </Head>
    {/*Header*/}
 
    <main>
      {/*Sidebar*/}
      <Home/>
      {/*Feed*/}
      {/*Widgets*/}
    </main>
                            </>
  )
}

export default index