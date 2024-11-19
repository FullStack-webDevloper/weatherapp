/* eslint-disable react/no-unknown-property */
import { useState } from "react";
import SearchBox from "./SearchBox";
// eslint-disable-next-line no-unused-vars
import InfoBox from "./InfoBox";

export default function WeatherApp(){
    const [ weatherInfo, setweatherInfo] = useState({
        city:"Delhi",
        feelsLike:24.82,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    };
    return(
        <div style={{textAlign:"center"}}>
        <h2>Weather App </h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
    )
}