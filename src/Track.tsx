import { useSelector } from "@xstate/react";

function Track({ track, onRemove }) {
  const { name } = useSelector(track, (s) => s.context);
  return (
    <div>
      {/* {name} */}
      <button onClick={onRemove}>x</button>
    </div>
  );
}

export default Track;
