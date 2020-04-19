import React from 'react';



const Timeline: React.FC = ({ }) => (
    <>
        <div className='timeline-wrapper'>
            <h1>Mes derniéres activités</h1>

            <div className="timeline-container">

                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>03 avril 2020</h3>
                        <span>Résiliation de votre assurance RC Pro Raincoat</span>
                    </div>
                </div>



                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>03 avril 2020</h3>
                        <span>Résiliation de votre assurance RC Pro Raincoat</span>
                    </div>
                </div>



                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>03 avril 2020</h3>
                        <span>Résiliation de votre assurance RC Pro Raincoat</span>
                    </div>
                </div>
            </div>
        </div>




        <style jsx>{`


 .timeline-wrapper {
     background-color : #ffffff;
 }
 
 h1 {
     padding-top: 40px;
    text-align: center;
    font-weight: 300;
    color: #777;
    font-family: 'Bree Serif', serif;

 }
 
 h1 span {
    font-weight: 600;
 }
 
 .timeline-container {
    width: 80%;
    padding: 50px 0;
    margin: 50px auto;
    position: relative;
    overflow: hidden;
 }
 
 .timeline-container:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -1px;
    width: 2px;
    height: 100%;
    background: #CCD1D9;
    z-index: 1
 }
 
 .timeline-block {
    width: -webkit-calc(50% + 8px);
    width: -moz-calc(50% + 8px);
    width: calc(50% + 8px);
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    justify-content: space-between;
    clear: both;
 }
 
 .timeline-block-right {
    float: right;
 }
 
 .timeline-block-left {
    float: left;
    direction: rtl
 }
 
 .marker {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 2px solid #FF9F55;
    background: #ffffff;
    margin-top: 10px;
    z-index: 9999
 }
 
 .timeline-content {
    width: 95%;
    padding: 0 15px;
    color: #666;
    margin-bottom: 80px
 }
 
 .timeline-content h3 {
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 10px;
    font-weight: 500
 }
 
 .timeline-content span {
    font-size: 12px;
    color: #000000;
    font-weight: bold
 }
 

 
 @media screen and (max-width: 768px) {
    .container:before {
       left: 8px;
       width: 2px;
    }
    .timeline-block {
       width: 100%;
       margin-bottom: 30px;
    }
    .timeline-block-right {
       float: none;
    }
 
    .timeline-block-left {
       float: none;
       direction: ltr;
    }
 }
 
  

        
    `}</style>
    </>
);

export default Timeline;
