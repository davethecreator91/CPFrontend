import { useEffect, useState } from 'react'
import './App.css'
import CommuteCostCalculator from './Calculator'
import RevenueCounter from './RevenueCounter'

function App() {

// const service = async () => {
//   const BASE_URL = `http://localhost:3001/trip`;

//   try {
//     let response = await fetch(BASE_URL)
//     let JSONdata = await response.json()
//   }
// };

  return (
    <>
      {/* <RevenueCounter/> */}
      <CommuteCostCalculator/>
    </>
  );
};
// figure out how to display function output
export default App

