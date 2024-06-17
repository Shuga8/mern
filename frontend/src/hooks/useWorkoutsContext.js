import { WorkoutsContext } from "../Context/WorkoutContext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
  const context = useContext(WorkoutsContext);

  if (!context) {
    throw Error(
      "useWorkoutsContext must be used inside a WorkoutContextProvider"
    );
  }

  return context;
};
