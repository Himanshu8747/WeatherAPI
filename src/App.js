import { useEffect } from 'react';
import './App.css';
import Card from './component/Card.jsx';
import Input from './component/Input.jsx'
import Button from './component/Button.jsx'
import { useWeather } from './Context/Weather.jsx';

function App() {
  const weather = useWeather();
  console.log(weather);

  useEffect(()=>{
    //Get current location of the user when the component mounts
    weather.fetchUserCurrentLocation();
  },[])

  return (
    <div className="App">
      <h1>Hello Weather Api</h1>
      <Input/>
      <br/>
      <Button value="Search" onClick={weather.fetchData}/>
      <Card/>
      <br/>
      <Button value="Refresh"/>
    </div>
  );
}

export default App;
