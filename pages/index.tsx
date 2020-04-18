import React from 'react';
import Head from 'next/head'
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
    
      <div className='login-container'> 
        <LoginForm />
      </div>

      <style jsx>{`
     
      .login-container {
        z-index: 2;
        background-color: rgb(30, 140, 248);
        background-image: url("./henry-chill.png"),url("./buoy.png"),url("./sand.png");
        background-size: auto 40vh, auto 20vh, auto 50vh, contain;
        min-height: 100vh;
        position: absolute;
        width: 100%;
        background-position: right 5% top 50%, left 5% bottom 5%, left top, center center;
        background-repeat: no-repeat;
      }

      @media only screen and (max-width: 1024px) {
        .login-container {
          background-size: auto 25vh, auto 15vh, auto 40vh, contain;
          background-position: right 5% bottom 5%, left 5% bottom 5%, left top, center center;
        }
      }
      
    `}</style>
  </>
);

export default Home
