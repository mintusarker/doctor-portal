import React from 'react';

const PrimaryButton = ({children}) => {
    return (

        <button className="bg-gradient-to-r from-primary to-secondary btn btn-primary text-white">{children}</button>

    );
};

export default PrimaryButton;