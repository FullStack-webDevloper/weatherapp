/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox( {info}){
    const INT_URL="https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1618557703025-7ec58c83581a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    
return(
    <div className="infoBox">
        <h3>Weather Info </h3>
        <div className='card-container'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity >80? RAIN_URL: info.temp>25 ?HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity >80? < ThunderstormIcon/>: info.temp>25 ? <WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
           <p> Temperature={info.temp}&deg;C</p>
           <p>Humidity={info.humidity}</p>
           <p> Min Temp={info.tempMin}&deg;C</p>
           <p> Max Temp={info.tempMax}&deg;C</p>
           <p> The Weather can be described as <i>{info.weather} </i>and FeelsLike {info.feelsLike}&deg;C</p>
         
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>

)
}