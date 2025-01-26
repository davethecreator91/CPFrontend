import { useEffect, useState } from 'react'
import './App.css'


function RevenueCounter() {
  const [revNow, setRevNow] = useState(0);

  const updateRev = () => {
    
    const oneBillion = 1000000000;
    
    const perYear = 365;
    const perDay = oneBillion / perYear
    const perHour = perDay / 24
    const perMinute = perHour / 60
    const perSecond = perMinute / 60

    let now = new Date();
    // console.log(now);
    
    let cpStart = new Date('2025-01-05');
    let timeDiff = now.valueOf() - cpStart.valueOf();
    let secsTimeDiff = timeDiff / 1000;
    let RevNow = Math.floor((secsTimeDiff * perSecond) * 100) / 100
    setRevNow(RevNow);
    
    console.log(RevNow);
    // return (RevNow)
    };

    useEffect(() => {
      updateRev();
      const interval = setInterval(updateRev, 100);
      return () => clearInterval(interval);
    }, []);


  return (
    <>
      <h1 className='revNow'>${revNow.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</h1>
      <h3> Aprox. City revenue generated to now since Congestion Pricing Start Date (1/5/2025) </h3>
      <h5>at city's goal revenue rate of 1 Billion/year </h5>
      
    </>
  );
};
// figure out how to display function output
export default RevenueCounter
