# Invoice Generator

A React-based web application for generating itemized bills and invoices. Users can add items, specify their quantity and price, view a summary, and download the invoice as a PDF.

## Features

- Add and manage items dynamically.
- Automatically calculate the total amount.
- Download the bill as a PDF.
- User-friendly dark theme interface.

## Technologies Used

- **Frontend**: React.js
- **Styling**: CSS (custom styles for a dark theme)
- **PDF Generation**: jsPDF library

## Project Structure

```
project-root/
├── src/
│   ├── App.js            # Main application component
│   ├── App.css           # Styling for the application
│   ├── components/
│   │   ├── BillDetails.js    # Form for adding items
│   │   ├── ItemList.js       # Displays the list of added items
│   │   ├── TotalAmount.js    # Displays the total amount
├── public/
│   ├── index.html        # Entry HTML file
│   └── favicon.ico       # Favicon
├── package.json          # Project dependencies and scripts
└── README.md             # Documentation
```

## Installation and Execution

Follow these steps to run the application locally:

### Prerequisites
- Node.js (v16 or later)
- npm or yarn

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/VenkatRajendraGuntupalli/invoice-generator.git
   cd invoice-generator
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

4. **Build the project for production** (optional):
   ```bash
   npm run build
   ```
   This creates an optimized build in the `build/` directory.

## How to Use

1. Open the application in your browser.
2. Add items by entering the name, quantity, and price in the form and clicking the **Add Item** button.
3. View the list of items and the total amount below the form.
4. To delete an item, click the **Delete** button next to it.
5. Click **Download PDF** to generate and save the invoice as a PDF.

## Screenshots

<img width="1670" alt="image" src="https://github.com/user-attachments/assets/018014a1-4ee0-4a48-bcb3-c64a9bd0bb76" />

<img width="1679" alt="image" src="https://github.com/user-attachments/assets/d71801c2-2f68-4d0d-93a4-009579c071fb" />



## Dependencies

- React.js
- jsPDF

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Description of changes'
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

**Author**: Venkat Rajendra Guntupalli

**GitHub**: [VenkatRajendraGuntupalli](https://github.com/VenkatRajendraGuntupalli/invoice-generator)
