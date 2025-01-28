import { useState, useEffect } from "react";
import { updateTrip } from "./service/tripService";


const UpdateTrip = ({ trip, handleUpdateTrip }) => {


const [tollPrice, setTollPrice] = useState(0)
const [tollCredits, setTollCredits] = useState(0)
const [total, setTotal] = useState(0)

const [formData, setFormData] = useState({
    name: '',
    vehicle: 'Car',
    peak: 'Peak',
    ezpass: 'yesEzpass',
    route: 'BMWQbridges',
    QHtunnelsExit: 'ExitNo',
    tollPrice: 0,
    tollCredits: 0,
    total: 0,
});


const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
console.log(e.target.name);

}

useEffect(()=> {
    console.log(formData);
    

},[formData])
const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await fetch("http://localhost:3001/trip", {
            method: "PUT",
            headers: {"Content-Type": "application/json",},
            body: JSON.stringify(formData),
        });


        if (response.ok) {
            let data = await response.json()
            console.log(data);
            addTrip(data)
            console.log("trip added successfully!");
          } else {
            console.error("Failed to add trip.");
          }
        } catch (error) {
          console.error("Error:", error);
        }
    // addTrip(formData)
    }
    // const toll = calculateToll();
    // const credits = calculateCredits();

    // setTollPrice(toll);
    // setTollCredits(credits);


// const createTrip = async(formData) => {
//     try {

//     }   catch (err);
//     console.log(err);
    
// }


    const calculateToll = () => {
   
    let peakVehiclePrice = 
        (formData.vehicle === 'Car') ? 9:
        (formData.vehicle === 'Bike') ? 4.50:
        (formData.vehicle === 'Truck') ? 14.40:
        (formData.vehicle === 'Bus') ? 21.60: 0;

    
    let OPratio = 
        (formData.vehicle === 'Car') ? .25:
        (formData.vehicle === 'Bike') ? .23:
        (formData.vehicle === 'Truck') ? .25:
        (formData.vehicle === 'Bus') ? .25: 0;

    let NOEZratio = 1.5



    let periodPrice = 
    (formData.peak === 'Off-Peak') ? peakVehiclePrice * OPratio: peakVehiclePrice;

    let ezPassprice = 
    (formData.ezpass === 'noEzpass') ? periodPrice * NOEZratio: periodPrice;
    formData.tollPrice = ezPassprice
    return ezPassprice;
}

    const calculateCredits = () => {
    
    let HTLTrouteCredit = 
    (formData.vehicle === 'Car') ? 3:
    (formData.vehicle === 'Bike') ? 1.50:
    (formData.vehicle === 'Truck') ? 7.20:
    (formData.vehicle === 'Bus') ? 12: 0;
    
    let QTHTrouteCredit = 
    (formData.vehicle === 'Car') ? 1.50:
    (formData.vehicle === 'Bike') ? 0.75:
    (formData.vehicle === 'Truck') ? 3.60:
    (formData.vehicle === 'Bus') ? 6: 0;

    let routeCredit = 0
    
   if (formData.peak === 'Peak' && formData.ezpass === 'yesEzpass') {
    routeCredit =
    (formData.route === 'HLtunnels') ? HTLTrouteCredit:
    (formData.route === 'QHtunnels') ? QTHTrouteCredit: 0;

    if (formData.QHtunnelsExit === 'ExitYes') {
        routeCredit = routeCredit * 2
    };
   };
   formData.tollCredits = routeCredit
   return routeCredit;
};

const calculateTotal = () => {
let toll = calculateToll() 
let credits = calculateCredits()
formData.total = toll - credits
    return toll - credits;
}


// setTollPrice(
//     if (formData.peak == 'Off-Peak') {
//         let OPprice = peakVehiclePrice * OPratio
//     }
//     if (formData.ezpass == 'noEzpass') {

