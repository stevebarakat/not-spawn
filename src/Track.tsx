import { useMachine } from "@xstate/react";
import { trackMachine } from "./machines/trackMachine";

function Track({ track, onRemove }) {
  const [state] = useMachine(trackMachine);
  console.log("state", state);
  return (
    <div>
      {track}
      <button onClick={onRemove}>x</button>
    </div>
  );
}

export default Track;
