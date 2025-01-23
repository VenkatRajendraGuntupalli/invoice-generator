import React from 'react';

const Summary = ({ total }) => {
    return (
        <div className="amount-summary">
            <h3>
                Total Amount: ${total.toFixed(2)}
            </h3>
        </div>
    );
};

export default Summary;