import React, { useState } from 'react';

const BillInput = ({ onAddEntry }) => {
    const [itemName, setItemName] = useState('');
    const [itemQuantity, setItemQuantity] = useState(1);
    const [itemPrice, setItemPrice] = useState(0);
    const [error, setError] = useState('');

    const handleAddEntry = () => {
        if (!itemName.trim()) {
            setError(`Please input data in the Item section.`);
            return;
        }

        // Check if the itemName contains only alphabetical characters
        if (!/^[a-zA-Z]+$/.test(itemName)) {
            setError(`Item should only contain alphabetical characters.`);
            return;
        }
        const newEntry = { item: itemName, quantity: itemQuantity, price: itemPrice };
        onAddEntry(newEntry);
        setItemName('');
        setItemQuantity(1);
        setItemPrice(0);
        setError('');
    };

    return (
        <div>
            <label className="text-label">Item:</label>
            <input className="input-field" type="text"
                value={itemName}
                onChange={(e) => setItemName(e.target.value)} />
            <label className="text-label">Quantity:</label>
            <input className="input-field" type="number"
                value={itemQuantity}
                onChange={(e) => setItemQuantity(e.target.value)} />
            <label className="text-label">Price:</label>
            <input className="input-field" type="number"
                value={itemPrice}
                onChange={(e) => setItemPrice(e.target.value)} />
            <button
                className="primary-button"
                onClick={handleAddEntry}>
                Add Item
            </button>
            <p style={{ color: 'red' }}>{error}</p>

        </div>
    );
};

export default BillInput;