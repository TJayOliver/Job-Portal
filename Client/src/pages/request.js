import axios from "axios";

export const fetch = async (link, setState, setLoading, signall, setMessage) => {
    try {
        const response = await axios.get(`http://localhost:4040/${link}`, {signall});
        setState(response.data.data);
        setLoading(false);
        setMessage(response.data.message);
    } catch (error) {
        //console.error(error.message)
    }
}

export const fetchByID = async (link, id, setState, setLoading, signall, setMessage) => {
    try {
        const response = await axios.get(`http://localhost:4040/${link}/${id}`, {signall});
        setState(response.data.data);
        setLoading(false);
        setMessage(response);
    } catch (error) {
        //console.error(error.message);
    }
}


