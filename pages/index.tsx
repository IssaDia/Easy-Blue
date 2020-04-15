import React from 'react';
import Head from 'next/head'
import Image from 'components/Image';
import Form from 'components/Form';


const Home: React.FC<{}> = () => (
    <>
        <Head>
            <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
            <link rel="icon" href="/easyblue.ico" />
        </Head>
        <div>
            <Image name='sand' width='300px'> </Image>
        </div>
        <Form />
        <div className='henry'>
            <Image name='henry-chill' width='200px'> </Image>
        </div>
        <div>
            <Image name='buoy' width='100px'></Image>
        </div>

        <style jsx global>{`
      body {
        background: #336FF2;
      }
    `}</style>
        <style jsx>{`
      .henry {
        text-align: right;
      }
    `}</style>

    </>
);

export default Home
