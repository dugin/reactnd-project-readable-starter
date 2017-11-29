import React from 'react';
import ReactLoading from 'react-loading';


export const Loader = () => {

    return (
        <div className='Loader'>
            <ReactLoading type='bars' color='#3483fa' delay={0} height={100} width={100}/>
            <div className="Loader--text">Carregando...</div>
        </div>
    )
};