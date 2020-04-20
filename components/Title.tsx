import React from 'react';

/**
  * Exemple of React component in NextJs
  */
interface Props {
    text: string;
}

const Title: React.FC<Props> = ({ text }) => (
    <>
        <h1>
            {text}
        </h1>
        <style jsx>{`
      h1{
        padding: 10px;
        margin: 10px;
        border: 1px solid black;
      }
    `}</style>
    </>
);

export default Title;
