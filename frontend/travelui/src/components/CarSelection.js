import { useState } from "react";
import styles from "../styles/CarSelection.module.css";

export default function CarSelection() {
  const arr = [
    {
      Name: "Dan",
      passengers: [
        { Id: 1, Name: "Jon", Longitude: 5.2, Latitude: 4.2 },
        { Id: 2, Name: "Dom", Longitude: 8.1, Latitude: 6.7 },
        { Id: 8, Name: "Sylvia", Longitude: 3.6, Latitude: 6.5 },
      ],
    },
    {
      Name: "Jen",
      passengers: [
        { Id: 12, Name: "Bradford", Longitude: 6.6, Latitude: 9.7 },
        { Id: 4, Name: "Karina", Longitude: 9.1, Latitude: 9.0 },
        { Id: 10, Name: "Maude", Longitude: 9.5, Latitude: 5.9 },
        { Id: 5, Name: "Rae", Longitude: 8.1, Latitude: 1.8 },
      ],
    },
    {
      Name: "Brat",
      passengers: [
        { Id: 7, Name: "Craig", Longitude: 5.2, Latitude: 6.1 },
        { Id: 3, Name: "Von", Longitude: 5.3, Latitude: 9.5 },
        { Id: 6, Name: "Stu", Longitude: 9.2, Latitude: 7.2 },
        { Id: 9, Name: "Gwen", Longitude: 2.3, Latitude: 4.8 },
      ],
    },
    {
      Name: "Kent",
      passengers: [{ Id: 11, Name: "Deanna", Longitude: 5.8, Latitude: 2.8 }],
    },
  ];
  const [cars, setCars] = useState(arr);

  const onAddClick = () => {
    const carObj = { Name: "car", passengers: [] };
    setCars([...cars, carObj]);
  };

  const handleDragOver = (e) => {
    // console.log("ON TOP");
    e.preventDefault();
  };

  const handleOnDrop = (e) => {
    console.log("DropppeD");
    console.log(e);
  };

  return (
    <div className="bg-light">
      <h2>I am Car Selection Element</h2>

      <div className={styles.block}>
        <button className="btn btn-primary m-2" onClick={onAddClick}>
          Add Cars
        </button>
      </div>

      <div className={styles.half}>
        <div className="widget" draggable>
          Person A
        </div>
      </div>
      <div className={styles.half}>
        <h3>Car Selection</h3>
        <ul>
          {cars.map((car, index) => (
            <div
              key={index}
              className={styles.figure}
              onDragOver={handleDragOver}
              onDrop={handleOnDrop}
            >
              <h6>{car.Name}'s car</h6>
              <ul>
                {car.passengers.map((user) => (
                  <li key={user.Id}>{user.Name}</li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
