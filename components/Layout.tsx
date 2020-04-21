import Head from "next/head"

function Layout (props)  {
  return <>
  <Head>
      <title>Easyblue, assureur 100% digital pour les entrepreneurs</title>
      <link rel="icon" href="/easyblue.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    </Head>
   {props.children}
   </>
    
}

export default Layout;