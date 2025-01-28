import React from "react"

const TripList = ({ trips, handleDeleteTrip, handleUpdateTrip }) => {

console.log(trips);


    // const handleTrip = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const res = await fetch(`http://localhost:3001/trips/${id}`, {
    //             method: "GET",
    //             headers: {"Content-Type": "application/json",},
    //             body: JSON.stringify(FormData),
    //           });
    //           return res.json();
    //     }

    // }
    return (

    <div>
    <h2>Trips List</h2>
    <ul>
      {trips.map((trip, index) => (
        <li key={index}>
          {trip.name}  Vehicle: {trip.vehicle} - Toll:${trip.tollPrice} - Credits:${trip.tollCredits} - Total:${trip.total}
          <button onClick={() => handleDeleteTrip(trip._id)}>Delete</button>
          <button onClick={() => handleUpdateTrip(trip._id)}>Update</button>
          
        </li>
      ))}
    </ul>
  </div>
    )
}

export default TripList;