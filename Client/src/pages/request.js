import axios from "axios"

// jobdescription request
export const jobdescription = (setJobs, setloading, id) =>{
    axios.get(`http://localhost:4040/api/jobs-description/${id}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};


export const jobsYouMightBeInterestedIn = (setJobs, setloading, id) =>{
    axios.get(`http://localhost:4040/api/jobs-description/${id}`)
    .then((response) => {
        setJobs(response.data)
        setloading(false);
    }).catch(error => console.error(error.message))
};