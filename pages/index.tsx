import React from 'react';
import Head from 'next/head'
import Image from 'components/Image';
import LoginForm from 'components/LoginForm';


const Home: React.FC<{}> = () => (
  <>
    <Head>
      <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
      <link rel="icon" href="/easyblue.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </Head>
    
      <div>
        <Image name='sand' width='300px'> </Image>
      </div>
      <LoginForm />
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
