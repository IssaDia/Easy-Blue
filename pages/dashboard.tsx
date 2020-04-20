import React, { useEffect } from 'react'
import CustomNavbar from 'components/CustomNavbar'
import Head from 'next/head'
import Card from 'components/Card'
import Timeline from 'components/Timeline'
import cookies from 'next-cookies'
import { store } from 'react-notifications-component'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
function Dashboard() {

  /**
  * Notification when user enters the Dashboard (TO DO : personnalize it!)
  */
  useEffect(() => {

    store.addNotification({
      title: "Bienvenue chez Easy Blue!",
      message: "Découvrez toutes les fonctionnalités mises en place pour votre comfort",
      type: "info",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 3000,
        onScreen: true
      }
    });

  }, [])

  return <>
    <Head>
      <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
      <link rel="icon" href="/easyblue.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;800&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Bree+Serif&display=swap" rel="stylesheet"></link>
    </Head>
    <ReactNotification />
    <CustomNavbar />
    <div className='dashboard-container'>
      <h1 className='dashboard-title'>Bienvenue sur votre espace personnel !</h1>
      <p className='dashboard-subtitle'>Retrouvez ci-dessous la liste des contrats auxquels vous avez souscrit.</p>
      <div className="col-sm-6 my-auto">
        <div id='card-style'>
          <Card name='user' title='Moi et ma societé' buttonText='Voir mes informations' cardText='341 Chasity Overpass France' subtitle='company_company (8866897594584437374)'></Card>
        </div>
        <div id='card-style'>
          <Card name='cb' title='Mon mode de paiement' buttonText='Editer mon mode de paiement' cardText='**** **** ****' subtitle='CB visa'></Card>
        </div>
        <div id='card-style'>
          <Card name='doc' title='Mes derniéres quittances' buttonText='Afficher toutes mes quittances' subtitle='avril 2017'></Card>
        </div>
      </div>
      <div className="col-sm-6">
        <Timeline />
      </div>
    </div>

    <style jsx>{`
  .dashboard-container {
    
    background: #f7f7f7;
    height : 2000px;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    .dashboard-container {
      width: fit-content;
    }
  }

  .dashboard-title {
    width :100%;
    display: block;
    padding-top :40px;
    margin-bottom : 20px;
    vertical-align:middle;
    color : #2F87F1;
    font-style : bold;
    font-family: 'Baloo Tamma 2', cursive;
  }

  .dashboard-subtitle {
    color : #9BA7B1;
    font-family: 'Baloo Tamma 2', cursive;
  }

  #card-style {
    margin-top:30px;
    margin-bottom: 40px;
  }
`}</style>
  </>

}

  /**
  * Tried to grab the cookie on load to give or not the access to dashboard (To DO : find a way to secure Dashboard page)
  */
Dashboard.getInitialProps = async (ctx) => {

  const userCookie = cookies(ctx);
  if (userCookie) {
    return { auth: userCookie.auth || '' }
  }
  else {
    return {}
  }
}

export default Dashboard;
