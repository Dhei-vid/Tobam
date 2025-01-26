import axios from "axios";
import { BLOGAPI } from "./constant";

export const getBlog = async () => {
  try {
    const response = await axios.get(BLOGAPI);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Get specific blog information
 * @param id
 * @returns
 */
export const getBlogById = async (id: number | string | undefined) => {
  try {
    const response = await axios.get(`${BLOGAPI}/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
