import { useDroppable } from "@dnd-kit/core";
import styles from "../styles/Car.module.css";

export default function Car(props) {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });
  const style = { opacity: isOver ? 1 : 0.5 };
  return (
    <div ref={setNodeRef} style={style} className={styles.container}>
      <p>{props.driver}'s car</p>
      <ul>
        {props.passengers.map((passenger) => (
          <li key={passenger.Id}>{passenger.Name}</li>
        ))}
      </ul>
    </div>
  );
}

/* 
This styling did not work
<ul className={style.carList}>
{props.passengers.map((passenger) => (
  <li className={style.carListItem} key={passenger.Id}>
    {passenger.Name}
  </li> */
