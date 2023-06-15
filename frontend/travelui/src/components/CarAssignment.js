import React, { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import Passenger from "./Passenger";
import Car from "./Car";
import BSModal from "./BSModal";
import Map from "./Map";
import { useLocation } from "react-router-dom";

import styles from "../styles/CarAssignment.module.css";
import AddCar from "./buttons/AddCar";

export default function CarAssignment() {
  // Get data from somehow
  const [dragObj, setDragObj] = useState(null);
  const [data, setData] = useState({
    unassigned: [],
    carNextId: 1,
    cars: [],
    assigned: [],
  });

  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      const selected = state.selected.map((s) => ({
        Id: s.UserId,
        Name: s.Name,
        Latitude: s.Latitude,
        Longitude: s.Longitude,
        AssignedCarId: -1,
      }));
      const newData = {
        unassigned: selected,
        carNextId: 1,
        cars: [],
        assigned: [],
      };
      setData(newData);
    }
  }, []);

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

  function handleAddCar(carName) {
    const Name = carName ? carName : "Smith";
    const newCar = { Id: data.carNextId, Name: Name, Passengers: [] };
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
            <BSModal buttonName={"Add User"} submitFcn={handleAddUser} />

            {data.unassigned.map((p, index) => (
              <Passenger key={index} id={p.Id}>
                {p.Name}
              </Passenger>
            ))}
          </div>
          <div className={styles.cars}>
            <p>Car</p>
            <AddCar fcn={handleAddCar} />
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
