import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm"; // Ensure this is correct

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    if (!user || !user.token) {
      return;
    }

    const fetchWorkouts = async () => {
      try {
        const response = await fetch("/api/workouts", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_WORKOUTS", payload: json });
        } else {
          console.error("Failed to fetch workouts:", json);
        }
      } catch (error) {
        console.error("An error occurred while fetching workouts:", error);
      }
    };

    fetchWorkouts();
  }, [dispatch, user]);

  return (
    <div className="home">
      {user && (
        <>
          <div className="workouts">
            {workouts &&
              workouts.map((workout) => {
                return <WorkoutDetails key={workout._id} workout={workout} />;
              })}
          </div>
          <WorkoutForm />
        </>
      )}
    </div>
  );
};

export default Home;
