import { useDroppable } from "@dnd-kit/core";

export default function Car(props) {
  const { isOver, setNodeRef } = useDroppable({ id: props.id });
  const style = { opacity: isOver ? 1 : 0.5 };
  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
}
