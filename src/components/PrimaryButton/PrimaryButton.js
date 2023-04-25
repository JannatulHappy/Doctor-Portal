import React, { Children } from 'react';

const PrimaryButton = ({children}) => {
    return (
        <button className="text-white border-0 btn bg-gradient-to-r from-primary to-secondary">{children}</button>
    );
};

export default PrimaryButton;