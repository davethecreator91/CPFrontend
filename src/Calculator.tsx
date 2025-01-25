import { useState } from "react";


const CommuteCostCalculator = () => {

// to input values or calculate rates
// const [vehicle, setVehicle] = useState(0)
// const [peak, setPeak] = useState(0)
// const [ezpass, setVehicle] = useState(0)
// const [route, setRoute] = useState(0)
// const [eastTunnelExit, seteastTunnelExit] = useState(0)
const [tollPrice, setTollPrice] = useState()
const [tollCredits, setTollCredits] = useState()
const [totalToll, setTotalToll] = useState()







    return (
// {/* <h1>Hello World</h1> */}
<>
<form className="calculator">
    <label>I am driving a...</label>
    <select>
        <option>Car</option>
        <option>Bike</option>
        <option>Truck</option>
        <option>Bus</option>
    </select>
        <br></br>
        <br></br>
    <label> I am first entering during...</label>
    <select>
        <option>Peak (5am-9pm weekdays, 9am-9pm weekends)</option>
        <option>Off Peak (9pm-5am weekdays, 9pm-9am weekends) </option>
    </select>

    <p>I am paying with E-ZPass</p>
    <input type="radio" id="yesEzpass" ></input>
    <label htmlFor="yesEzpass" >Yes</label>

    <br/>
    <input type="radio" id="noEzpass"></input>
    <label htmlFor="noEzpass" >No</label>


    <p>I am entering at...</p>
    <input type="radio" id="BMWQbridges"></input>
    <label htmlFor="BMWQbridges" >Brooklyn, Manhattan, Williamsburg, or Queensboro Bridge</label>

    <br/>
    <input type="radio" id="HLtunnels"></input>
    <label htmlFor="HLtunnels" >Holland Tunnel or Lincoln Tunnel</label>

    <br/>
    <input type="radio" id="above60th"></input>
    <label htmlFor="above60th" >Manhattan above 60th Street</label>

    <br/>
    <input type="radio" id="QHtunnels"></input>
    <label htmlFor="QHtunnels" >Queens-Midtown Tunnel or Hugh L. Carey Tunnel</label>

    <br/>
    <p>I am exiting the same day via the Queens-Midtown or Hugh L. Carey Tunnel:</p>
    <input type="radio" id="QHtunnelsExit"></input>
    <label htmlFor="QHtunnelsExit">Yes</label>
    <br></br>
    <input type="radio" id="QHtunnels"></input>

    <label htmlFor="QHtunnelsExit">No</label>
</form>
</>
    );
};

export default CommuteCostCalculator;

