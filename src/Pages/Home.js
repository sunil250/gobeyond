import React from 'react'
import Layout from '../Components/Layout/Layout'
import Section from '../Components/Section'
import Homevideo from '../Components/Homevideo'

const Home = () => {
    return (
        <Layout
            title={"- Home"}
        >
            <Homevideo />
            <Section />
        </Layout>
    )
}

export default Home