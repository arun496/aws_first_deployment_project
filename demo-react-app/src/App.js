import { useState, useEffect } from "react";
import './App.css';

function App() {
    const [data, setData] = useState([]);

    const fetchHotels = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/hotels");
            const responseData = await response.text();
            setData(responseData);
        } catch(e) {
            console.log("Server error...", e);
        }
    }

    useEffect(() => {
        fetchHotels();
    }, [])

    return (
        <div className="App">
            {data}
        </div>
    );
}

export default App;
