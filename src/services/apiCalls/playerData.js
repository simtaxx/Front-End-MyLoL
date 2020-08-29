// Implementations for all the calls for the pokemon endpoints.
import axios from "../initAxios";

// Method to get a list of all Pokemon
export const getPlayerData = async (username) => {
    try {
      const response = await axios.get(`/player?username=${username}`);
      return response;
    } catch (error) {
      console.error(error);
    }
};