import { useState, useEffect } from "react";
import CustomerTable from "../components/CustomerTable";
import axios from 'axios';

export default function CustomerContainer() {
    const [data, setData] = useState([])
    useEffect(() => {
        const getCustomersData = () => {
            axios
                .get("http://localhost:5000/customers")
                // .then(res => res.data.json())
                .then(data => {
                    console.log(data.data);
                    setData(data.data)
                })
                .catch(error => console.log(error));
        };
        getCustomersData();
    }, [])


    return (
        <CustomerTable data={data} />
    )

}