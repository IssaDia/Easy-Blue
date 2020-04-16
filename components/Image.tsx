import React from 'react';

interface Props {
    name: string,
    width: string,
    margin?: string

}


const Image: React.FC<Props> = ({ name, width, margin }) => (
    <>
        <img style={{ width: width, margin: margin }} className={`${name}`} src={`../img/icons/${name}.png`} alt={`${name}`} />
    </>
);

export default Image;
