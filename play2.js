
// const calculateToll = () => {

    // if (formData.peak == 'Peak' && formData.ezpass == 'yesEzpass') {
    //     routeCredit = 
    //     (formData.route == 'HLtunnels') ? HTLTrouteCredit:
    //     (formData.route == 'QHtunnels') ? QTHTrouteCredit: 0;
//     let vehiclePrice = 
//         (formData.vehicle = 'car') ? 9:
//         (formData.vehicle = 'bike') ? 4.50:
//         (formData.vehicle = 'truck') ? 14.40:
//         (formData.vehicle = 'bus') ? 21.60: 0;
//     }
// to input values or calculate rates
const [vehicle, setVehicle] = useState(0)
const [peak, setPeak] = useState(0)
const [ezpass, setVehicle] = useState(0)
const [route, setRoute] = useState(0)
// const [QHtunnelsExit, setQHTunnelsExit] = useState(0)
// let NOEZratio = 1.5
// (formData.vehicle == 'Car') ? 1.5:
// (formData.vehicle == 'Bike') ? 1.5:
// (formData.vehicle == 'Truck') ? 1.5:
// (formData.vehicle == 'Bus') ? 1.49: 0;

    // rules
    // if OP peak price * OP Ratio
    // 

    // logic

// toll:
// assign each vehicle to a price
// modify the price if offpeak is chosen by OP modifier, diffrerent one for motorcycles
// if no ezpass modify price

// credit:
// for peak only
// for ezpass users only
// subtract for HTLT or QTHT
// if exiting QTHT subtract

// this plus toll prices with regular, mid tier, or no EZ Pass
// how often do you commute a week
// that a month, year





// peak prices
const car = 9
const bike = 4.50
const truck = 14.40
const bus = 21.60

// peak ratio 



// oh wows
// let carBikeratio = bike / car
// let cartruckratio = truck / car
// let carbusratio = bus / car

// console.log(carBikeratio);
// console.log(cartruckratio);
// console.log(carbusratio);


// off peak prices
const carOP = 2.25
const bikeOP = 1.05
const truckOP = 3.60
const busOP = 5.40

// off peak/peak ratio     75% cheaper off peak  78% cheaper for motorcycles
const carOPratio = carOP / car
const bikeOPratio = bikeOP / bike
const truckOPratio = truckOP / truck
const busOPratio = busOP / bus

// console.log(carOPratio); //.25
// console.log(bikeOPratio); //.23
// console.log(truckOPratio); //.25
// console.log(busOPratio); //.25




const carOPprice = carOPratio * car
const bikeOPprice = bikeOPratio * bike
const truckOPprice = truckOPratio * truck
const busOPprice = busOPratio * bus
// console.log(carOPprice);
// console.log(bikeOPprice);
// console.log(truckOPprice);
// console.log(busOPprice);






// oh wows
let carBikeOPratio = bikeOP / carOP
let cartruckOPratio = truckOP / carOP
let carbusOPratio = busOP / carOP

console.log('');

// console.log(carBikeOPratio);
// console.log(cartruckOPratio);
// console.log(carbusOPratio);

// NO EZ PASS

const carNOEZ = 13.50
const bikeNOEZ = 6.75
const truckNOEZ = 21.60
const busNOEZ = 32.40

// peak ratio NOEZ
const carNOEZratio = carNOEZ / car
const bikeNOEZratio = bikeNOEZ / bike
const truckNOEZratio = truckNOEZ / truck
const busNOEZratio = busNOEZ / bus

// Result: NOEZPass is 66% more expensive overall
console.log(carNOEZratio);
console.log(bikeNOEZratio);
console.log(truckNOEZratio);
console.log(busNOEZratio);




// Credits only for peak and EzPass Holders
// QTHT credit is 1/2 HTLT overall
// Extra QTHT credit if exiting and entering in same day
const HTLTcarEZCreditPeak = 3
const QTHTcarEZCreditPeak = 1.50

const HTLTbikeEZCreditPeak = 1.50
const QTHTbikeEZCreditPeak = 0.75

const HTLTtruckEZCreditPeak = 7.20
const QTHTtruckEZCreditPeak = 3.60

const HTLTbusEZCreditPeak = 12
const QTHTbusEZCreditPeak = 6

// console.log( car * carOPratio * carNOEZratio );
// console.log( car - QTHTcarEZCreditPeak - QTHTcarEZCreditPeak );






































// const CommuteCostCalculator = () => {



//     return (
//         <>
//         <form>
//             <label>I am driving a...</label>
//             <select>
//                 <option>Car</option>
//                 <option>Bike</option>
//                 <option>Truck</option>
//                 <option>Bus</option>
//             </select>

//             <label>I am first entering during...</label>
//             <select>
//                 <option>Peak (5am-9pm weekdays, 9am-9pm weekends)</option>
//                 <option>Off Peak (9pm-5am weekdays, 9pm-9am weekends) </option>
//             </select>

//             <p>I am paying with E-ZPass</p>
//             <label for="yesEzpass" >Yes</label>
//             <input type="radio" id="yesEzpass" ></input>

//             <label for="noEzpass" >No</label>
//             <input type="radio" id="noEzpass"></input>

//             <p>I am entering at...</p>
//             <label for="BMWQbridges" >Brooklyn, Manhattan, Williamsburg, or Queensboro Bridge</label>
//             <input type="radio" id="BMWQbridges"></input>

//             <label for="HLtunnels" >Holland Tunnel or Lincoln Tunnel</label>
//             <input type="radio" id="HLtunnels"></input>

//             <label for="above60th" >Manhattan above 60th Street</label>
//             <input type="radio" id="above60th"></input>

//             <label for="QHtunnels" >Queens-Midtown Tunnel or Hugh L. Carey Tunnel</label>
//             <input type="radio" id="QHtunnels"></input>

//             <p>I am exiting the same day via the Queens-Midtown or Hugh L. Carey Tunnel:</p>
//             <label for="QHtunnelsExit">Yes</label>
//             <input type="radio" id="QHtunnelsExit"></input>
//             <label for="QHtunnelsExit">No</label>
//             <input type="radio" id="QHtunnels"></input>
//         </form>
//         </>
//     );
// };