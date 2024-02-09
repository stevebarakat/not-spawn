import { createActorContext } from "@xstate/react";
import { createMachine } from "xstate";

export const trackMachine = createMachine({
  id: "track",
  types: {} as {
    context: {
      name: string;
    };
    input: {
      name: string;
    };
  },
  initial: "reading",
  context: ({ input }) => ({
    tracks: input,
  }),
  states: {
    reading: {},
  },
});

export const TrackContext = createActorContext(trackMachine);
