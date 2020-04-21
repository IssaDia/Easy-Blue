import React from 'react'

/**
  * Custom navbar from Dashboard with a burger and a svg
  */

const CustomNavbar: React.FC<{}> = () => (
    <>
        <div className='nav-wrapper'>
            <div className='row'>
                <div className="col-sm-12">
                    <div id="webapp_cover">
                        <div id="menu_button">
                            <input type="checkbox" id="menu_checkbox" />
                            <label htmlFor="menu_checkbox" id="menu_label">
                                <div id="menu_text_bar"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className="col-sm-12">
                    <img src='../img/icons/logo.svg' className='logo-svg' alt='logo' />
                </div>
            </div>
        </div>

        <style jsx>{`

        .nav-wrapper{
            height : 200px;
            padding-top:80px;
        }

        #webapp_cover{      
            top: 40%;
            right: 0;
            left: 0;
            width: 39px;
            margin-left : 80px;
            transform: translateY(-50%) scale(2);
        }

        #menu_button{
            width: 39px;
            overflow: hidden;
        }

        #menu_checkbox{
            display: none;
        }

        #menu_label{
            position: relative;
            display: block;
            height: 29px;
            cursor: pointer;
        }

        #menu_label:before, #menu_label:after, #menu_text_bar{
            position: absolute;
            left: 0;
            width: 100%;
            height: 5px;
            background-color: #728391;
        }

        #menu_label:before, #menu_label:after{
            content: '';
            transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
        }

        #menu_label:before{
            top: 0;
        }

        #menu_label:after{
            top: 12px;
        }

        #menu_text_bar{
            top: 24px;
        }

        #menu_text_bar:before{
            content: 'MENU';
            position: absolute;
            top: 15px;
            right: 0;
            left: 0;
            color:#728391;
            font-size: 12px;
            font-weight: bold;
            font-family: 'Montserrat', Arial, Helvetica, sans-serif;
            text-align: center;
        }

        #menu_checkbox:checked + #menu_label:before{
            left: -39px;
        }

        #menu_checkbox:checked + #menu_label:after{
            left: 39px;
        }

        #menu_checkbox:checked + #menu_label #menu_text_bar:before{
            animation: moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards;
        }

        @keyframes moveUpThenDown{
            0%{ top:0; }
            50%{ top:-27px;}
            100%{ top:-14px; }
        }

        @keyframes shakeWhileMovingUp{
            0%{ transform: rotateZ(0); }
            25%{ transform:rotateZ(-10deg); }
            50%{ transform:rotateZ(0deg); }
            75%{ transform:rotateZ(10deg); }
            100%{ transform:rotateZ(0); }
        }

        @keyframes shakeWhileMovingDown{
            0%{ transform:rotateZ(0); }
            80%{ transform:rotateZ(3deg); }
            90%{ transform:rotateZ(-3deg); }
            100%{ transform:rotateZ(0); }
        }

        .logo-svg {
        width :300px;
        display: block;
        margin auto auto 40px auto;
        }

        @media screen and (max-width: 640px) {
            .logo-svg {
             padding-top: 20px;
            }
        }
      
      `}</style>
    </>
);

export default CustomNavbar;