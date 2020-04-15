import React from 'react';
import Head from 'next/head'
import Title from '../components/Title';
import Link from 'next/link';

const linkStyle = {
    color: 'red'
  };

const Home: React.FC<{}> = () => (
    <div className="container">
        <Head>
            <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
            <link rel="icon" href="/easyblue.ico" />
        </Head>

        <Title text="Test frontend." />
        <Link href="/dashboard">
            <a style={linkStyle}>Dashboard page</a>
        </Link>
    </div>
);

export default Home