//     }
// )
// let
// if (formData.peak === 'Off-Peak' )
// peakVehiclePrice * 






    return (
<>
<br></br>
<h2>Update Saved Trip:</h2> 
<form className="calculator">
    <label>Trip Title: </label>
    <input 
    name="name" 
    onChange={handleChange} 
    value={formData.name}></input>
    <br></br>
    <label>I am driving a...</label>
    <select value={formData.vehicle} name='vehicle' onChange={handleChange}>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Truck">Truck</option>
        <option value="Bus">Bus</option>
    </select>
        <br></br>
        <br></br>
    <label> I am first entering during...</label>
    <select value={formData.peak} name='peak' onChange={handleChange}>
        <option value="Peak">Peak (5am-9pm weekdays, 9am-9pm weekends)</option>
        <option value="Off-Peak">Off-Peak (9pm-5am weekdays, 9pm-9am weekends) </option>
    </select>

    <p>I am paying with E-ZPass</p>
    <input 
    name="ezpass" 
    onChange={handleChange} 
    checked={formData.ezpass === 'yesEzpass'} 
    value={'yesEzpass'} 
    type="radio" 
    id="yesEzpass"></input>
    <label htmlFor="yesEzpass" >Yes</label>

    <br/>
    <input 
    name="ezpass" 
    onChange={handleChange} 
    checked={formData.ezpass === 'noEzpass'} 
    value={'noEzpass'} 
    type="radio" 
    id="noEzpass"></input>
    <label htmlFor="noEzpass" >No</label>


    <p>I am entering at...</p>
    <input 
    name="route" 
    onChange={handleChange} 
    value="BMWQbridges" 
    type="radio" 
    id="BMWQbridges"
    checked={formData.route === 'BMWQbridges'}
    />
    <label htmlFor="BMWQbridges" >Brooklyn, Manhattan, Williamsburg, or Queensboro Bridge</label>

    <br/>
    <input 
    name="route" 
    onChange={handleChange} 
    value="HLtunnels" 
    type="radio" 
    id="HLtunnels"
    checked={formData.route === 'HLtunnels'}
    />
    <label htmlFor="HLtunnels" >Holland Tunnel or Lincoln Tunnel</label>

    <br/>
    <input 
    name="route" 
    onChange={handleChange} 
    value="above60th" 
    type="radio" 
    id="above60th"
    checked={formData.route === 'above60th'}
    />
    <label htmlFor="above60th" >Manhattan above 60th Street</label>

    <br/>
    <input 
    name="route" 
    onChange={handleChange} 
    value="QHtunnels" 
    type="radio" 
    id="QHtunnels"
    checked={formData.route === 'QHtunnels'}
    />
    <label htmlFor="QHtunnels" >Queens-Midtown Tunnel or Hugh L. Carey Tunnel</label>

    <br/>
    <p>I am exiting the same day via the Queens-Midtown or Hugh L. Carey Tunnel:</p>
    <input 
    name="QHtunnelsExit" 
    onChange={handleChange} 
    value={'ExitYes'} 
    type="radio" 
    id="QHtunnelsExitYes"
    checked={formData.QHtunnelsExit === 'ExitYes'}
    ></input>
    <label htmlFor="QHtunnelsExit">Yes</label>
    <br></br>
    <input 
    name="QHtunnelsExit" 
    onChange={handleChange} 
    value={'ExitNo'} 
    type="radio" 
    id="QHtunnels"
    checked={formData.QHtunnelsExit === 'ExitNo'}
    ></input>
    <label htmlFor="QHtunnelsExit">No</label>
    <br></br>
<p>Toll: ${calculateToll()}</p>
<p>Credits: ${calculateCredits()}</p>
<p>Total: ${calculateTotal()}</p>
    <br></br>
    <label></label>
    <button 
    id="save"
    type='submit'
    onClick={handleSubmit}
    >Update Trip</button>
</form>
</>
    );
};

export default UpdateTrip;
