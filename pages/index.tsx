import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';

const Home: React.FC<{}> = () => (
    <div className="container">
        <Head>
        <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
            <link rel="icon" href="/easyblue.ico"/>
        </Head>

        <Title text="Test frontend."/>
    </div>
);

export default Home
