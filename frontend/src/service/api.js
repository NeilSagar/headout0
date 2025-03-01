import axios from 'axios';

const backend_url = "http://localhost:5500/api";

export const createSession = async (userName) => {
    try {
        const sessionApiUri = `${backend_url}/user/create-user-session`;
        const response = await axios.post(sessionApiUri,{userName:userName}); // Use await for asynchronous operation
        return response.data;
    } catch (error) {
        console.log("Error occurred while creating session. Error:", error.message || "unknown error"); // Fixed typo
        return null;
    }
}
