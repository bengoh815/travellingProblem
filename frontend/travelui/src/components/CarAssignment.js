import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Passenger from "./Passenger";
import Car from "./Car";
import Modal from "./Modal";
import Map from "./Map";

import styles from "../styles/CarAssignment.module.css";

export default function CarAssignment() {
  // Get data from somehow
  const input = {
    passengers: [],
    unassigned: [
      {
        Id: 12,
        Name: "Bradford",
        Longitude: -89.4275,
        Latitude: 43.0756,
        AssignedCarId: -1,
      },
      {
        Id: 4,
        Name: "Karina",
        Longitude: -89.4234,
        Latitude: 43.0633,
        AssignedCarId: -1,
      },
      {
        Id: 10,
        Name: "Maude",
        Longitude: -89.413,
        Latitude: 43.0656,
        AssignedCarId: -1,
      },
      {
        Id: 5,
        Name: "Rae",
        Longitude: -89.4047,
        Latitude: 43.067,
        AssignedCarId: -1,
      },
    ],
    carNextId: 5,
    cars: [
      { Id: 1, Name: "Jen", Passengers: [] },
      {
        Id: 2,
        Name: "Brat",
        Passengers: [
          {
            Id: 7,
            Name: "Craig",
            Longitude: -89.4046,
            Latitude: 43.0702,
            AssignedCarId: 2,
          },
          {
            Id: 3,
            Name: "Von",
            Longitude: -89.4091,
            Latitude: 43.0632,
            AssignedCarId: 2,
          },
        ],
      },
      { Id: 3, Name: "Kent", Passengers: [] },
      {
        Id: 4,
        Name: "Alex",
        Passengers: [
          {
            Id: 6,
            Name: "Stu",
            Longitude: -89.3904,
            Latitude: 43.0748,
            AssignedCarId: 4,
          },
        ],
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

        // update passenger
        const newPassenger = { ...passenger, AssignedCarId: desId };

        // rmv passenger from unassigned
        const newUnassigned = data.unassigned.filter(
          (p) => p.Id !== passengerId
        );

        // find car
        const carIndex = data.cars.findIndex((c) => c.Id === desId);
        const car = data.cars[carIndex];

        // put passenger in car
        const newPassengers = [...car.Passengers, newPassenger];
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
          // update passenger
          const newPassenger = { ...passenger, AssignedCarId: desId };

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
          const newPassengers = [...desCar.Passengers, newPassenger];
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
        // update passenger
        const newPassenger = { ...passenger, AssignedCarId: -1 };

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
        const newUnassigned = [...data.unassigned, newPassenger];

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

  function handleAddUser(e) {
    // TODO get user from db
    const newUser = {
      Id: 125235,
      Name: "Clone",
      Longitude: -89.3966,
      Latitude: 43.0763,
      AssignedCarId: -11,
    };
    const newUnassigned = [...data.unassigned, newUser];
    const newData = { ...data, unassigned: newUnassigned };
    setData(newData);
  }

  function handleAddCar(e) {
    // should probably ask for name
    const defaultName = "John Smith";
    const newCar = { Id: data.carNextId, Name: defaultName, Passengers: [] };
    const newCars = [...data.cars, newCar];
    const newCarNextId = data.carNextId + 1;

    // should add car number should not be more than passenger num
    const newData = { ...data, carNextId: newCarNextId, cars: newCars };
    setData(newData);
  }

  return (
    <div className={styles.container}>
      <h3>Car Assignment</h3>

      {/* <Modal></Modal> */}

      <div className={styles.map}>
        <Map data={data}></Map>
      </div>
      <div className={styles.seatings}>
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
          <div className={styles.people}>
            <p>People</p>
            <button onClick={handleAddUser}>Add User</button>
            {data.unassigned.map((p, index) => (
              <Passenger key={index} id={p.Id}>
                {p.Name}
              </Passenger>
            ))}
          </div>
          <div className={styles.cars}>
            <p>Car</p>
            <button onClick={handleAddCar}>Add Car</button>
            <div className={styles.carLst}>
              {data.cars.map((car, index) => (
                <Car key={index} id={car.Id} driver={car.Name}>
                  {car.Passengers.map((p, i) => (
                    <Passenger key={i} id={p.Id}>
                      {p.Name}
                    </Passenger>
                  ))}
                </Car>
              ))}
            </div>
          </div>
        </DndContext>
      </div>
    </div>
  );
}
