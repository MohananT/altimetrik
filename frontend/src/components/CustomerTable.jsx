import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import { useEffect, useState } from 'react';

export default function CustomerTable({ data }) {
    // Row Data: The data to be displayed.
    const [rowData, setRowData] = useState([
        { make: "Tesla", model: "Model Y", price: 64950, electric: true },
        { make: "Ford", model: "F-Series", price: 33850, electric: false },
        { make: "Toyota", model: "Corolla", price: 29600, electric: false },
    ]);

    useEffect(() => {
        console.log(data)
        setRowData(data);
    })

    // Column Definitions: Defines the columns to be displayed.
    const [colDefs, setColDefs] = useState([
        { field: "name", headerName: 'Name' },
        { field: "dob", headerName: 'Date Of Birth' },
        { field: "email" },
        { field: "aadhar" },
        { field: "regDate", headerName: 'Registration' },
        { field: "mobNum", headerName: 'Mobile Number' },
        { field: "planName", headerName: 'Plan Name' },
        { field: "planCost", headerName: 'Plan Cost' },
        { field: "validity" },
        { field: "status" }
    ]);
    return (
        <div
            className="ag-theme-quartz-dark" // applying the grid theme
            style={{ height: 500 }} // the grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    )
}