import React from 'react';

const ItemDisplay = ({ entries, onRemoveEntry }) => {
    return (
        <div className="list-container">
            <h2>Item List</h2>
            {entries.map((entry, index) => (
                <div className="list-item" key={index}>
                    <div>{entry.item}</div>
                    <div>
                        Quantity: {entry.quantity}
                    </div>
                    <div>Price: ${entry.price}</div>
                    <button className="primary-button" onClick={() => onRemoveEntry(index)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemDisplay;
