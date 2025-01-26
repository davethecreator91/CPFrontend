import { useState, ChangeEvent } from "react";


const CommuteCostCalculator = () => {

// to input values or calculate rates
// const [vehicle, setVehicle] = useState(0)
// const [peak, setPeak] = useState(0)
// const [ezpass, setVehicle] = useState(0)
// const [route, setRoute] = useState(0)
// const [eastTunnelExit, seteastTunnelExit] = useState(0)
// const [tollPrice, setTollPrice] = useState()
// const [tollCredits, setTollCredits] = useState()
// const [totalToll, setTotalToll] = useState()

const [formData, setFormData] = useState({
    name: '',
    vehicle: '',
    peak: '',
    ezpass: '',
    route: '',
    eastTunnelExit: '',
    tollPrice: '',
    tollCredits: '',
    totalToll: '',
});


const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
}

// const calculateToll = () => {
//     if ()
// }




    return (
// {/* <h1>Hello World</h1> */}
<>
<form className="calculator">
    <label>Name</label>
    <input name="name" onChange={handleChange} value={formData.name}></input>
    <br></br>
    <label>I am driving a...</label>
    <select value={formData.vehicle} onChange={handleChange}>
        <option value="Car">Car</option>
        <option value="Bike">Bike</option>
        <option value="Truck">Truck</option>
        <option value="Bus">Bus</option>
    </select>
        <br></br>
        <br></br>
    <label> I am first entering during...</label>
    <select value={formData.peak}>
        <option value="Peak">Peak (5am-9pm weekdays, 9am-9pm weekends)</option>
        <option value="Off-Peak">Off-Peak (9pm-5am weekdays, 9pm-9am weekends) </option>
    </select>

    <p>I am paying with E-ZPass</p>
    <input name="yesEzpass" onChange={handleChange} value={formData.ezpass} type="radio" id="yesEzpass"  ></input>
    <label htmlFor="yesEzpass" >Yes</label>
{/* how to make selection conditional */}
    <br/>
    <input name="noEzpass" onChange={handleChange} value={formData.ezpass} type="radio" id="noEzpass"></input>
    <label htmlFor="noEzpass" >No</label>


    <p>I am entering at...</p>
    <input name="BMWQbridges" onChange={handleChange} value={formData.route} type="radio" id="BMWQbridges"></input>
    <label htmlFor="BMWQbridges" >Brooklyn, Manhattan, Williamsburg, or Queensboro Bridge</label>

    <br/>
    <input name="HLtunnels" onChange={handleChange} value={formData.route} type="radio" id="HLtunnels"></input>
    <label htmlFor="HLtunnels" >Holland Tunnel or Lincoln Tunnel</label>

    <br/>
    <input name="above60th" onChange={handleChange} value={formData.route} type="radio" id="above60th"></input>
    <label htmlFor="above60th" >Manhattan above 60th Street</label>

    <br/>
    <input name="QHtunnels" onChange={handleChange} value={formData.route} type="radio" id="QHtunnels"></input>
    <label htmlFor="QHtunnels" >Queens-Midtown Tunnel or Hugh L. Carey Tunnel</label>

    <br/>
    <p>I am exiting the same day via the Queens-Midtown or Hugh L. Carey Tunnel:</p>
    <input name="QHtunnelsExitYes" onChange={handleChange} value={formData.eastTunnelExit} type="radio" id="QHtunnelsExit"></input>
    <label htmlFor="QHtunnelsExit">Yes</label>
    <br></br>
    <input name="QHtunnelsExitNO" onChange={handleChange} value={formData.eastTunnelExit} type="radio" id="QHtunnels"></input>

    <label htmlFor="QHtunnelsExit">No</label>
    <br></br>
    <label></label>
    <button>Submit</button>
</form>
</>
    );
};

export default CommuteCostCalculator;

