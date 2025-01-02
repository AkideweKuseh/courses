import { useState } from "react";
function MyComponent() {
  const [cars, setCars] = useState([
    { carYear: 2025, carMake: "Tesla", carModel: "Model S" },
  ]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar = () => {
    const newCar = {
      carYear: carYear,
      carMake: carMake,
      carModel: carModel,
    };

    // console.log(newCar);
    // console.log(cars);

    setCars((prevCars) => [...prevCars, newCar]);

    setCarMake("");
    setCarModel("");
  };

  const handleRemoveCar = (id) => {
    setCars((prevCars) => prevCars.filter((_, index) => index !== id));
  };

  const handleYearChange = (e) => {
    setCarYear(e.target.value);
  };

  const handleMakeChange = (e) => {
    setCarMake(e.target.value);
  };

  const handleModelChange = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <div>
      <h1>List of Cars</h1>
      <hr />
      <ul>
        {cars.map((car, index) => (
          <li key={index} className="car">
            {car.carYear} {car.carMake} {car.carModel}{" "}
            <button className="delete" onClick={() => handleRemoveCar(index)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <h2>Add a Car</h2>
      <input type="number" value={carYear} onChange={handleYearChange} />
      <br />
      <input type="text" value={carMake} onChange={handleMakeChange} />
      <br />
      <input type="text" value={carModel} onChange={handleModelChange} />
      <br />

      <button onClick={handleAddCar}>Add Car</button>
    </div>
  );
}

export default MyComponent;
// const [car, setCar] = useState({
//   year: 2025,
//   make: "Tesla",
//   model: "Model S",
// });

// const handleYearChange = (e) => {
//   setCar((prevCar) => ({ ...prevCar, year: e.target.value }));
// };

// const handleMakeChange = (e) => {
//   setCar((prevCar) => ({ ...prevCar, make: e.target.value }));
// };

// const handleModelChange = (e) => {
//   setCar((prevCar) => ({ ...prevCar, model: e.target.value }));
// };

// return (
//   <div>
//     <h1>My Car</h1>
//     <p>Year: {car.year}</p>
//     <p>Make: {car.make}</p>
//     <p>Model: {car.model}</p>

//     <input
//       type="number"
//       value={car.year}
//       // onChange={(e) => setCar({ ...car, year: e.target.value })}
//       // using an updater function - Best Practice
//       onChange={handleYearChange}
//     />
//     <br />
//     <input
//       type="text"
//       value={car.make}
//       //onChange={(e) => setCar({ ...car, make: e.target.value })}
//       onChange={handleMakeChange}
//     />
//     <br />
//     <input
//       type="text"
//       value={car.model}
//       //onChange={(e) => setCar({ ...car, model: e.target.value })}
//       onChange={handleModelChange}
//     />
//   </div>
// );
