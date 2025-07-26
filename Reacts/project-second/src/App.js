import './App.css';

import InfoCard from "./infoCard";
import InfoImage from "./imageCard";

const App = () => {
  return (
    <div className='Add'>
      <InfoCard porpsValue = "What's on your mind, Salma?" />
      <InfoImage/>
      <InfoImage/>
      <InfoImage/>
    </div>  
  );
}

export default App;
