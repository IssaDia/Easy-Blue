import React from 'react';
import { NextPageContext } from 'next';
import CustomNavbar from 'components/CustomNavbar';
import Head from 'next/head'
import Card from 'components/Card';




function Dashboard({ cookie }) {


  return cookie ?

    <>
      <Head>
        <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
        <link rel="icon" href="/easyblue.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;800&display=swap" rel="stylesheet"></link>
      </Head>

      <CustomNavbar />
      <div className='dashboard-container'>
        <h1 className='dashboard-title'>Bienvenue sur votre espace personnel !</h1>
        <p className='dashboard-subtitle'>Retrouvez ci-dessous la liste des contrats auxquels vous avez souscrit.</p>
        <div className="col-sm-6 my-auto">
          <div id='card-style'>
            <Card name='user' title='Moi et ma societé' buttonText='Voir mes informations' cardText='341 Chasity Overpass, Runolfsson Walks 33282 Johnsmouth, France' subtitle='company_company (8866897594584437374)'></Card>
          </div>
          <div id='card-style'>
            <Card name='cb' title='Mon mode de paiement' buttonText='Editer mon mode de paiement' cardText='**** **** ****' subtitle='CB visa'></Card>
          </div>
          <div id='card-style'>
            <Card name='doc' title='Mes derniéres quittances' buttonText='Afficher toutes mes quittances' subtitle='avril 2017'></Card>
          </div>
        </div>
      </div>
      <style jsx>{`
  .dashboard-container {
    
    background: #f7f7f7;
    height : 2000px;
    text-align: center;
  
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
    margin-top: 40px;
    margin-bottom: 40px;
  }


`}</style>
    </>







    : <div>no cookie</div>
}

Dashboard.getInitialProps = async (ctx: NextPageContext) => {
  const userCookie = ctx.req?.headers.cookie;
  return {
    cookie: userCookie
  }


}

export default Dashboard;
