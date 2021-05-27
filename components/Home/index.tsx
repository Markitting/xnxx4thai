import { Container } from '@material-ui/core'
import Layout from '../Layout'
import { Content, Keyword } from '../../interfaces/product'

import Announcemobile from '../Announcemobile'

// import React, { useEffect } from 'react'


import Footer from '../Footer'
import React from 'react'

import Category from '../Category'
// import { useRouter } from 'next/router'



const Home = (props: any) => {

    // const router = useRouter()
    const { data } = props.data
    const contents: Content[] = data.contents.datas
    const keywords: Keyword[] = data.keywords.datas
    // const content = data.content;

    const items = []


    // useEffect(() => {
    //     router.push('/Product')
 
    // })

    console.log(data.contents.datas)

    for (const [index, value] of contents.entries()) {
        value.content_title

        items.push(<li key={index}>{value.content_title}</li>)
    }

    return (
        
        <Layout title="Home | KaideeWa.com">
            <link rel="shortcut icon" href="/favicon.ico" />
           <Category/>
            
            
            <Container maxWidth="lg" className="container">
               
                <Announcemobile contents={contents}/>
                
                
            </Container>
            <Footer/>
        </Layout>

    )
}

export default Home
