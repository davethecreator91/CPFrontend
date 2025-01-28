import { useEffect, useState } from 'react'
import './App.css'

import {deleteTrip, updateTrip } from './service/tripService'
import CommuteCostCalculator from './Calculator'
import RevenueCounter from './RevenueCounter'
import TripsList from './TripsList'
import UpdateTrip from './UpdateTrip'

const App =() => {
  const [trips, setTrips] = useState([]);
  const [selectedTrip, setSelectedTrip] = useState(null);

  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  };

  const handleDeleteTrip = async (tripId, index) => {
    console.log(tripId);
    
  //   const tripToDelete = trips[index];
  //   const updatedTrips = trips.filter((_, i) => i !== index);
  //   setTrips(updatedTrips);


  // try {
  //     const deletedTrip = await tripService.deleteTrip(tripId);
  //     const updatedTrips = trips.filter((trip) => tripId !== deletedTrip.id);
  //     setTrips(updatedTrips);
  // } catch (err) {
  //   console.log(err);
    
  // };
  const updatedTrips = trips.filter((trip) => trip._id !== tripId);
  setTrips(updatedTrips);
  try {
    await tripService.deleteTrip(tripId);
  } catch (err) {
    console.error(err);
    setTrips(trips);
  }
};

  const handleUpdateTrip = async (tripId) => {
    try {
      const updatedTrip = await tripService.updateTrip(tripId);

      if (updatedTrip.err) {
        throw new Error(updatedTrip.err)
      };
      const updatedTripList = trips.map((trip) => (
        trip._id !== updatedTrip._id ? trip : updatedTrip
      ));
      setTrips(updatedTripList)
    } catch (error) {
      console.error("Error updating trip:", error);
    };
  };

  //   try {
  //     const tripToDelete = tripService.deleteTrip();
  //     const res = await fetch(`http://localhost:3001/trips/${tripToDelete.id}`, {
  //         method: "DELETE",
  //         headers: {"Content-Type": "application/json",},
  //       });
  //       if (!res.ok) {
  //         console.error("Failed to delete trip.");
  //         // Optionally, revert the state update if the delete request fails
  //         setTrips(trips);
  //       } else {
  //         console.log("Trip deleted successfully!");
  //       }
  //     } catch (error) {
  //       console.error("Error:", error);
  //       Optionally, revert the state update if an error occurs
  //       setTrips(trips);
  //     }
  // };
  
  // const deleteTrip2 = async () => {

  // }
// const service = async () => {
//   const BASE_URL = `http://localhost:3001/trip`;

//   try {
//     let response = await fetch(BASE_URL)
//     let JSONdata = await response.json()
//   }
// };

  return (
    <>
    <h1>CongestionPricing.nyc</h1>
      <RevenueCounter/>
      <CommuteCostCalculator addTrip={addTrip}/>
      <TripsList trips={trips} handleUpdateTrip={handleUpdateTrip} handleDeleteTrip={handleDeleteTrip} />
      <UpdateTrip trip={selectedTrip}/>
    </>
  );
};

export default App; 