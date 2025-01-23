import React from 'react';
import BillInput from './components/BillInput';
import ItemDisplay from './components/ItemDisplay';
import Summary from './components/Summary';
import { jsPDF } from 'jspdf';
import './App.css';

function App() {
    const [entries, setEntries] = React.useState([]);

    const handleNewEntry = (entry) => {
        setEntries([...entries, entry]);
    };

    const handleRemoveEntry = (index) => {
        const updatedEntries = [...entries];
        updatedEntries.splice(index, 1);
        setEntries(updatedEntries);
    };

    const computeTotal = () => {
        return entries.reduce(
            (total, entry) =>
                total +
                entry.quantity *
                entry.price, 0);
    };

    const handleGeneratePDF = () => {
        const pdf = new jsPDF();
        pdf.text('Invoice', 20, 20);

        // Add entries to PDF
        entries.forEach((entry, index) => {
            const yPos = 30 + index * 10;
            pdf.text(
                `Item: ${entry.item}, 
                    Quantity: ${entry.quantity}, 
                    Price: ${entry.price}`, 20, yPos);
        });

        // Add total amount to PDF
        const totalAmount =
            computeTotal();
        pdf.text(
            `Total Amount: 
                    $${totalAmount.toFixed(2)}`, 20, 180);

        // Save the PDF
        pdf.save('invoice.pdf');
    };

    return (
        <div className="Container">
            <h1>Invoice Generator</h1>
            <BillInput onAddEntry={handleNewEntry} />
            <ItemDisplay entries={entries}
                onRemoveEntry={handleRemoveEntry} />
            <Summary
                total={computeTotal()} />
            <button
                className="download-button"
                onClick={handleGeneratePDF}>Download PDF</button>
        </div>
    );
}

export default App;