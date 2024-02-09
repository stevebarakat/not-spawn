import { ActorRefFrom, createMachine, assign, stopChild } from "xstate";
import { trackMachine } from "./trackMachine";

export const mixerMachine = createMachine({
  types: {} as {
    context: {
      tracks: ActorRefFrom<typeof trackMachine>[];
    };
    events:
      | {
          type: "TRACKS.ADD";
          name: string;
        }
      | {
          type: "TRACK.REMOVE";
          index: number;
        };
  },
  id: "tracks",
  context: {
    tracks: [],
  },
  on: {
    "TRACKS.ADD": {
      actions: assign({
        tracks: ({ context, event }) => [event.name, ...context.tracks],
      }),
    },
    "TRACK.REMOVE": {
      actions: [
        assign({
          tracks: ({ context, event }) =>
            context.tracks.filter((_, index) => index !== event.index),
        }),
      ],
    },
  },
});
