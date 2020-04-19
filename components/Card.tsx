import React from 'react';

interface Props {
    name : string,
    title : string,
    buttonText: string,
    cardText?: string,
    subtitle : string
 
}

const Card: React.FC<Props> = ({name, title, buttonText, cardText, subtitle }) => (
    <>
        <div className="card-container">
            <div className="upper-container">
                <div className="image-container">
                <img src={`../img/icons/${name}.svg`} alt={`${name}`} />
                </div>
            </div>

            <div className="lower-container">
                <div>
                    <h3>{title}</h3>
                    
                </div>
                <div className={`${name}`}>
                  <p>{subtitle}</p>
                    <p>{cardText}</p>
                </div>
                <div>
                    <a href="#" className="btn">{buttonText}</a>

                </div>
            </div>
        </div>

                <style jsx>{`
  

  
  .card-container{
  
    width : 450px;
    background: #FFF;
    border-radius: 8px;
    box-shadow: 0px 1px 10px 1px #405070;
    overflow: hidden;
    display: inline-block;
    
  }


  .upper-container{
    height: 150px;
    background: #EAEFF8;
    
  }
  
  .image-container{
    
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 5px;
    transform: translate(100px,100px)
  }
  
  .image-container img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  
  .lower-container{
    height: 280px;
    background: #FFF;
    padding: 20px;
    padding-top: 40px;
    text-align: center;
  }
  
  .lower-container h3, h4{
    box-sizing: border-box;
    line-height: .6;
    font-weight: bold;
    font-size : 15px;
  }
  
  .lower-container h4{
    color: #101C34;
    opacity: .4;    
    font-weight: light;
  }
  
  .lower-container p{
    color: gray;
    font-size: 10px;  
    margin-bottom: 30px;
    
  }
  
  .lower-container .btn{
    padding: 12px 20px;
    background: #28C3F5;
    border: none;
    color: white;
    border-radius: 32px;
    font-size: 12px;
    text-decoration: none;
    font-weight: bold;
    transition: all .1s ease-in;
  }
  
  .lower-container .btn:hover{
    background: transparent;
    color: #28C3F5;
    border: 1px solid #28C3F5;
  }
    `}</style>
    </>
);

export default Card;
