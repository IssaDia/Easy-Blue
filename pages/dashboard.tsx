import React from 'react';

const Dashboard: React.FC<{}> = () => (
  
    <div className="container">
    <h1>Hello Next.js</h1>
    <p>Let's explore different ways to style Next.js apps</p>
    <style jsx>{`
      .container {
        margin: 50px;
      }
      p {
        color: blue;
      }
    `}</style>
    <style jsx global>{`
      body {
        background: #f7f7f7;
      }
    `}</style>
  </div>
  
    );
 

  export default Dashboard;