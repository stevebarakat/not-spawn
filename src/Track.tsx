type Props = {
  track: string;
  onRemove: () => void;
};

function Track({ track, onRemove }: Props) {
  return (
    <div>
      <button onClick={onRemove}>x</button>
      {track}
    </div>
  );
}

export default Track;
