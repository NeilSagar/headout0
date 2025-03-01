import { createContext, useContext, useState } from "react";
import { createSession } from "../service/api.js";

// Properly capitalize context name
const UserContext = createContext();

function UserProvider({ children }) {
    const [userId, setUserId] = useState(null);

    async function fetchUserId(userName) {
        try {
            const response = await createSession(userName);
            if (response && response.user && response.user.userId) { // Assuming response contains userId
                
                setUserId(response.user.userId); // Store the userId in state
                return true; // Return userId or any relevant data
            } else {
                return false;
            }
        } catch (error) {
            console.log("Error: ", error.message || "Unknown Error");
            return false;
        }
    }

    return (
        <UserContext.Provider value={{ fetchUserId, userId }}>
            {children}
        </UserContext.Provider>
    );
}

function useUserDetails() {
    return useContext(UserContext); // Renamed for better clarity
}

export { useUserDetails, UserProvider };
