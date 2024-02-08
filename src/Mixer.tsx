import { useMachine } from "@xstate/react";
import { mixerMachine } from "./machines/mixerMachine";
import Track from "./Track";
import { TrackContext } from "./machines/trackMachine";

function Mixer() {
  const [state, send] = useMachine(mixerMachine);
  const makeId = () => Math.random().toString(36).substring(7);

  console.log("state.context", state.context);
  const tracks = state.context.tracks;

  return (
    <div className="app">
      <h2>Tracks</h2>
      <div className="tracksTable">
        {state.context.tracks.map((track, index) => (
          <TrackContext.Provider key={makeId()} options={{ input: tracks }}>
            <Track
              track={track}
              onRemove={() => send({ type: "TRACK.REMOVE", index })}
            />
          </TrackContext.Provider>
        ))}
      </div>

      <select
        onChange={(e) => {
          send({
            type: "TRACKS.ADD",
            name: e.currentTarget.value,
          });
        }}
      >
        <option value="">Add Track:</option>
        <option value="delay">Delay</option>
        <option value="pitchShift">Pitch Shift</option>
      </select>
    </div>
  );
}

export default Mixer;
