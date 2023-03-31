import './App.css';
import OuterTab from "./components/OuterTab";
import OuterTabEmpty from "./components/OuterTabEmpty";
import React, {useState} from "react";
import Input from "@mui/joy/Input";
import {Box, Button} from "@mui/joy";
import {capitalize} from "@mui/material";
import config from "./config.js";



function App() {
    const [city, setCity] = useState({});
    const [fetchResponse, setFetchResponse] = useState({});

    function handleChange(event) {
        setCity(event.target.value)
    }

    function fetchData() {
        let API = config.API_KEY;
        let url = `http://api.weatherapi.com/v1/forecast.json?key=${API}&q=${city}&days=3&aqi=no&alerts=no`

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setFetchResponse(data)
                console.log(data)
            })
    }

    return (
        <div>
            <header>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Input sx={{width: "300px"}} onChange={handleChange}/>
                    <Button onClick={fetchData}>Get data</Button>
                </Box>
            </header>
            <main>
                <div>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}>
                        <h2>Wheather data in {city.length > 0 && (capitalize(city))}</h2>
                    </Box>
                    {Object.keys(fetchResponse).length > 0 && <OuterTab fetchedData={fetchResponse}></OuterTab> }
                    {Object.keys(fetchResponse).length === 0 && <OuterTabEmpty/>}
                </div>

            </main>

        </div>
    );
}

export default App;
