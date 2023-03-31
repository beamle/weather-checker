import React, {useState} from 'react';
import Input from "@mui/joy/Input";
import {Button} from "@mui/joy";
import OuterTab from "./OuterTab";

// link example:
// Start: http://api.weatherapi.com/v1/current.json?key=
// API Key: 7ff1189b4d9c4a7c96873526233003&q=
// Search param: London&aqi=no


const MyInput = () => {
    const [city, setCity] = useState({});
    const [fetchResponse, setFetchResponse] = useState({});
    // const [foreCastDay, setForCastDay] = useState({})

    function handleChange(event) {
        setCity(event.target.value)
    }

    function fetchData() {
        let url = "http://api.weatherapi.com/v1/forecast.json?key=7ff1189b4d9c4a7c96873526233003&q=" + city + "&days=3&aqi=no&alerts=no"
        // let forecastDay = [];
        // let temperaturePerHour = [];

        fetch(url)
            .then((response) => response.json())
            .then((data) => { setFetchResponse(data)
                console.log(data)
            })
    }


    return (
        <div>
            <Input onChange={handleChange}/>
            <Button onClick={fetchData}>Get data</Button>
            <div>
                <OuterTab fetchedData={fetchResponse}></OuterTab>
            </div>
        </div>
    );
};

export default MyInput;


// for(const hour in data){
//     temperaturePerHour.push(hour["forecast"]["forecastday"][]["hour"])
// }