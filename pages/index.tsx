import React from 'react'
import LoginForm from 'components/LoginForm'
import Layout from 'components/Layout';

function Home() {

  return <>
    <Layout>
      <div className='login-container'>
        <LoginForm />
      </div>
      <style jsx>{`
      .login-container {
        z-index: 2;
        background-color: rgb(30, 140, 248);
        background-image: url("./img/icons/henry-chill.png"),url("./img/icons/buoy.png"),url("./img/icons/sand.png");
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
    </Layout>
  </>
};

export default Home
