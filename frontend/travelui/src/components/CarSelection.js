import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Passenger from "./Passenger";
import Car from "./Car";
import styles from "../styles/CarSelection.module.css";

export default function CarSelection() {
  // Get data from somehow
  const input = {
    unassigned: [
      { Id: 12, Name: "Bradford", Longitude: 6.6, Latitude: 9.7 },
      { Id: 4, Name: "Karina", Longitude: 9.1, Latitude: 9.0 },
      { Id: 10, Name: "Maude", Longitude: 9.5, Latitude: 5.9 },
      { Id: 5, Name: "Rae", Longitude: 8.1, Latitude: 1.8 },
    ],
    cars: [
      { Name: "Jen", Passengers: [] },
      {
        Name: "Brat",
        Passengers: [
          { Id: 7, Name: "Craig", Longitude: 5.2, Latitude: 6.1 },
          { Id: 3, Name: "Von", Longitude: 5.3, Latitude: 9.5 },
        ],
      },
      { Name: "Kent", Passengers: [] },
      { Name: "Alex", Passengers: [] },
    ],
  };

  const [dragObj, setDragObj] = useState(null);
  const [data, setData] = useState(input);

  function handleDragEnd({ over }) {
    if (over) {
      // car info
      const carIndex = over.id;

      // passenger info
      const passengerIndex = dragObj - 1;
      const passenger = data.unassigned[passengerIndex];
      const passengerId = passenger.Id;

      // remove passenger from unassigned
      const newUnassigned = data.unassigned.filter((p) => p.Id !== passengerId);

      // add passenger to car
      const newPassengers = [...data.cars[carIndex].Passengers, passenger];
      const newCar = { ...data.cars[carIndex], Passengers: newPassengers };

      // update cars
      const newCars = data.cars.map((car, index) => {
        if (index === carIndex) {
          return newCar;
        } else {
          return car;
        }
      });

      // update data
      const newData = { unassigned: newUnassigned, cars: newCars };
      setData(newData);
    }
    setDragObj(null);
  }

  function movePassenger() {}

  function handleDragStart(e) {
    setDragObj(e.active.id);
  }

  // wierd thing where Passenger id cant be 0

  return (
    <div className="bg-light">
      <h3>Car Selection</h3>

      <div className={styles.half}></div>
      <div className={styles.half}>
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className={styles.half}>
            <p>People</p>
            {data.unassigned.map((passenger, index) => (
              <Passenger key={index} id={index + 1}>
                {passenger.Name}
              </Passenger>
            ))}
          </div>
          <div className={styles.half}>
            <p>Car</p>
            {data.cars.map((car, index) => (
              <Car
                key={index}
                id={index}
                driver={car.Name}
                passengers={car.Passengers}
              />
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
