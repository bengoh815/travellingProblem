import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Passenger from "./Passenger";
import Car from "./Car";
import styles from "../styles/CarSelection.module.css";

export default function CarSelection() {
  // Get data from somehow
  const input = {
    passengers: [],
    unassigned: [
      { Id: 12, Name: "Bradford", Longitude: 6.6, Latitude: 9.7 },
      { Id: 4, Name: "Karina", Longitude: 9.1, Latitude: 9.0 },
      { Id: 10, Name: "Maude", Longitude: 9.5, Latitude: 5.9 },
      { Id: 5, Name: "Rae", Longitude: 8.1, Latitude: 1.8 },
    ],
    cars: [
      { Id: 1, Name: "Jen", Passengers: [] },
      {
        Id: 2,
        Name: "Brat",
        Passengers: [
          { Id: 7, Name: "Craig", Longitude: 5.2, Latitude: 6.1 },
          { Id: 3, Name: "Von", Longitude: 5.3, Latitude: 9.5 },
        ],
      },
      { Id: 3, Name: "Kent", Passengers: [] },
      {
        Id: 4,
        Name: "Alex",
        Passengers: [{ Id: 6, Name: "Stu", Longitude: 9.2, Latitude: 7.2 }],
      },
    ],
    assigned: [
      [7, 2],
      [3, 2],
      [6, 4],
    ],
  };

  const [dragObj, setDragObj] = useState(null);
  const [data, setData] = useState(input);

  function handleDragEnd({ over }) {
    if (over) {
      // move obj to destination
      const desId = over.id;
      const passengerId = dragObj;

      const rtnVal = data.unassigned.findIndex((e) => e.Id === passengerId);
      if (rtnVal !== -1) {
        // found in unassigned
        // get passenger
        const passenger = data.unassigned[rtnVal];

        // rmv passenger from unassigned
        const newUnassigned = data.unassigned.filter(
          (p) => p.Id !== passengerId
        );

        // find car
        const carIndex = data.cars.findIndex((c) => c.Id === desId);
        const car = data.cars[carIndex];

        // put passenger in car
        const newPassengers = [...car.Passengers, passenger];
        const newCar = { ...car, Passengers: newPassengers };
        const newCars = data.cars.map((car, index) => {
          return index === carIndex ? newCar : car;
        });

        // update assigned
        const newAssigned = [...data.assigned, [passengerId, desId]];

        // update data
        const newData = {
          ...data,
          unassigned: newUnassigned,
          cars: newCars,
          assigned: newAssigned,
        };
        setData(newData);
      } else {
        // not found in unassigned
        // find car
        const carIdIndex = data.assigned.findIndex((e) => e[0] === passengerId);
        const carId = data.assigned[carIdIndex][1];
        const carIndex = data.cars.findIndex((c) => c.Id === carId);
        const car = data.cars[carIndex];

        // destination car is not itself
        if (carId !== desId) {
          // find passenger
          const passengerIndex = car.Passengers.findIndex(
            (p) => p.Id === passengerId
          );
          const passenger = car.Passengers[passengerIndex];

          // rmv passenger from car
          const midPassengers = car.Passengers.filter(
            (p) => p.Id !== passengerId
          );

          const midCar = { ...car, Passengers: midPassengers };

          const midCars = data.cars.map((car, index) => {
            return index === carIndex ? midCar : car;
          });

          // rmv from assigned
          const midAssigned = data.assigned.filter((e) => e[0] !== passengerId);

          // find car
          const desCarIndex = data.cars.findIndex((c) => c.Id === desId);
          const desCar = data.cars[desCarIndex];

          // put passenger in car
          const newPassengers = [...desCar.Passengers, passenger];
          const newCar = { ...desCar, Passengers: newPassengers };
          const newCars = midCars.map((car, index) => {
            return index === desCarIndex ? newCar : car;
          });

          // update assigned
          const newAssigned = [...midAssigned, [passengerId, desId]];

          // update data
          const newData = {
            ...data,
            cars: newCars,
            assigned: newAssigned,
          };
          setData(newData);
        }
      }
    } else {
      // move passenger to source
      const passengerId = dragObj;
      const rtnVal = data.unassigned.findIndex((e) => e.Id === passengerId);
      if (rtnVal === -1) {
        // in assigned
        // find car
        const carIdIndex = data.assigned.findIndex((e) => e[0] === passengerId);
        const carId = data.assigned[carIdIndex][1];
        const carIndex = data.cars.findIndex((c) => c.Id === carId);
        const car = data.cars[carIndex];

        // find passenger
        const passengerIndex = car.Passengers.findIndex(
          (p) => p.Id === passengerId
        );
        const passenger = car.Passengers[passengerIndex];

        // rmv passenger from car
        const newPassengers = car.Passengers.filter(
          (p) => p.Id !== passengerId
        );

        const newCar = { ...car, Passengers: newPassengers };

        const newCars = data.cars.map((car, index) => {
          return index === carIndex ? newCar : car;
        });

        // this part is wrong but can be saved for over === null
        // rmv from assigned
        const newAssigned = data.assigned.filter((e) => e[0] !== passengerId);

        // put passenger in unassigned
        const newUnassigned = [...data.unassigned, passenger];

        // update data
        const newData = {
          ...data,
          unassigned: newUnassigned,
          cars: newCars,
          assigned: newAssigned,
        };
        setData(newData);
      }
    }
    setDragObj(null);
  }

  function handleDragStart(e) {
    setDragObj(e.active.id);
  }

  return (
    <div className="bg-light">
      <h3>Car Selection</h3>

      <div className={styles.half}></div>
      <div className={styles.half}>
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className={styles.half}>
            <p>People</p>
            {data.unassigned.map((p, index) => (
              <Passenger key={index} id={p.Id}>
                {p.Name}
              </Passenger>
            ))}
          </div>
          <div className={styles.half}>
            <p>Car</p>
            {data.cars.map((car, index) => (
              <Car
                key={index}
                id={car.Id}
                driver={car.Name}
                passengers={car.Passengers}
              >
                {car.Passengers.map((p, i) => (
                  <Passenger key={i} id={p.Id}>
                    {p.Name}
                  </Passenger>
                ))}
              </Car>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}

// could it be possible instead of rending passengers twice I save them in an array and just use them as I wish?
