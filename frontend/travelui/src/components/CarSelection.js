import styles from "../styles/CarSelection.module.css";

export default function CarSelection() {
  const arr = [
    {
      Name: "Dan",
      passangers: [
        { Id: 1, Name: "Jon", Longitude: 5.2, Latitude: 4.2 },
        { Id: 2, Name: "Dom", Longitude: 8.1, Latitude: 6.7 },
        { Id: 8, Name: "Sylvia", Longitude: 3.6, Latitude: 6.5 },
      ],
    },
    {
      Name: "Jen",
      passangers: [
        { Id: 12, Name: "Bradford", Longitude: 6.6, Latitude: 9.7 },
        { Id: 4, Name: "Karina", Longitude: 9.1, Latitude: 9.0 },
        { Id: 10, Name: "Maude", Longitude: 9.5, Latitude: 5.9 },
        { Id: 5, Name: "Rae", Longitude: 8.1, Latitude: 1.8 },
      ],
    },
    {
      Name: "Brat",
      passangers: [
        { Id: 7, Name: "Craig", Longitude: 5.2, Latitude: 6.1 },
        { Id: 3, Name: "Von", Longitude: 5.3, Latitude: 9.5 },
        { Id: 6, Name: "Stu", Longitude: 9.2, Latitude: 7.2 },
        { Id: 9, Name: "Gwen", Longitude: 2.3, Latitude: 4.8 },
      ],
    },
    {
      Name: "Kent",
      passangers: [{ Id: 11, Name: "Deanna", Longitude: 5.8, Latitude: 2.8 }],
    },
  ];

  return (
    <div className={styles.container}>
      <h2>I am Car Selection Element</h2>

      <div className={styles.half}>
        <div className="widget" draggable>
          Person A
        </div>
      </div>
      <div className={styles.half}>
        <figure className={styles.textAlign}>
          <figcaption>Car Selection</figcaption>
          <ul>
            {arr.map((car, index) => (
              <figure key={index}>
                <figcaption>{car.Name}'s car</figcaption>
                <ul>
                  {car.passangers.map((user) => (
                    <li key={user.Id}>{user.Name}</li>
                  ))}
                </ul>
              </figure>
            ))}
          </ul>
        </figure>
      </div>
    </div>
  );
}
