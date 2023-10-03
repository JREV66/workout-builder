import axios from "axios";

export default {

listWorkouts() {
    return axios.get("/v1/workouts");
},

getWorkoutById(id) {
    return axios.get(`/v1/workouts/id/${id}`);
},

listWorkoutsByTarget(target) {
    return axios.get("/v1/workouts/target/", target);
},

listWorkoutsByUser(id) {
    return axios.get("/v1/workouts/user", id);
},

listWorkoutsByLength() {
    return axios.get("/v1/workouts/length");
},

listCompletedWorkouts(id) {
    return axios.get("/v1/workouts/completed", id);
},

generateWorkout(workout) {
    return axios.post("/v1/workout", workout)
},

updateWorkout(id) {
    return axios.put(`/v1/workout/${id}`);
},

deleteWorkout(id) {
    return axios.delete(`/v1/workout/${id}`);
},
setcomplete(id) {
    return axios.put(`/v1/exercise/workout/${id}`)
}



}

