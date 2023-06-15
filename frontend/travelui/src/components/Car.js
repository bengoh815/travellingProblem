import { useDroppable } from "@dnd-kit/core";
import styles from "../styles/Car.module.css";

export default function Car(props) {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });
  const style = { opacity: isOver ? 1 : 1 };
  // change the drop area to glow or something flashy
  // const style = { background-color: isOver ? rgba(255, 255, 255, .7) : white };

  return (
    <div className={styles.container}>
      <div ref={setNodeRef} style={style}>
        <p>
          {props.id}. {props.driver}'s car
        </p>
        {props.children}
      </div>
    </div>
  );
}
// original idea but due to div 0 height issue
// <div className={styles.container}>
// <p>{props.driver}'s car</p>
// <div ref={setNodeRef} style={style}>
//   {props.children}
// </div>
// </div>
